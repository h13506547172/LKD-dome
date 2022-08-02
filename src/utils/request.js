import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})

// request interceptor
service.interceptors.request.use()

// 响应拦截器
service.interceptors.response.use(
  function (res) {
    // 如果是验证码请求没有success
    if (res.data.success === undefined) {
      return res.config.url
    }
    // 对返回的数据进行解构，如果成功就返回数据
    const { msg, success } = res.data
    if (success) {
      return res.data
    }
    // 失败就抛出错误
    return Promise.reject(new Error(msg))
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default service
