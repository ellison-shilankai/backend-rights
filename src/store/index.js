import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 没有数据的时候sessionStorage会报错所以传一个空的数组
    rightList: JSON.parse(sessionStorage.getItem('rightList') || '[]'),
    userName: sessionStorage.getItem('userName')
  },
  mutations: {
    setRightList(state, data) {
      state.rightList = data
      sessionStorage.setItem('rightList', JSON.stringify(data))
    },
    setUserName(state, data) {
      state.userName = data
      sessionStorage.setItem('userName', data)
    }
  },
  actions: {
  },
  getters: {
  }
})
