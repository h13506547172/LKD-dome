import request from '@/utils/request'

export function loginAPI(data) {
  return request({
    url: '/user-service/user/login',
    method: 'post',
    headers: { 'Content-Type': 'application/json'},
    data
  })
}

// 获取验证码图片
export const getCodeImgAPI = (clientToken) => {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    method: 'GET',
  })
}