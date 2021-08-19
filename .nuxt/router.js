import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fc725c18 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _dc5013ae = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _ad41d142 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _b1c4e7c2 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _6457ef26 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _75f7f837 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _e4306128 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _fc725c18,
    children: [{
      path: "",
      component: _dc5013ae,
      name: "home"
    }, {
      path: "/login",
      component: _ad41d142,
      name: "login"
    }, {
      path: "/register",
      component: _ad41d142,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _b1c4e7c2,
      name: "profile"
    }, {
      path: "/settings",
      component: _6457ef26,
      name: "settings"
    }, {
      path: "/editor",
      component: _75f7f837,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _e4306128,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
