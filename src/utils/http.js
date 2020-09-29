import axios from 'axios'
import Vue from 'vue'
// 配置请求的跟路径, 目前用mock模拟数据, 所以暂时把这一项注释起来

Vue.prototype.$http = axios
