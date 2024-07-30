export const getFileName = (url: string) => {
    const idx = url.lastIndexOf('/')
    if (idx === -1) return url
    return url.slice(idx + 1)
}

export const paddingZero = (value: string | number) => {
    let _value = Number(value)
    if (_value < 9) return `0${_value}`
    return `${_value}`
}