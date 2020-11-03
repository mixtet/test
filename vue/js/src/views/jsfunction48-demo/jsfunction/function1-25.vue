<template>
    <div class="function">
        <h4>js中常用的工具函数1-25</h4>
        <ol>
            <li>{{isStatic(46)}}</li>
            <li>检测数据是否是原始数据:{{isPrimitive(41)}}</li>
            <li>是否是引用类型：{{isObject(ob)}}</li>
            <li>是否是类对象：{{isObjectLike(clob)}}</li>
            <li>获取数据类型：{{getRawType(ob)}}</li>
            <li>是否是对象：{{isPlainObject(clob)}}</li>
            <li>是否是数组：{{isArray(as)}}</li>
            <li>正则表达判断：{{ isRegExp(regExp) }}</li>
            <li>是否是时间对象：{{ isDate(time) }}</li>
            <li>判断是否是浏览器内置函数：{{ isNative(isPrimitive) }}</li>
            <li>检查value是否是函数：{{ isFunction(isNative) }}</li>
            <li>检查value是否为有效的类数组长度:{{ isLength(clob) }}</li>
            <li>判断数是否是类数组{{ isArrayLike(ob) }}</li>
            <li>???检查value值是否为空：{{ isEmpty(clob) }}</li>
            <li>cached(isLength)</li>
            <li>横线转驼峰命名：{{ camelize(ob) }}</li>
            <li>驼峰命名转横线命名：{{ hyphenate(da) }}</li>
            <li>字符串首位大写：{{ capitalize(ada) }}</li>
            <li>将对象属性添加到目标对象中:{{ extend(clob,ob1) }}</li>
            <li></li>
            <li>{{ clone(vs,as) }}</li>
            <li>识别各种浏览器及平台</li>
            <li>获取浏览器信息{{ getExploreInfo() }}</li>
            <li>{{ isPCBroswer() }}</li>
        </ol>
    </div>
</template>

<script>
import { isStatic } from '../js'
export default {
    name:'',
    data(){
        return {
            as:[1,2,25],
            vs:[5,85,68],
            ob:'as-d-f',
            clob:{
                name:'xiaoming',
                age: 25
            },
            time: '2015-9-12',
            regExp: /^1[3-9]\d{9}$/,
            qw: 23,
            df: null,
            obnull:{},
            ob1:{
                sex: '男',
                age: 23,
                name:'daming',
                student:'大学',
                work: 'java'
            },
            da: 'xiaoMing',
            ada: 'xiaoming'
        }
    },
    methods: {
        // 1. isStatuc: 检测数据是不是除了symbol外的原始数据,不是symbol的所有类型
        isStatic(value){
            return(
                typeof value === 'string' ||
                typeof value === 'number' ||
                typeof value === 'boolean' ||
                typeof value === 'undefined' ||
                value === null
            )
        },
        //  2. isPrimitive: 检测数据是不是原始数据
        isPrimitive(value){
            return this.isStatic(value) || typeof value === 'symbol'
        },
        // 3.isObject:判断数据是不是引用类型的数据（列如：array,function,object,regext,new Number(),new String）
        isObject(value){
            let type = typeof value
            // return value != null && (type == 'object' || type == 'function')
            return type
        },
        // 4.isObjectLike:检测value是否是类对象。如果一个值是类对象，那么它不应该是null，而且typeof后的结果是‘object’
        isObjectLike(value){
            return value != null && typeof value == 'object'
        },
        // 5.getRawType:获取数据类型，返回结果为Number、String、Object、Array等
        getRawType(value){
            // Object.prototype.toString.call(value) => [object String]
            return Object.prototype.toString.call(value).slice(8,-1)
        },
        // 6.isPlainObject：判断数据是不是Object类型的数据
        isPlainObject(obj){
            return Object.prototype.toString.call(obj) === '[object Object]'
        },
        // 7.isArray:判断数据是不是数组类型的数据（）
        isArray(arr){
            return Object.prototype.toString.call(arr) === '[object Array]'
            // 将isArray挂载到Array上
            // Array.isArray = Array.isArray || isArray;
        },
        // 8.isRegExp: 判断数据是不是正则对象
        isRegExp(value){
            return Object.prototype.toString.call(value) === '[object RegExp]'
        },
        // 9.isDate: 判断数据是不是时间对象
        isDate(value){
            return Object.prototype.toString.call(value) === '[object Date]'
        },
        // 10.isNative: 判断value是不是浏览器内置函数
        // 内置函数toString后的主体代码块为[native code],而非内置函数则为相关代码，所以非内置函数可以进行拷贝(toString后掐头去尾再由Function转)
        isNative(value){
            return typeof value === 'function' && /native code/.test(value.toString())
        },
        // 11.isFunction: 检查value是不是函数
        isFunction(value){
            return Object.prototype.toString.call(value) === '[object Function]'
        },
        // 12.isLength: 检查value是否为有效的类数组长度
        isLength(value){
            return typeof value === 'number' && value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER
        },
        /**
         * 13.isArrayLike: 检查value是否是类数组
         * 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，
         * 大于等于0，小于或等于Number.MAX_SAFE_INTEGER。这里字符串也被当作类数组。
         */
        isArrayLike(value){
            return value != null && this.isLength(value.length) && !this.isFunction(value)
        },
        /**
         * 14.isEmpty:检查value是否为空
         * 如果是null，直接返回true；如果是类数组，判断数据长度；
         * 如果是Object对象，判断是否具有属性；如果是其他数据，直接返回false（也可以改为返回true）
         */
        isEmpty(value){
            if(value == null){
                return true;
            }
            if(this.isArrayLike(value)){
                return !value.length
            }else if(this.isPlainObject(value)){
                //  没有进来
                for(let key in value){
                    // alert('1111')
                    if(this.hasOwnProperty(key)){
                        // alert('1111')
                        return 'age'
                    }
                }
            }
            return false
        },
        // 15.cached:记忆函数：缓存函数的运算结果
        cached(fn){
            let cache = Object.create(null)
            return function cacheedFn(str){
                let hit = cache[str]
                return hit || (cache[str] = fn(str))
            }
        },
        // 16.camelize: 横线转驼峰命名
        camelize(str){
            let camelizeRE = /-(\w)/g  // 全局匹配 -
            return str.replace(camelizeRE,function(_,c){// 	replace 在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串。
                return c ? c.toUpperCase() : '' // 将 - 替换为大写
            })
        },
        // 17.hyphenate: 驼峰命名转横线命名：拆分字符串，使用-相连，并且转换为小写
        hyphenate(str){
            let a = /\B([A-Z])/g
            return str.replace(a,'-$1').toLowerCase()
        },
        // 18.capitalize：字符串首位大写
        capitalize(str){
            return str.charAt(0).toUpperCase() + str.slice(1)
        },
        //  19.extend:将属性混合到目标对象中,将_form的对象属性 添加到 to的对象属性里面
        extend(to,_form){
            // 遍历对象属性
            for(let key in _form){
                to[key] = _form[key]
                // console.log(key)
                // console.log(_form[key])
            }
            return to
        },
        // 20.Object.assign : 对象属性复制，浅拷贝
        // 21.clone:克隆数据，可深度克隆 ?????
        clone(value,deep){
            if(this.isPrimitive(value)){
                return value
            }
            if(this.isArrayLike(value)){//是类数组
                value = Array.prototype.slice.call(value)
                // console.log(Array.prototype.slice);
                // console.log(Array.prototype.slice.call(value));
                return value.map(item => deep ? this.clone(item, deep) : item)
            }else if(this.isPlainObject(value)){//是对象
                let target = {},key;
                for(key in value){
                    value.hasOwnProperty(key) && ( target[key] = deep ? this.clone(value[key],value[key]) : '' )
                }
            }
            let type = this.getRawType(value)
            switch(type){
                case 'Date':
                case 'RegExp':
                case 'Error': value = new window[type](value);break;
            }
            return value
        },
        // 22.
        // 23.识别各种浏览器及平台
        distinguish(){
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
        },
        // 24.getExploreInfo:获取浏览器信息
        getExploreInfo(){
            let t = navigator.userAgent.toLowerCase() // 转换为小写
            return 0 <= t.indexOf('msite') ? {
                type: 'IE',
                version: Number(t.match(/msie([\d]+)/)[1])
            } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ?{
                type: "IE",
                version: 11
            } : 0 <= t.indexOf("edge") ? {
                type:"Edge",
                version: Number(t.match(/edge\/([/d]+)/)[1])
            } : 0 <= t.indexOf('firefox') ? {
                type: "Firefox",
                version:Number(t.match(/firefox\/([\d]+)/)[1])
            } : 0 <= t.indexOf('chrome') ? {
                type: "Chrome",
                version: Number(t.match(/chrome\/([\d]+)/)[1])
            } : 0 <= t.indexOf('opera') ? {
                type: 'opera',
                version: Number(t.match(/opera.([\d]+)/)[1])
            } : 0 <= t.indexOf('Safari') ? {
                type:'Safari',
                version: Number(t.match(/version\/([\d]+)/)[1])
            } : {
                type: t,
                version: -1
            }
        },
        // 25.isPCBroswer: 检测是否为PC端浏览器模式
        isPCBroswer(){
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

    }
}
</script>

<style scoped>
@import url('../com.css');
</style>
