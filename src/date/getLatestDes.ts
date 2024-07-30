import formatTime from './formatTime'
type TOption = {
    lang?: 'EN' | 'CN',
    maxDiff?: number,
    minDiff?: number,
}
/**
 * 传入时间节点，返回该时间节点距离现在的文字说明
 * 
 * @param value 可传入时间戳毫秒数 或者 时间字符串(2024-07-30 15:07:00)
 * @param options 默认值  `{ lang: 'EN', maxDiff: 60 * 60 * 24 * 7, minDiff: 30 }`
 * - lang: 语言，支持 EN 英文；CN 中文。默认 CN
 * - maxDiff: 当间隔超过 maxDiff 时，显示具体时间
 * - minDiff: 当间隔小于 minDiff 时，显示“刚刚/just now”
 * @returns 2天前 / 2 days ago 
 */
export default (value: number | string, options: TOption = {}): string => {

    const { lang = 'EN', maxDiff = 60 * 60 * 24 * 7, minDiff = 30 } = options

    let lastTime
    if (typeof value === 'string') {
        lastTime = new Date(value).getTime()
    } else {
        lastTime = value
    }

    const diff = Math.ceil((new Date().getTime() - lastTime) / 1000)

    const timeUnits = [
        { name: '天', enName: 'day', seconds: 60 * 60 * 24 },
        { name: '小时', enName: 'hour', seconds: 60 * 60 },
        { name: '分钟', enName: 'minute', seconds: 60 },
        { name: '秒', enName: 'second', seconds: 1 }
    ];

    if (diff < minDiff) return lang === 'CN' ? '刚刚' : 'just now'
    if (diff > maxDiff) return formatTime(lastTime)


    for (const { name, seconds, enName } of timeUnits) {
        const value = Math.floor(diff / seconds);
        if (value >= 1) {
            if (lang === 'CN') {
                return `${value}${name}前`;
            } else {
                return `${value} ${enName}${value > 1 ? 's' : ''} ago`;
            }

        }
    }
    return ''
}


