export const randomColor = (): string => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const sleep = (time: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, time))
}

export const debounce = (func: () => void, timeout: number): () => void => {
  let timer: NodeJS.Timeout

  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => { func.apply(this) }, timeout)
  }
}