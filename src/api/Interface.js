import request from '@/utils/request'

const interfaceApi = {
  InterfaceList: '/interfaceInfo/list/page',
  Addlnterfacelnfo: '/interfaceInfo/add',
  DeleteInterfaceInfo: '/interfaceInfo/delete',
  UpdateInterfaceInfo: '/interfaceInfo/update'
}

export function interfacelist (parameter) {
  return request({
    url: interfaceApi.InterfaceList,
    method: 'post',
    data: parameter
  })
}

export function addlnterfacelnfo (parameter) {
  return request({
    url: interfaceApi.Addlnterfacelnfo,
    method: 'post',
    data: parameter
  })
}

export function deleteInterfaceInfo (parameter) {
  return request({
    url: interfaceApi.DeleteInterfaceInfo,
    method: 'post',
    data: parameter
  })
}

export function updateInterfaceInfo (parameter) {
  return request({
    url: interfaceApi.UpdateInterfaceInfo,
    method: 'post',
    data: parameter
  })
}
