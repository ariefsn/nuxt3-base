import { AjaxDelete, AjaxGet, AjaxPost, AjaxPut, IAjaxExtras } from "~~/models/ajax";
import { FetchResponse } from 'ohmyfetch'
import { MethodDelete, MethodGet, MethodPost, MethodPut } from "./constant";

class Ajax {
  constructor() {
  }

  private baseUrl = ''

  setBaseUrl(newUrl: string) {
    this.baseUrl = newUrl
  }

  get: AjaxGet = <T = any>(url: string, extras?: IAjaxExtras): Promise<FetchResponse<T>> => {
    return $fetch.raw<T>(url, {
      baseURL: this.baseUrl,
      method: MethodGet,
      params: extras?.params,
      headers: extras?.headers,
    })
  }

  $get = async <T = any>(url: string, extras?: IAjaxExtras): Promise<T> => {
    const res = await $fetch<T>(url, {
      baseURL: this.baseUrl,
      method: MethodGet,
      params: extras?.params,
      headers: extras?.headers,
    })

    console.log('zz', res, <T>res)

    return Promise.resolve<T>(<T>res)
  }

  post: AjaxPost = <T = any>(url: string, payload: BodyInit | null | undefined, extras?: IAjaxExtras): Promise<FetchResponse<T>> => {
    return $fetch.raw<T>(url, {
      baseURL: this.baseUrl,
      method: MethodPost,
      body: payload,
      params: extras?.params,
      headers: extras?.headers
    })
  }

  $post: AjaxPost = <T = any>(url: string, payload: BodyInit | null | undefined, extras?: IAjaxExtras): Promise<FetchResponse<T>> => {
    return $fetch(url, {
      baseURL: this.baseUrl,
      method: MethodPost,
      body: payload,
      params: extras?.params,
      headers: extras?.headers
    })
  }

  put: AjaxPut = <T = any>(url: string, payload: BodyInit | null | undefined, extras?: IAjaxExtras): Promise<FetchResponse<T>> => {
    return $fetch.raw(url, {
      baseURL: this.baseUrl,
      method: MethodPut,
      body: payload,
      params: extras?.params,
      headers: extras?.headers
    })
  }

  $put: AjaxPut = <T = any>(url: string, payload: BodyInit | null | undefined, extras?: IAjaxExtras): Promise<FetchResponse<T>> => {
    return $fetch.raw(url, {
      baseURL: this.baseUrl,
      method: MethodPut,
      body: payload,
      params: extras?.params,
      headers: extras?.headers
    })
  }

  delete: AjaxDelete = <T = any>(url: string, extras?: IAjaxExtras): Promise<FetchResponse<T>> => {
    return $fetch.raw(url, {
      baseURL: this.baseUrl,
      method: MethodDelete,
      params: extras?.params,
      headers: extras?.headers
    })
  }

  $delete: AjaxDelete = <T = any>(url: string, extras?: IAjaxExtras): Promise<FetchResponse<T>> => {
    return $fetch.raw(url, {
      baseURL: this.baseUrl,
      method: MethodDelete,
      params: extras?.params,
      headers: extras?.headers
    })
  }

}

export default Ajax