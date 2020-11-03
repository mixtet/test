import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    //  js的常用函数工具
    {
        path: '/function',
        name: 'function',
        component: () =>
            import ('../views/jsfunction48-demo/index'),
        children: [
            // 1-25
            {
                path: 'function1-25',
                name: 'function1-25',
                component: () =>
                    import ('../views/jsfunction48-demo/jsfunction/function1-25.vue')
            },
            // 25-48
            {
                path: 'function25-48',
                name: 'function25-48',
                component: () =>
                    import ('../views/jsfunction48-demo/jsfunction/function25-48.vue')
            },
            // 常用函数数据格式化
            {
                path: 'dataFormat',
                name: 'dataFormat',
                component: () => import('../views/jsfunction48-demo/dataTest/data1.vue')
            }
        ]
    },
    // 动画演示
    {
        path: '/animation',
        name: 'animation',
        component: () =>
            import ('../views/animation/index.vue'),
        children: [
            // 动画演示
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
