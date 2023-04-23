import request from '@/utils/request'

export function getAssetsList(data) {
  return request({
    url: '/asset/list',
    method: 'post',
    data
  })
}
export function getAssetCategoryList(data) {
  return request({
    url: '/asset/assetcategory',
    method: 'get',
    data
  })
}

export function getAddAsset(data) {
  return request({
    url: '/asset/addasset',
    method: 'post',
    data
  })
}