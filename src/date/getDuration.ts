type TOptions = {
    lang?: 'EN' | 'CN',
}

/**
 * 提供秒数，返回时间段
 * @param seconds 秒数 
 * @param options 默认值 `{ lang: 'EN' }`
 *      - lang: 语言，支持 EN 英文；CN 中文。
 * @returns 1分10秒
 */
export default (seconds: number | string, options: TOptions = {}) => {
    const { lang = 'CN' } = options
    let _seconds
    if (typeof seconds === 'string') {
        _seconds = Math.ceil(parseFloat(seconds))
    } else {
        _seconds = Math.ceil(seconds)
    }

    let cnUnits = ['秒', '分', '时', '日'];
    let enUnits = ['s', 'm', 'h', 'd'];
    let unitsPow = [60, 60, 60, 24];
    let curunitindex = 0;
    let str = '';
    let units = lang === 'CN' ? cnUnits : enUnits

    const formatZero = (value: string | number, isPadding: boolean) => {
        return isPadding ? String(value).padStart(2, '0') : value
    }


    while (curunitindex < units.length) {
        if (_seconds < unitsPow[curunitindex + 1] || units.length - 1 === curunitindex) {
            str = String(_seconds).padStart(2, '0') + units[curunitindex] + str;
            break;
        }

        let per = unitsPow[curunitindex + 1];
        let result = Math.floor(_seconds % per)
        str = String(result).padStart(2, '0') + units[curunitindex] + str;
        _seconds = Math.floor(_seconds / per);
        curunitindex++;
    }

    return str
}
