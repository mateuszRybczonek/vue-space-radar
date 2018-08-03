import { make } from 'vuex-pathify'

const state = {
  selectedPlanet: null,
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
            url: 'https://github.com/vuejs/vue-cli',
            status: 'inUse',
            fullName: 'vuejs/vue-cli',
            owner: 'vuejs',
            avatar: 'https://avatars1.githubusercontent.com/u/6128107?v=4',
            description: '🛠️ Standard Tooling for Vue.js Development',
            createdAt: '2015-12-26T23:11:20Z',
            updatedAt: '2018-07-31T20:23:59Z',
            stargazersCount: 14454,
            openIssuesCount: 72,
          },
          {
            name: 'Vuex',
            url: 'https://chat.vuejs.org/',
            status: 'inUse',
          },
          {
            name: 'Vue-devtools',
            url: 'https://forum.vuejs.org/',
            status: 'inUse',
          },
          {
            name: 'Vue-router',
            url: 'https://forum.vuejs.org/',
            status: 'inUse',
          },
          {
            name: 'Eslint-plugin-vue',
            url: 'https://forum.vuejs.org/',
            status: 'inUse',
          },
        ],
        bet: [
          {
            name: 'Nuxt.js',
            url: 'https://chat.vuejs.org/',
            status: 'bet',
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
            name: 'Vue-svg-loader',
            url: 'https://vue-loader.vuejs.org/',
          },
          {
            name: 'VueI18n',
            url: 'https://vue-loader.vuejs.org/',
          } 
        ],
        bet: [
          
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