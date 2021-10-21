import { ConfigType } from 'dayjs'
// import { DatetimeDiff } from './datetime'
import { IMatchString } from './strings'

export interface IMethods {
  randomColor: () => string
  sleep: (time: number) => Promise<void>
  debounce: (func: () => void, timeout: number) => () => void
  randomNumberBetween: (min: number, max: number) => number
  formatNumber: (amount: number, decimalCount?: number, thousands?: string, decimal?: string) => string
  normalize: (value: number, min: number, max: number, minList: number, maxList: number) => number
  dateRange: (start: ConfigType, end: ConfigType, format: string) => string[]
  // duration: (start: ConfigType, end: ConfigType, output: DatetimeDiff, float?: boolean) => number
  capitalize: (str: string) => string
  randomString: (length?: number) => string
  limitString: (str: string, limit: number) => string
  matchString: (str: string) => IMatchString
  slugify: (text: string) => string
}

export * from './others'
// export * from './datetime'
export * from './numbers'
export * from './strings'