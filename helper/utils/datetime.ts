// import dayjs, { ConfigType } from "dayjs"

// export type DatetimeDiff = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'quarter' | 'month' | 'year'

// export const dateRange = (start: ConfigType, end: ConfigType, format: string): string[] => {
//   const range: string[] = []

//   let from = dayjs(start).toDate()
//   const to = dayjs(end).toDate()

//   while (from < to) {
//     range.push(dayjs(from).format(format))
//     const nextDay = from.setDate(from.getDate() + 1)
//     from = dayjs(nextDay).toDate()
//   }

//   dayjs

//   return range
// }

// export const duration = (start: ConfigType, end: ConfigType, output: DatetimeDiff, float?: boolean): number => {
//   return dayjs(end).diff(dayjs(start), output, float)
// }