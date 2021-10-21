export interface IMatchString {
  containsAlpha: boolean
  containsAlphaLowercase: boolean
  containsAlphaUppercase: boolean
  containsAlphaNumeric: boolean
  containsNumeric: boolean
  onlyAlpha: boolean
  onlyNumeric: boolean
  onlyAlphaNumeric: boolean
}

export const capitalize = (str: string): string => {
  if (!str) {
    return ''
  }

  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1)
  })
}

export const randomString = (length: number = 32): string => {
  let text = ''

  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}

export const limitString = (str: string, limit: number): string => {
  if (limit > 0) {
    if (str.length > limit) { str = str.substring(0, limit) }
  }

  return str
}

export const matchString = (str: string): IMatchString => {
  const regex = {
    containsAlpha: /[a-zA-Z]/,
    containsAlphaLowercase: /[a-z]/,
    containsAlphaUppercase: /[A-Z]/,
    containsNumeric: /\d+/,
    containsAlphaNumeric: /^([0-9]|[a-z])+([0-9a-z]+)$/i, // /^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/,
    onlyAlpha: /^[A-Za-z]+$/,
    onlyNumeric: /^[0-9]+$/,
    onlyAlphaNumeric: /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/
  }

  const expMatch = {} as IMatchString
  expMatch.containsAlpha = regex.containsAlpha.test(str)
  expMatch.containsAlphaLowercase = regex.containsAlphaLowercase.test(str)
  expMatch.containsAlphaUppercase = regex.containsAlphaUppercase.test(str)
  expMatch.containsNumeric = regex.containsNumeric.test(str)
  expMatch.containsAlphaNumeric = regex.containsAlphaNumeric.test(str)
  expMatch.onlyAlpha = regex.onlyAlpha.test(str)
  expMatch.onlyNumeric = regex.onlyNumeric.test(str)
  expMatch.onlyAlphaNumeric = regex.onlyAlphaNumeric.test(str)

  return expMatch
}

export const slugify = (text: string): string => {
  if (!text) {
    return '-'
  }

  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}