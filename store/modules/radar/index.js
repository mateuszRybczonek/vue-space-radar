import { make } from 'vuex-pathify'

const state = {
  ecosystemAngle: 0,
  ecosystemAnimation: '',
  childAnimation: '',
  childAngle: 0,
  dist: 0,
  ecosystem: [
    {
      name: 'Core',
      viewName: 'Core',
      elements: {
        inUse: [
          {
            name: 'Vue-cli',
            url: 'https://forum.vuejs.org/',
          },
          {
            name: 'Vuex',
            url: 'https://chat.vuejs.org/',
          },
          {
            name: 'Vue-devtools',
            url: 'https://forum.vuejs.org/',
          },
          {
            name: 'Vue-router',
            url: 'https://forum.vuejs.org/',
          },
          {
            name: 'Eslint-plugin-vue',
            url: 'https://forum.vuejs.org/',
          },
        ],
        bet: [
          {
            name: 'Nuxt.js',
            url: 'https://chat.vuejs.org/',
          }
        ],
        experiment: []
      }
    },
    {
      name: 'Tools',
      viewName: 'Tools',
      elements: {
        inUse: [
          {
            name: 'Vue-Devtools',
            url: 'https://github.com/vuejs/vue-devtools',
          },
          {
            name: 'Vetur',
            url: 'https://vuejs-templates.github.io/webpack',
          },
          {
            name: 'Vue-test-utils',
            url: 'https://vue-loader.vuejs.org/',
          } 
        ],
        bet: [],
        experiment: []
      }
    },
    {
      name: 'Libraries',
      viewName: 'Libraries',
      elements: {
        inUse: [
          {
            name: 'Vuetify',
            url: 'https://github.com/vuejs/vue-devtools',
          },
          {
            name: 'Vuelidate',
            url: 'https://vuejs-templates.github.io/webpack',
          },
          {
            name: 'VueI18n',
            url: 'https://vue-loader.vuejs.org/',
          },
          {
            name: 'Vue-svg-loader',
            url: 'https://vue-loader.vuejs.org/',
          },
          {
            name: 'VueI18n',
            url: 'https://vue-loader.vuejs.org/',
          } 
        ],
        bet: [
          {
            name: 'VueI18n',
            url: 'https://vue-loader.vuejs.org/',
          } 
        ],
        experiment: [
          {
            name: 'Vue-apollo',
            url: 'https://vue-loader.vuejs.org/',
          },
          {
            name: 'Vuency',
            url: 'https://vue-loader.vuejs.org/',
          },
          {
            name: 'Vuex-pathify',
            url: 'https://vue-loader.vuejs.org/',
          },
        ]
      }
    },
  ],
}

export default {
  state,
  getters: { ...make.getters(state) },
  actions: { ...make.actions(state) },
  mutations: { ...make.mutations(state) }
}