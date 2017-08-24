const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/portal',
        meta: {
            title: '门户'
        },
        component: (resolve) => require(['./views/portal.vue'], resolve)
    }
];
export default routers;