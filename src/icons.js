import Vue from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// TODO uncomment for adding icons
//   import { library } from '@fortawesome/fontawesome-svg-core'
//   import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
//   library.add(faUserSecret)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEraser } from '@fortawesome/free-solid-svg-icons'
library.add(faEraser);

Vue.component('font-awesome-icon', FontAwesomeIcon);
