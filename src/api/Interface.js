import request from '@/utils/request'

const interfaceApi = {
  InterfaceList: '/interfaceInfo/list/page',
  getInterfaceInfoById: '/interfaceInfo/get',
  InterfaceListPage: '/interfaceInfo/list/querypage',
  Addlnterfacelnfo: '/interfaceInfo/add',
  DeleteInterfaceInfo: '/interfaceInfo/delete',
  UpdateInterfaceInfo: '/interfaceInfo/update',
  OnlineInterfaceInfo: '/interfaceInfo/online',
  OfflineInterfaceInfo: '/interfaceInfo/offline',
  InvokeInterfaceInfo: '/interfaceInfo/invoke'
}

export function interfacelist (parameter) {
  return request({
    url: interfaceApi.InterfaceList,
    method: 'post',
    data: parameter
  })
}

export function interfacelistPage (parameter) {
  return request({
    url: interfaceApi.InterfaceListPage,
    method: 'post',
    data: parameter
  })
}

export function getInterfaceInfoById (parameter) {
  return request({
    url: interfaceApi.getInterfaceInfoById,
    method: 'get',
    params: parameter
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

export function onlineInterfaceInfo (parameter) {
  return request({
    url: interfaceApi.OnlineInterfaceInfo,
    method: 'post',
    data: parameter
  })
}

export function offlineInterfaceInfo (parameter) {
  return request({
    url: interfaceApi.OfflineInterfaceInfo,
    method: 'post',
    data: parameter
  })
}

export function invokeInterfaceInfo (parameter) {
  return request({
    url: interfaceApi.InvokeInterfaceInfo,
    method: 'post',
    data: parameter
  })
}
