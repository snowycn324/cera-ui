import CeraTeleport from "./index.vue";
import { VueConstructor } from "vue";

CeraTeleport.install = function(Vue: VueConstructor) {
  Vue.component(CeraTeleport.name, CeraTeleport);
}

export default CeraTeleport;