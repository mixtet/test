<template>
    <div class="function">
        <!-- type = 'A' start = '3' -->
        <h4>js中常用的工具函数25-48</h4>
        <ol type = 'l' start = '25'>
            <li>数组去重：{{ unique(arr2) }}</li>
            <li>Set简单实现</li>
            <li>生成重复字符串:{{ repeat('asd',2) }}</li>
            <li>格式化时间：{{ dateFormater('YYYY年MM月DD HH:mm','2000/5/5 23:24') }}</li>
            <li>。。。。{{ dateStrForma('20190626', 'YYYYMMDD', 'YYYY年MM月DD日') }}</li>
            <li></li>
            <li>获取url参数，返回一个参数对象:{{ GetUrlParam() }}</li>
            <li></li>
            <li @click="toFullScreen"><span class="fullScreen">全屏</span></li>
            <li @click="exitFullscreen"><span class="fullScreen">退出全屏</span></li>
            <li></li>
            <li>是否是非数字值：{{ _isNaN(a) }}</li>
            <li>最大值{{ max(arr2) }}</li>
            <li>最小值: {{ min(arr2) }}</li>
            <li>随机数1-100： {{ random(1,100) }}</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>

        <img id="qwe" @click="img" src="@/assets/img/1.jpg" alt="">
    </div>
</template>

<script>
import { isArrayLike,isStatic,getRawType } from '../js'

export default {
    name:'function25-48',
    data(){
        return{
            arr2:[1,58,96,56,65,96,586,65,56,58],
            a: 'asd',
            arr3:[
                {age: 23},
                {age:34},
                {age: 68}
            ]
        }
    },
    methods:{
        // 25.unique:数组去重，返回一个新数组
        unique(arr){
            if(!isArrayLike(arr)){//不是类数组对象
                return arr
            }
            let result = []
            let objarr = []
            let obj = Object.create(null)

            arr.forEach(item =>{
                if(isStatic(item)){// 是除了symbol外的原始数据
                    let key = item + '_' + getRawType(item)
                    if(!obj[key]){
                        obj[key] = true
                        result.push(item)
                    }
                }else{//引用类型及symbol
                    if(!objarr.includes(item)){//includes查找字符串中是否包含指定的子字符串。
                        objarr.push(item)
                        result.push(item)
                    }
                }
            })

            return result
        },
        // 26.Set简单实现
        // 27.repeat: 生成一个重复的字符串，有n个str组成，可修改为填充为数组等
        repeat(str,n){
            let res = ''
            while(n){
                if(n % 2 === 1){
                    res += str
                }
                if(n > 1){
                    str += str
                }
                n >>=1;
            }
            return res
        },
        // 28.dateFormater: 格式化时间
        dateFormater(formater,t){
            let date = t ? new Date(t) : new Date,
            Y = date.getFullYear() + '',
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds()
            // str.replace(/blue/g,"red") 在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串。
            return formater.replace(/YYYY|yyyy/g,Y)
            .replace(/YY|yy/g,Y.substr(2,2))
            .replace(/MM/g,(M<10?'0':'') + M)
            .replace(/DD/g,(D<10?'0':'') + D)
            .replace(/HH|hh/g,(H<10?'0':'') + H)
            .replace(/mm/g,(m<10?'0':'') + m)
            .replace(/ss/g,(s<10?'0':'') + s)
        },
        // 29.dateStrForma: 将指定字符串由一种时间格式转化为另一种。From的格式对应str的位置
        // 不好用。。。
        dateStrForma(str, from, to){
            str += ''
            let Y = ''
            if(~(Y = from.indexOf('YYYY'))){
                Y = str.substr(Y,4)
                to = to.replace(/YYYY|yyyy/g,Y)
            }else if(~(Y = from.indexOf(YY))){
                Y = str.substr(Y,2)
                to = to.replace(/YY|yy/g,Y)
            }

            let k,i
            // 月 日 小时  分钟 秒
            ['M','D','H','h','m','s'].forEach(s =>{
                i = from.indexOf(s+s)
                k = ~i ? str.substr(i,2) : ''
                to = to.replace(s+s,k)
            })
            return to
        },
        // 30.getPropByPath: 根据字符串路径获取对象属性：obj[0].count
        getPropByPath(obj, path, strict){
            let tempObj = obj;
            path = path.replace(/\[(\w+)\]/g,'.$1') // 将[0]转化为 .0
            path = path.replace(/^\./,'') //去除开头的  .

            let keyArr = path.split('.')
            let i = 0
            for(let len = keyArr.length; i < len - 1;++i){
                if(!itemObj && !strict) break;
                let key = keyArr[i]
                if (key in tempObj){
                    tempObj = tempObj[key]
                }else{
                    if(strict){
                        throw new Error('Please transfer a valid prop path to form item!')
                    }
                    break
                }
            }

            return {
                o: tempObj,//原始数据
                k: keyArr[i],//key值
                v: tempObj ? tempObj[keyArr[i]] : null // key值对应的值
            }
        },
        // 31.GetUrlParam: 获取url参数，返回一个对象
        GetUrlParam(){
            let url = document.location.toString()
            // document.location.toString() window.location.href
            let arrObj = url.split("?")
            // 切割字符串为数组, ? 切割 ['http','sex=男&name=xiaoming']
            let params = {}
            if(arrObj.length > 1){
                arrObj = arrObj[1].split("&")
                arrObj.forEach(item=>{
                    item = item.split("=")
                    params[item[0]] = item[1]
                })
            }
            return params
        },
        // 32. downloadFile: base64数据导出文件，文件下载  纯js
        downloadFile(filename,data){
            let DownloadLink = document.createElement('a')
            if(DownloadLik){
                document.body.appendChild(DownloadLink)
                DownloadLink.style = 'display: none'
                DownloadLink.download = 'filename'
                DownloadLink.href = data
                if(document.createEvent){
                    let DownloadEvt = document.createEvent('MouseEvents')
                    DownloadEvt.initEvent('click', true, false)
                    DownloadEvt.dispatchEvent(DownloadEvt)
                }else if(document.createEventObject){
                    DownloadLink.fireEvent('onclick')
                }else if(typeof DownloadLink.onclick == 'function'){
                    DownloadLink.onclick()
                }
                document.body.removeChild(DownloadLink)
            }
        },
        //  33.toFullScreen: 全屏
        toFullScreen(){
            let elem = document.body
            // document.getElementById('qwe')
            elem.webkitRequestFullScreen
            ? elem.webkitRequestFullScreen()
            : elem.mozRequestFullScreen
            ? elem.mozRequestFullScreen()
            : elem.msRequestFullscreen
            ? elem.msRequestFullscreen()
            : elem.requestFullScreen
            ? elem.requestFullScreen()
            : alert('浏览器不支持全屏')
        },
        // 34.exitFullscreen: 退出全屏
        exitFullscreen(){
            let elem = parent.document
            // parent.document.getElementById('qwe')
            elem.webkitCancelFullScreen
            ? elem.webkitCancelFullScreen()
            : elem.mozCancelFullScreen
            ? elem.mozCancelFullScreen()
            : elem.cancelFullScreen
            ? elem.cancelFullScreen()
            : elem.msExitFullscreen
            ? elem.msExitFullscreen()
            : elem.exitFullscreen
            ? elem.exitFullscreen()
            : alert("切换失败，可尝试Esc退出")
        },
        img(){
            let i = 0;
            if(i % 2 == 0){
                this.toFullScreen()
            }else{
                this.exitFullscreen()
            }
        },
        // 35.requestAnimationFrame: window动画
        // 36._isNaN : 检查数据是否是非数字值,不是 数字 true ,是 数字 false
        _isNaN(value){
            return !(typeof value === 'string' || typeof value === 'number') || isNaN(value)
        },
        // 37.max: 求取数组中非NaN数据中的最大值
        max(arr){
            arr = arr.filter(item => !this._isNaN(item))
            return arr.length ? Math.max.apply(null,arr) : undefined
        },
        // 38.min: 求取数组中的非NaN数据中的最小值
        min(arr){
            arr = arr.filter(item => !this._isNaN(item))
            return arr.length ? Math.min.apply(null,arr) : undefined
        },
        // 39.random: 返回一个lower-upper直接的随机数。(lower、upper无论正负与大小，但是必须是非NaN的数据)
        random(lower, upper){
            lower = +lower || 0
            upper = +upper || 0
            return parseInt(Math.random() * (upper - lower) + lower)
        },
        // 40.
    },
}
</script>

<style scoped>
@import url('../com.css');
.fullScreen{
    padding: 5px 10px;
    border-radius: 3px;
    background: green;
    color: white;
    cursor: pointer;
}
</style>
