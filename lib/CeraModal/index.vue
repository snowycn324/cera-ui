<template>
  <cera-teleport v-if="value" to="body">
    <div class="cera-modal" :class="containerClass">
      <slot />
    </div>
  </cera-teleport>
</template>

<script lang="ts">
import CeraTeleport from "../CeraTeleport";
export default {
  name: "CeraModal",
  model: {
    prop: "value",
    event: "updateValue",
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    containerClass: {
      type: String,
      default: "",
    }
  },
  components: {
    CeraTeleport,
  }
}
</script>

<style>
.cera-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 100, 100, 0.5);
  z-index: 2147483647;
}
</style>