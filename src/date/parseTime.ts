type TOptions = {
    type?: 'local' | 'utc'
}
export default (timestamp: number | string, options: TOptions = {}) => {
    const { type = 'local' } = options
    const date = new Date(timestamp)

    if (type === 'utc') {
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();
        const hour = date.getUTCHours();
        const minute = date.getUTCMinutes();
        const second = date.getUTCSeconds();
        return {
            year,
            month,
            day,
            hour,
            minute,
            second
        }
    } else {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return {
            year,
            month,
            day,
            hour,
            minute,
            second
        }
    }
}