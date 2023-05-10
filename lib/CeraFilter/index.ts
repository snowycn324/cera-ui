import CeraFilter from "./index.vue";
import { VueConstructor } from "vue";

CeraFilter.install = function(Vue: VueConstructor) {
  Vue.component(CeraFilter.name, CeraFilter);
}

export default CeraFilter;