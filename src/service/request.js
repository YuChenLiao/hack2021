import axios from 'axios'
const Arequest= axios.create({
  baseURL: 'http://47.102.220.227:8080'
})

// 添加请求拦截器
Arequest.interceptors.request.use(config => {
  return config
})
// 添加响应拦截器
Arequest.interceptors.response.use(res => {
  return res
})
export { Arequest }
