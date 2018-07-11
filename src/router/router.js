import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};
export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => { require(['@/views/locking.vue'], resolve); }
};
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
// path 是 url,title 显示的名称，name 是路由名称，后面的是路由指向的资源，此部分路由需要登陆以后才有权访问。
export const otherRouter = [
    {
        path: '/userHome/:userId', name: 'userHome', component: resolve => { require(['@/views/user/userHome.vue'], resolve); }
    }
];
// 公共不需要登陆就能看的路由
export const publicRouter = [
    {
        path: '/', name: 'index', component: resolve => { require(['@/views/public/index.vue'], resolve); }
    }
];
// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    ...otherRouter, // 需要登陆才能访问的路由
    ...publicRouter,
    locking,
    page500,
    page403,
    page404
];
