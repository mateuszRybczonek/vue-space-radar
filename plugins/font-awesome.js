import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)
library.add(faExclamationCircle)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)