import Vue from 'vue'
import router from '@/router.js'
Vue.directive('permission', {
  inserted(el, binding) {
    const action = binding.value.action
    // 判断当前路由所对应的组件中，如何判断用户是否具备action的权限
    const effect = binding.value.effect
    if (router.currentRoute.meta.indexOf(action) === -1) {
      if (effect === 'disabled') {
        el.disabled = true
        el.classList.add('is-disabled')
      } else {
        el.parentNode.removeChild(el)
      }
    }
  }
})
