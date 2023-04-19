import request from '@/utils/request'

export function getAssetsList(data) {
  return request({
    url: '/asset/list',
    method: 'post',
    data
  })
}