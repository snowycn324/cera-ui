import { VueConstructor } from "vue";
import CeraTeleport from "./CeraTeleport/";
import CeraModal from "./CeraModal";
import CeraLoading from "./CeraLoading";

const components = [CeraTeleport, CeraModal, CeraLoading];

interface Install {
  installed?: boolean,
  (Vue: VueConstructor): void,
}

const install: Install = (Vue: VueConstructor) => {
  if (install.installed) return;
  install.installed = true;
  components.forEach(component => Vue.use(component));
}

interface WindowWithVue {
  Vue?: any
}

if (typeof window !== "undefined" && (Window as WindowWithVue).Vue) {
  install((Window as WindowWithVue).Vue);
}

export default {
  version: "0.0.1",
  install,
};

export {
  CeraTeleport,
  CeraModal,
  CeraLoading
};