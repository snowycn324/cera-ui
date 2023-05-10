import Vue, { DirectiveBinding, VueConstructor, VNode, VNodeComponentOptions } from "vue";
import CeraLoading from "./index.vue";

const CeraLoadingInstance = Vue.extend(CeraLoading);

let mask: Vue | null = null;

const loadingDirective = {
  install: (Vue: VueConstructor) => {
    if (Vue.prototype.$isServer) return;

  let isCeraModal: boolean = false;

  let installed: boolean = false;

  const toggleLoading = (el: HTMLElement, binding: DirectiveBinding<boolean>) => {
    const { value } = binding;
    if (value) {
      (mask as Vue).$el.setAttribute("style", "top: 0;left: 0;bottom: 0;right: 0;z-index: 2147483647;width: 100%;height: 100%;background-color: rgba(50, 50, 50, 0.6);")
      if (isCeraModal) {
        ((mask as Vue).$el as HTMLElement).style.position = "fixed";
      } else {
        ((mask as Vue).$el as HTMLElement).style.position = "absolute";
      }
      Vue.nextTick(() => {
        if (isCeraModal) {
          const modals = document.getElementsByClassName("cera-modal");
          for (let i = 0; i < modals.length; i++) {
            (modals.item(i) as HTMLElement).style.opacity = "0%";
          }
        } else {
          el.style.position = "relative"
        }
        el.appendChild((mask as Vue).$el);
      });
    } else {
      Vue.nextTick(() => {
        // el.removeChild((mask as Vue)?.$el);
      });
    }
  }

  Vue.directive('cloading', {
    bind: function(el: HTMLElement, binding: DirectiveBinding<boolean>, vNode: VNode) {
      installed = true;
      mask = new CeraLoadingInstance({
        el: document.createElement("div")
      });
      const { tag = '' } = vNode?.componentOptions as VNodeComponentOptions || {};
      if (tag === "cera-modal") {
        isCeraModal = true;
      }
      toggleLoading(isCeraModal ? document.body : el, binding);
    },

    update: function(el: HTMLElement, binding: DirectiveBinding<boolean>) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(isCeraModal ? document.body : el, binding);
      }
    },

    unbind: function(el: HTMLElement) {
      if (installed) {
        if (isCeraModal) {
          document.body.removeChild((mask as Vue).$el);
        } else {
          el.removeChild((mask as Vue).$el);
        }
      }
      mask?.$destroy();
    }
  });
  }
};

export default loadingDirective;