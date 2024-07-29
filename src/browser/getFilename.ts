export default (url: string) => {
    const idx = url.lastIndexOf('/')
    if (idx === -1) return url
    return url.slice(idx + 1)
} 