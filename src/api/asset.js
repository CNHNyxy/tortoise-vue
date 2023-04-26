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
export function getCurrencyList(data) {
  return request({
    url: '/asset/currency',
    method: 'get',
    data
  })
}
export function addAsset(data) {
  return request({
    url: '/asset/addasset',
    method: 'post',
    data
  })
}

export function updateAsset(data) {
  return request({
    url: '/asset/updateasset',
    method: 'post',
    data
  })
}