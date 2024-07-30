import { paddingZero } from '../utils'

/**
 * @param seconds 秒数
 * @param isPaddingZero 是否填充0
 * @returns xx日xx时xx分xx秒 （1分10秒）
 */
export const getDuration = (seconds: number | string, isPaddingZero = false) => {
    let _seconds
    if (typeof seconds === 'string') {
        _seconds = Math.ceil(parseFloat(seconds))
    } else {
        _seconds = Math.ceil(seconds)
    }

    let units = ['秒', '分', '时', '日'];
    let unitsPow = [60, 60, 60, 24];
    let curunitindex = 0;
    let str = '';

    const getPaddingZero = (value: string | number, isPadding: boolean) => {
        return isPadding ? paddingZero(value) : value
    }
    while (curunitindex < units.length) {
        if (_seconds < unitsPow[curunitindex + 1] || units.length - 1 === curunitindex) {
            str = getPaddingZero(_seconds, isPaddingZero) + units[curunitindex] + str;
            break;
        }
        let per = unitsPow[curunitindex + 1];
        let result = Math.floor(_seconds % per)
        str = getPaddingZero(result, isPaddingZero) + units[curunitindex] + str;
        _seconds = Math.floor(_seconds / per);
        curunitindex++;
    }

    return str
}

