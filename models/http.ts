import { _Transform, KeyOfRes, AsyncDataOptions } from "nuxt3/dist/app/composables/asyncData"
import { fetch, FetchResponse } from 'ohmyfetch'

export interface SearchParams {
  [key: string]: any;
}

export interface IHttpExtras {
  headers?: HeadersInit | undefined
  params?: SearchParams | undefined
}

export type HttpGetRaw = <T>(url: string, extras?: IHttpExtras) => Promise<FetchResponse<T>>
export type HttpGet = <T = any>(url: string, extras?: IHttpExtras) => Promise<T>
export type HttpPostRaw = <T>(url: string, payload?: BodyInit | null | undefined, extras?: IHttpExtras) => Promise<FetchResponse<T>>
export type HttpPost = <T = any>(url: string, payload?: BodyInit | null | undefined, extras?: IHttpExtras) => Promise<T>
export type HttpPutRaw = <T>(url: string, payload?: BodyInit | null | undefined, extras?: IHttpExtras) => Promise<FetchResponse<T>>
export type HttpPut = <T = any>(url: string, payload?: BodyInit | null | undefined, extras?: IHttpExtras) => Promise<T>
export type HttpDeleteRaw = <T>(url: string, extras?: IHttpExtras) => Promise<FetchResponse<T>>
export type HttpDelete = <T = any>(url: string, extras?: IHttpExtras) => Promise<T>
