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
export const index = {
    path: '/index',
    name: 'index',
    component: resolve => { require(['@/views/public/index.vue'], resolve);}
};
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
// path 是 url,title 显示的名称，name 是路由名称，后面的是路由指向的资源
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } },
        { path: 'userHome', title: {i18n: 'userHome'}, name: 'userHome', component: resolve => { require(['@/views/user/userHome.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/group',
        icon: 'ios-folder',
        name: 'group',
        title: '文章管理',
        component: Main,
        children: [
            {
                path: 'page1',
                icon: 'ios-paper-outline',
                name: 'page1',
                title: '文章发布',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                path: 'page2',
                icon: 'ios-list-outline',
                name: 'page2',
                title: '类型管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            }
        ]
    },
    {
        path: '/userManagement',
        icon: 'ios-people',
        name: 'userManagement',
        title: '会员管理',
        component: Main,
        children: [
            {
                path: 'level',
                icon: 'ios-paper-outline',
                name: 'level',
                title: '等级管理',
                component: resolve => { require(['@/views/user/level.vue'], resolve); }
            },
            {
                path: 'level1',
                icon: 'ios-list-outline',
                name: 'level1',
                title: '积分管理',
                component: resolve => { require(['@/views/user/level1.vue'], resolve); }
            },
            {
                path: 'userList',
                icon: 'ios-list-outline',
                name: 'userList',
                title: '会员管理',
                component: resolve => { require(['@/views/user/userList.vue'], resolve); }
            }
        ]
    },
    {
        path: '/page',
        icon: 'ios-paper',
        title: 'Page',
        name: 'page',
        component: Main,
        children: [
            { path: 'index', title: 'Page', name: 'page_index', component: resolve => { require(['@/views/page/page.vue'], resolve); } }
        ]
    },
    {
        path: '/test',
        icon: 'ios-paper',
        title: '系统设置',
        name: 'Test',
        component: Main,
        children: [
            { path: 'path', title: 'test', name: 'test_index', component: resolve => { require(['@/views/page/test.vue'], resolve); } }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    index,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
