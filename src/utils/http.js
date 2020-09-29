import axios from 'axios'
import Vue from 'vue'
import router from '@/router.js'
// 配置请求的跟路径, 目前用mock模拟数据, 所以暂时把这一项注释起来
// axios.defaults.baseURL='http://127.....'
const actionMapping = {
  'get': 'view',
  'post': 'add',
  'put': 'edit',
  'delete': 'delete'
}
// 在 request 拦截器实现
axios.interceptors.request.use((req) => {
  console.log(req)
  if (req.url !== 'login') {
    // 不是登录的请求，我们应该在该请求头中，加入token数据
    req.headers.Authorization = sessionStorage.getItem('token')
    const action = actionMapping[req.method]
    const currentRight = router.currentRoute.meta
    if (currentRight && currentRight.indexOf(action) === -1) {
      alert('没有权限')
      return Promise.reject(new Error('没有权限'))
    }
  }
  return req
})
axios.interceptors.response.use((res) => {
  if (res.data.meta.status === 401) {
    router.push('/login')
    sessionStorage.clear()
    window.location.reload()
  }
  return res
})
Vue.prototype.$http = axios
