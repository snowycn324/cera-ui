import CeraModal from "./index.vue";
import { VueConstructor } from "vue";

CeraModal.install = function(Vue: VueConstructor) {
  Vue.component(CeraModal.name, CeraModal);
}

export default CeraModal;