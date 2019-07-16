const homePage = () =>
    import ( /* webpackChunkName: 'homeRouter' */ '@/views/home/Home'); // 首页
const mapLocationPage = () =>
    import ( /* webpackChunkName: 'homeRouter' */ '@/views/map/locationMap'); // 定位
const loginPage = () =>
    import ( /* webpackChunkName: 'homeRouter' */ '@/views/login/login'); // 登录页

export const Home = [{
    path: '/',
    name: 'homePage',
    component: homePage,
    meta: {
        title: '首页',
        keepAlive: false
    }
}, {
    path: '/maplocation',
    name: 'maplocation',
    component: mapLocationPage
}, {
    path: '/login',
    name: 'loginPage',
    component: loginPage
}];