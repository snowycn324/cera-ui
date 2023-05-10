import CeraLoading from "./index.vue";
// import directive from './directive';
import { VueConstructor } from "vue";

CeraLoading.install = function(Vue: VueConstructor) {
  Vue.component(CeraLoading.name, CeraLoading);
  // Vue.use(directive);
}

export default CeraLoading;