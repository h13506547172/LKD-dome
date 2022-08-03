import axios from 'axios'
import store from '@/store/index'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前如果user.token存在就添加请求头
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = store.state.user.token
    }
    //config是本次请求的请求配置对象,一定要返回
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  function (res) {
    // 如果是验证码请求没有success
    // if (res.data.success === undefined) {
    //   return res.config.url
    // }
    // 对返回的数据进行解构，如果成功就返回数据
    // const { msg, success } = res.data
    // if (success) {
    //   return res.data
    // }
    // 失败就抛出错误
    // return Promise.reject(new Error(msg))
    return res
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default service
