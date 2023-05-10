<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "CeraTeleport",
  props: {
    to: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      nodes: [] as ChildNode[],
      waiting: false,
      observer: null as MutationObserver | null,
      parent: null as Element | null,
    };
  },
  watch: {
    to: 'maybeMove',
    disabled(value) {
      if (value) {
        this.disable();
        this.teardownObserver();
      } else {
        this.checkObserver();
        this.move();
      }
    },
  },
  mounted() {
    // Store a reference to the nodes
    this.nodes = Array.from(this.$el.childNodes);
    if (!this.disabled) {
      this.checkObserver();
    }
    // Move slot content to target
    this.maybeMove();
  },
  beforeDestroy() {
    // Move back
    this.disable();
    // Stop observing
    this.teardownObserver();
  },
  computed: {
    classes() {
      if (this.disabled) {
        return ['cera-teleporter'];
      }
      return ['cera-teleporter', 'hidden'];
    },
  },
  methods: {
    maybeMove() {
      if (!this.disabled) {
        this.move();
      }
    },
    move() {
      this.waiting = false;
      this.parent = document.querySelector(this.to);
      if (!this.parent) {
        this.disable();
        this.waiting = true;
        return;
      }
      this.parent.appendChild(this.getFragment());
    },
    disable() {
      this.$el.appendChild(this.getFragment());
      this.parent = null;
    },
    // Using a fragment is faster because it'll trigger only a single reflow
    // See https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
    getFragment() {
      const fragment = document.createDocumentFragment();
      this.nodes.forEach(node => fragment.appendChild(node));
      return fragment;
    },
    onMutations(mutations: any) {
      // Makes sure the move operation is only done once
      let shouldMove = false;
      for (let i = 0; i < mutations.length; i++) {
        const mutation = mutations[i];
        const filteredAddedNodes = Array.from(mutation.addedNodes).filter(node => !this.nodes.includes(node as ChildNode));
        if (Array.from(mutation.removedNodes).includes(this.parent)) {
          this.disable();
          this.waiting = !this.disabled;
        } else if (this.waiting && filteredAddedNodes.length > 0) {
          shouldMove = true;
        }
      }
      if (shouldMove) {
        this.move();
      }
    },
    bootObserver() {
      this.observer = new MutationObserver(mutations => this.onMutations(mutations));
      this.observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
      });
    },
    checkObserver() {
      if (this.observer) {
        return;
      } else {
        this.bootObserver();
      }
    },
    teardownObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
    },
  },
};
</script>
<style>
</style>
