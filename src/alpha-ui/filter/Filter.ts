import moment, { Moment } from 'moment'

/**
 * 时间过滤器
 * @param val
 * @param arg
 */
export const dateFormate = (val: string, ...arg: any[]): string => {
  const format = arg[0] || 'YYYY-MM-DD HH:mm:ss'
  const date: Moment = moment(val.trim())
  if (date.isValid) {
      return date.format(format)
  }
  return 'Datetime display error'
}

/**
 * 货币单位转换
 * 分 => 元
 * @param val
 */
export const valutaFormate = (val: string): number => {
  const num: number = parseInt(val, undefined)
  return num / 100.0
}



