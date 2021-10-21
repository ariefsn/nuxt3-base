export const randomNumberBetween = (min: number, max: number): number => {
  return min > max ? 0 : Math.floor(Math.random() * max) + min
}

export const formatNumber = (amount: number, decimalCount: number = 2, thousands: string = ',', decimal: string = '.'): string => {
  try {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount

    const negativeSign = amount < 0 ? '-' : ''

    const i = parseInt(
      (Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString()
    const j = i.length > 3 ? i.length % 3 : 0

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
        Math.abs(amount - parseInt(i))
          .toFixed(decimalCount)
          .slice(2)
        : '')
    )
  } catch (e) {
    /* eslint-disable-next-line */
    console.log(e)
    return ''
  }
}

export const normalize = (value: number, min: number, max: number, minList: number, maxList: number): number => {
  return min + ((value - minList) / (maxList - minList)) * (max - min)
}