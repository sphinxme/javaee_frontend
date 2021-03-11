import Vue from 'vue'

import 'overlayscrollbars/css/OverlayScrollbars.css'
import {
  OverlayScrollbarsPlugin,
  OverlayScrollbarsComponent
}
  from 'overlayscrollbars-vue'

Vue.use(OverlayScrollbarsPlugin)

// global registration
Vue.component('overlay-scrollbars', OverlayScrollbarsComponent)
