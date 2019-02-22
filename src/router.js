import Vue from 'vue'
import Router from 'vue-router'
import Presentation1 from './views/presentations/HackingHackAndSlashOnTerminalAktsk'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Presentation1
    },
    {
      path: '/presentations/hacking-hack-and-slash-on-terminal-in-aktsk',
      name: 'Presentation1',
      component: Presentation1
    }
  ]
})
