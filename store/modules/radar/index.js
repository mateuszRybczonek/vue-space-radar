import { make } from 'vuex-pathify'

const state = {
  ecosystemAngle: 0,
  ecosystemAnimation: '',
  childAngle: 0,
  dist: 0,
  ecosystem: [
    {
      name: 'Help',
      icon: 'fa-question',
      viewName: 'help',
      elements: [
        {
          name: 'Forum',
          url: 'https://forum.vuejs.org/',
          icon: 'fa-comments'
        },
        {
          name: 'Chat',
          url: 'https://chat.vuejs.org/',
          icon: 'fa-comments-o'
        }
      ]
    },
    {
      name: 'Tooling',
      icon: 'fa-wrench',
      viewName: 'tooling',
      elements: [
        {
          name: 'Devtools',
          url: 'https://github.com/vuejs/vue-devtools',
          icon: 'fa-code'
        },
        {
          name: 'Webpack Template',
          url: 'https://vuejs-templates.github.io/webpack',
          icon: 'fa-file-code-o'
        },
        {
          name: 'Vue Loader',
          url: 'https://vue-loader.vuejs.org/',
          icon: 'fa-spinner'
        }
      ]
    },
  ],
}

export default {
  state,
  getters: { ...make.getters(state) },
  actions: { ...make.actions(state) },
  mutations: { ...make.mutations(state) }
}