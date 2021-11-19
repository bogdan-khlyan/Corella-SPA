import Notification from "element-ui/packages/notification/src/main";

export function timestampToDate (timestamp) {
    if (!timestamp)
        return '-'
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date = new Date(timestamp);
    return date.getFullYear() + ' ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getHours() + ':' + (date.getMinutes() > 9 ? date.getMinutes() : ('0' + date.getMinutes()));
}

export function generateId () {
    return new Date().getTime().toString() + Math.random().toString()
}

export function copyToClipboard (text, message = 'Copied successfully', offset = 0) {
    navigator.clipboard.writeText(text)
        .then(() => {
            Notification.info({
                title: 'Info',
                message: message,
                offset: offset
            })
        })
        .catch(err => {
            console.log('Something went wrong', err)
        })
}

export function copyDeep (target) {

    if (typeof target !== 'object' || typeof target === 'object' && !target)
        return target

    if (Array.isArray(target)) {

        return target.map(value => copyDeep(value))
    } else {
        const result = {}

        Object.entries(target).forEach(([name, value]) => result[name] = copyDeep(value))

        return result
    }
}