// 格式化时间
export function formatTime(date) {
    let Y = date.getFullYear() + '',
        M = date.getMonth() + 1,
        D = date.getDate(),
        H = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    return `${(M < 10 ? '0' : '') + M}月${(D < 10 ? '0' : '') + D}日${toDays(date)}`
}

// 计算日期之间的天数
export function getDays(strDateStart, strDateEnd) {
    var iDays;
    var strDateS = strDateStart;
    var strDateE = strDateEnd;
    iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
    return iDays + 1;
}

// 返回是今天或者明天或者星期几,时间戳
export function toDays(date) {
    let d = date.setHours(0, 0, 0, 0);
    let today = new Date().setHours(0, 0, 0, 0);

    let obj = {
        '-86400000': '昨天',
        0: '今天',
        86400000: '明天',
    };
    return obj[d - today] || weekday(date.getDay())
}

// 格式化 星期
export function weekday(d) {
    var weekday = new Array(7);
    weekday[0] = "周日";
    weekday[1] = "周一";
    weekday[2] = "周二";
    weekday[3] = "周三";
    weekday[4] = "周四";
    weekday[5] = "周五";
    weekday[6] = "周六";
    return weekday[d];
}

// 获取明天日期
export function tomorrow() {
    var day3 = new Date();
    day3.setTime(day3.getTime() + 24 * 60 * 60 * 1000);
    var s3 = day3.getFullYear() + "-" + (day3.getMonth() + 1) + "-" + day3.getDate();
    return s3
}