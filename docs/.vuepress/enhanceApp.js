/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import CeraUI from "../../dist/cera-ui.mjs"
import "../../dist/index.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./reset.css"

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(CeraUI);
  Vue.use(ElementUI);
  // ...apply enhancements for the site.
}
