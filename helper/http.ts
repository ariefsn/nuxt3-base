import { HttpDelete, HttpDeleteRaw, HttpGet, HttpGetRaw, HttpPost, HttpPostRaw, HttpPut, HttpPutRaw, IHttpExtras } from "@/models/http";
import { FetchResponse } from 'ohmyfetch'
import { MethodDelete, MethodGet, MethodPost, MethodPut } from "./constants/http";

class Http {
  constructor() {
  }

  private baseUrl = ''

  setBaseUrl(newUrl: string) {
    this.baseUrl = newUrl
  }

  get: HttpGetRaw = <T = any>(url: string, extras?: IHttpExtras): Promise<FetchResponse<T>> => {
    return $fetch.raw<T>(url, {
      baseURL: this.baseUrl,
      method: MethodGet,
      params: extras?.params,
      headers: extras?.headers,
    })
  }

  $get: HttpGet = async <T = any>(url: string, extras?: IHttpExtras): Promise<T> => {
    const res = await $fetch<T>(url, {
      baseURL: this.baseUrl,
      method: MethodGet,
      params: extras?.params,
      headers: extras?.headers,
    })

    return Promise.resolve<T>(<T>res)
  }

  post: HttpPostRaw = <T = any>(url: string, payload: BodyInit | null | undefined, extras?: IHttpExtras): Promise<FetchResponse<T>> => {
    return $fetch.raw<T>(url, {
      baseURL: this.baseUrl,
      method: MethodPost,
      body: payload,
      params: extras?.params,
      headers: extras?.headers
    })
  }

  $post: HttpPost = async <T = any>(url: string, payload: BodyInit | null | undefined, extras?: IHttpExtras): Promise<T> => {
    const res = await $fetch<T>(url, {
      baseURL: this.baseUrl,
      method: MethodPost,
      body: payload,
      params: extras?.params,
      headers: extras?.headers,
    })

    return Promise.resolve<T>(<T>res)
  }

  put: HttpPutRaw = <T = any>(url: string, payload: BodyInit | null | undefined, extras?: IHttpExtras): Promise<FetchResponse<T>> => {
    return $fetch.raw(url, {
      baseURL: this.baseUrl,
      method: MethodPut,
      body: payload,
      params: extras?.params,
      headers: extras?.headers
    })
  }

  $put: HttpPut = async <T = any>(url: string, payload: BodyInit | null | undefined, extras?: IHttpExtras): Promise<T> => {
    const res = await $fetch<T>(url, {
      baseURL: this.baseUrl,
      method: MethodPut,
      body: payload,
      params: extras?.params,
      headers: extras?.headers,
    })

    return Promise.resolve<T>(<T>res)
  }

  delete: HttpDeleteRaw = <T = any>(url: string, extras?: IHttpExtras): Promise<FetchResponse<T>> => {
    return $fetch.raw(url, {
      baseURL: this.baseUrl,
      method: MethodDelete,
      params: extras?.params,
      headers: extras?.headers
    })
  }

  $delete: HttpDelete = async <T = any>(url: string, extras?: IHttpExtras): Promise<T> => {
    const res = await $fetch<T>(url, {
      baseURL: this.baseUrl,
      method: MethodDelete,
      params: extras?.params,
      headers: extras?.headers,
    })

    return Promise.resolve<T>(<T>res)
  }

}

export default Http