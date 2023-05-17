const { description } = require('../../package')

module.exports = {
  base: '/cera-ui/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Cera-UI',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Components',
        link: '/components/'
      },
      {
        text: 'Github',
        link: 'https://github.com/snowycn324/cera-ui'
      }
    ],
    sidebar: {
      "/components": [
        {
          title: "guide",
          collapsable: true,
          path: "components/",
        },
        // {
        //   title: "CeraFilter",
        //   path: "components/CeraFilter",
        //   collapsable: false
        // },
        {
          title: "CeraTeleport",
          path: "components/CeraTeleport",
          collapsable: false
        },
        {
          title: "CeraModal",
          path: "components/CeraModal",
          collapsable: false
        },
        {
          title: "CeraLoading",
          path: "components/CeraLoading",
          collapsable: false
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
