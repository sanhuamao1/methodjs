import parseTime from './parseTime'
/**
 * 格式化时间
 * @param value 时间戳或时间字符串
 * @param format 格式 默认值：`YYYY-MM-DD hh:mm:ss`
 * @returns 2024-10-12 01:01:01
 */
export default (value: number | string, format = "YYYY-MM-DD hh:mm:ss") => {
    const { year, month, day, hour, minute, second } = parseTime(value)
    const formattedDate = format
        .replace('YYYY', String(year).padStart(4, '0'))
        .replace('MM', String(month).padStart(2, '0'))
        .replace('DD', String(day).padStart(2, '0'))
        .replace('hh', String(hour).padStart(2, '0'))
        .replace('mm', String(minute).padStart(2, '0'))
        .replace('ss', String(second).padStart(2, '0'));
    return formattedDate
}