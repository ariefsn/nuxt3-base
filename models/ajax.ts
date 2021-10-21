import { _Transform, KeyOfRes, AsyncDataOptions } from "nuxt3/dist/app/composables/asyncData"
import { fetch, FetchResponse } from 'ohmyfetch'

export interface SearchParams {
  [key: string]: any;
}

export interface IAjaxExtras {
  headers?: HeadersInit | undefined
  params?: SearchParams | undefined
}

export type AjaxGet = <T>(url: string, extras?: IAjaxExtras) => Promise<FetchResponse<T>>
export type AjaxPost = <T>(url: string, payload?: BodyInit | null | undefined, extras?: IAjaxExtras) => Promise<FetchResponse<T>>
export type AjaxPut = <T>(url: string, payload?: BodyInit | null | undefined, extras?: IAjaxExtras) => Promise<FetchResponse<T>>
export type AjaxDelete = <T>(url: string, extras?: IAjaxExtras) => Promise<FetchResponse<T>>

export interface IAjax {
  get: AjaxGet
  post: AjaxPost
  put: AjaxPut
  delete: AjaxDelete
}
