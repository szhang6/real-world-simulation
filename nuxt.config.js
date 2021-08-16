/**
 * Nuxt.js 配置文件
 */

module.exports = {
    router: {
        // 自定义路由规则
        extendRoutes (routes, resolve) {
            // 清除 Nuxt.js 基于 pags 目录默认生成的路由表规则
            routes.splice(0)
            // 创建自己的路由
            routes.push(...[
            {
                path: '/',
                component: resolve(__dirname, 'pages/layout'),
                children: [
                    {
                        path: '', // 默认子路由
                        name: 'home',
                        component: resolve(__dirname, 'pages/home')
                    }
                ]
            }
            ])
        }
    }
}