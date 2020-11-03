// 1. isStatuc: 检测数据是不是除了symbol外的原始数据,不是symbol的所有类型
export function isStatic(value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'undefined' ||
        value === null
    )
}
//  2. isPrimitive: 检测数据是不是原始数据
export function isPrimitive(value) {
    return this.isStatic(value) || typeof value === 'symbol'
}
// 3.isObject:判断数据是不是引用类型的数据（列如：array,function,object,regext,new Number(),new String）
export function isObject(value) {
    let type = typeof value
        // return value != null && (type == 'object' || type == 'function')
    return type
}
// 4.isObjectLike:检测value是否是类对象。如果一个值是类对象，那么它不应该是null，而且typeof后的结果是‘object’
export function isObjectLike(value) {
    return value != null && typeof value == 'object'
}
// 5.getRawType:获取数据类型，返回结果为Number、String、Object、Array等
export function getRawType(value) {
    // Object.prototype.toString.call(value) => [object String]
    return Object.prototype.toString.call(value).slice(8, -1)
}
// 6.isPlainObject：判断数据是不是Object类型的数据
export function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
// 7.isArray:判断数据是不是数组类型的数据（）
export function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]'
        // 将isArray挂载到Array上
        // Array.isArray = Array.isArray || isArray;
}
// 8.isRegExp: 判断数据是不是正则对象
export function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]'
}
// 9.isDate: 判断数据是不是时间对象
export function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]'
}
// 10.isNative: 判断value是不是浏览器内置函数
// 内置函数toString后的主体代码块为[native code],而非内置函数则为相关代码，所以非内置函数可以进行拷贝(toString后掐头去尾再由Function转)
export function isNative(value) {
    return typeof value === 'function' && /native code/.test(value.toString())
}
// 11.isFunction: 检查value是不是函数
export function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]'
}
// 12.isLength: 检查value是否为有效的类数组长度
export function isLength(value) {
    return typeof value === 'number' && value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER
}
/**
 * 13.isArrayLike: 检查value是否是类数组
 * 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，
 * 大于等于0，小于或等于Number.MAX_SAFE_INTEGER。这里字符串也被当作类数组。
 */
export function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value)
}
/**
 * 14.isEmpty:检查value是否为空
 * 如果是null，直接返回true；如果是类数组，判断数据长度；
 * 如果是Object对象，判断是否具有属性；如果是其他数据，直接返回false（也可以改为返回true）
 */
export function isEmpty(value) {
    if (value == null) {
        return true;
    }
    if (this.isArrayLike(value)) {
        return !value.length
    } else if (this.isPlainObject(value)) {
        //  没有进来
        for (let key in value) {
            // alert('1111')
            if (this.hasOwnProperty(key)) {
                // alert('1111')
                return 'age'
            }
        }
    }
    return false
}
// 15.cached:记忆函数：缓存函数的运算结果
export function cached(fn) {
    let cache = Object.create(null)
    return function cacheedFn(str) {
        let hit = cache[str]
        return hit || (cache[str] = fn(str))
    }
}
// 16.camelize: 横线转驼峰命名
export function camelize(str) {
    let camelizeRE = /-(\w)/g // 全局匹配 - 
    return str.replace(camelizeRE, function(_, c) { // 	replace 在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串。
        return c ? c.toUpperCase() : '' // 将 - 替换为大写
    })
}
// 17.hyphenate: 驼峰命名转横线命名：拆分字符串，使用-相连，并且转换为小写
export function hyphenate(str) {
    let a = /\B([A-Z])/g
    return str.replace(a, '-$1').toLowerCase()
}
// 18.capitalize：字符串首位大写
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
//  19.extend:将属性混合到目标对象中,将_form的对象属性 添加到 to的对象属性里面
export function extend(to, _form) {
    // 遍历对象属性
    for (let key in _form) {
        to[key] = _form[key]
            // console.log(key)
            // console.log(_form[key])
    }
    return to
}
// 20.Object.assign : 对象属性复制，浅拷贝
// 21.clone:克隆数据，可深度克隆 ?????
export function clone(value, deep) {
    if (this.isPrimitive(value)) {
        return value
    }
    if (this.isArrayLike(value)) { //是类数组
        value = Array.prototype.slice.call(value)
            // console.log(Array.prototype.slice);
            // console.log(Array.prototype.slice.call(value));
        return value.map(item => deep ? this.clone(item, deep) : item)
    } else if (this.isPlainObject(value)) { //是对象
        let target = {},
            key;
        for (key in value) {
            value.hasOwnProperty(key) && (target[key] = deep ? this.clone(value[key], value[key]) : '')
        }
    }
    let type = this.getRawType(value)
    switch (type) {
        case 'Date':
        case 'RegExp':
        case 'Error':
            value = new window[type](value);
            break;
    }
    return value
}
// 22.
// 23.识别各种浏览器及平台
export function distinguish() {
    // 运行环境是浏览器
    let inBrowser = typeof window !== 'undefinet'
        // 运行环境是微信
    let inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
    let weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
        // 浏览器UA判断
    let UA = inBrowser && window.navigator.userAgent.toLowerCase()
    let isIE = UA && /msie|trident/.test(UA)
    let isIE9 = UA && UA.indexOf('msie 9.0') > 0
    let isEdge = UA && UA.indexOf('edge/') > 0
    let isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
    let isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
    let isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
}
// 24.getExploreInfo:获取浏览器信息
export function getExploreInfo() {
    let t = navigator.userAgent.toLowerCase() // 转换为小写
    return 0 <= t.indexOf('msite') ? {
        type: 'IE',
        version: Number(t.match(/msie([\d]+)/)[1])
    } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ? {
        type: "IE",
        version: 11
    } : 0 <= t.indexOf("edge") ? {
        type: "Edge",
        version: Number(t.match(/edge\/([/d]+)/)[1])
    } : 0 <= t.indexOf('firefox') ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1])
    } : 0 <= t.indexOf('chrome') ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1])
    } : 0 <= t.indexOf('opera') ? {
        type: 'opera',
        version: Number(t.match(/opera.([\d]+)/)[1])
    } : 0 <= t.indexOf('Safari') ? {
        type: 'Safari',
        version: Number(t.match(/version\/([\d]+)/)[1])
    } : {
        type: t,
        version: -1
    }
}
// 25.isPCBroswer: 检测是否为PC端浏览器模式
export function isPCBroswer() {
    // 浏览器信息  装换为小写navigator.userAgent.toLowerCase
    let e = navigator.userAgent.toLowerCase(),
        t = 'ipad' == e.match(/ipad/i),
        i = "iphone" == e.match(/iphone/i),
        r = 'midp' == e.match(/midp/i),
        n = 'rv:1.2.3.4' == e.match(/rv:1.2.3.4/i),
        a = 'ucweb' == e.match(/ucweb/i),
        o = 'android' == e.match(/android/i),
        s = 'windows ce' == e.match(/window ce/i),
        l = 'windows mobile' == e.match(/window mobile/i)
    return !(t || i || r || n || a || o || s || l)
}
// 25.unique:数组去重，返回一个新数组
export function unique(arr) {
    if (!isArrayLike(arr)) { //不是类数组对象
        return arr
    }
    let result = []
    let objarr = []
    let obj = Object.create(null)

    arr.forEach(item => {
        if (isStatic(item)) { // 是除了symbol外的原始数据
            let key = item + '_' + getRawType(item)
            if (!obj[key]) {
                obj[key] = true
                result.push(item)
            }
        } else { //引用类型及symbol
            if (!objarr.includes(item)) { //includes查找字符串中是否包含指定的子字符串。
                objarr.push(item)
                result.push(item)
            }
        }
    })

    return result
}
// 26.Set简单实现
// 27.repeat: 生成一个重复的字符串，有n个str组成，可修改为填充为数组等
export function repeat(str, n) {
    let res = ''
    while (n) {
        if (n % 2 === 1) {
            res += str
        }
        if (n > 1) {
            str += str
        }
        n >>= 1;
    }
    return res
}

// 28.dateFormater: 格式化时间
export function dateFormater(formater, t) {
    let date = t ? new Date(t) : new Date,
        Y = date.getFullYear() + '',
        M = date.getMonth() + 1,
        D = date.getDate(),
        H = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds()
        // str.replace(/blue/g,"red") 在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串。
    return formater.replace(/YYYY|yyyy/g, Y)
        .replace(/YY|yy/g, Y.substr(2, 2))
        .replace(/MM/g, (M < 10 ? '0' : '') + M)
        .replace(/DD/g, (D < 10 ? '0' : '') + D)
        .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
        .replace(/mm/g, (m < 10 ? '0' : '') + m)
        .replace(/ss/g, (s < 10 ? '0' : '') + s)
}
// 29.dateStrForma: 将指定字符串由一种时间格式转化为另一种。From的格式对应str的位置
// 不好用。。。
export function dateStrForma(str, from, to) {
    str += ''
    let Y = ''
    if (~(Y = from.indexOf('YYYY'))) {
        Y = str.substr(Y, 4)
        to = to.replace(/YYYY|yyyy/g, Y)
    } else if (~(Y = from.indexOf(YY))) {
        Y = str.substr(Y, 2)
        to = to.replace(/YY|yy/g, Y)
    }

    let k, i
        // 月 日 小时  分钟 秒
        ['M', 'D', 'H', 'h', 'm', 's'].forEach(s => {
            i = from.indexOf(s + s)
            k = ~i ? str.substr(i, 2) : ''
            to = to.replace(s + s, k)
        })
    return to
}
// 30.getPropByPath: 根据字符串路径获取对象属性：obj[0].count
export function getPropByPath(obj, path, strict) {
    let tempObj = obj;
    path = path.replace(/\[(\w+)\]/g, '.$1') // 将[0]转化为 .0
    path = path.replace(/^\./, '') //去除开头的  .

    let keyArr = path.split('.')
    let i = 0
    for (let len = keyArr.length; i < len - 1; ++i) {
        if (!itemObj && !strict) break;
        let key = keyArr[i]
        if (key in tempObj) {
            tempObj = tempObj[key]
        } else {
            if (strict) {
                throw new Error('Please transfer a valid prop path to form item!')
            }
            break
        }
    }

    return {
        o: tempObj, //原始数据
        k: keyArr[i], //key值
        v: tempObj ? tempObj[keyArr[i]] : null // key值对应的值
    }
}
// 31.GetUrlParam: 获取url参数，返回一个对象
export function GetUrlParam() {
    let url = document.location.toString()
        // document.location.toString() window.location.href
    let arrObj = url.split("?")
        // 切割字符串为数组, ? 切割 ['http','sex=男&name=xiaoming']
    let params = {}
    if (arrObj.length > 1) {
        arrObj = arrObj[1].split("&")
        arrObj.forEach(item => {
            item = item.split("=")
            params[item[0]] = item[1]
        })
    }
    return params
}
// 32. downloadFile: base64数据导出文件，文件下载  纯js
export function downloadFile(filename, data) {
    let DownloadLink = document.createElement('a')
    if (DownloadLik) {
        document.body.appendChild(DownloadLink)
        DownloadLink.style = 'display: none'
        DownloadLink.download = 'filename'
        DownloadLink.href = data
        if (document.createEvent) {
            let DownloadEvt = document.createEvent('MouseEvents')
            DownloadEvt.initEvent('click', true, false)
            DownloadEvt.dispatchEvent(DownloadEvt)
        } else if (document.createEventObject) {
            DownloadLink.fireEvent('onclick')
        } else if (typeof DownloadLink.onclick == 'function') {
            DownloadLink.onclick()
        }
        document.body.removeChild(DownloadLink)
    }
}
//  33.toFullScreen: 全屏
export function toFullScreen() {
    let elem = document.body
        // document.getElementById('qwe')
    elem.webkitRequestFullScreen ?
        elem.webkitRequestFullScreen() :
        elem.mozRequestFullScreen ?
        elem.mozRequestFullScreen() :
        elem.msRequestFullscreen ?
        elem.msRequestFullscreen() :
        elem.requestFullScreen ?
        elem.requestFullScreen() :
        alert('浏览器不支持全屏')
}
// 34.exitFullscreen: 退出全屏
export function exitFullscreen() {
    let elem = parent.document
        // parent.document.getElementById('qwe')
    elem.webkitCancelFullScreen ?
        elem.webkitCancelFullScreen() :
        elem.mozCancelFullScreen ?
        elem.mozCancelFullScreen() :
        elem.cancelFullScreen ?
        elem.cancelFullScreen() :
        elem.msExitFullscreen ?
        elem.msExitFullscreen() :
        elem.exitFullscreen ?
        elem.exitFullscreen() :
        alert("切换失败，可尝试Esc退出")
}
export function img() {
    let i = 0;
    if (i % 2 == 0) {
        this.toFullScreen()
    } else {
        this.exitFullscreen()
    }
}
// 35.requestAnimationFrame: window动画
// 36._isNaN : 检查数据是否是非数字值,不是 数字 true ,是 数字 false
export function _isNaN(value) {
    return !(typeof value === 'string' || typeof value === 'number') || isNaN(value)
}
// 37.max: 求取数组中非NaN数据中的最大值
export function max(arr) {
    arr = arr.filter(item => !this._isNaN(item))
    return arr.length ? Math.max.apply(null, arr) : undefined
}
// 38.min: 求取数组中的非NaN数据中的最小值
export function min(arr) {
    arr = arr.filter(item => !this._isNaN(item))
    return arr.length ? Math.min.apply(null, arr) : undefined
}
// 39.random: 返回一个lower-upper直接的随机数。(lower、upper无论正负与大小，但是必须是非NaN的数据)
export function random(lower, upper) {
    lower = +lower || 0
    upper = +upper || 0
    return parseInt(Math.random() * (upper - lower) + lower)
}
//