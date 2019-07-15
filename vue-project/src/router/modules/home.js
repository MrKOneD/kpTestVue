const homePage = () => import(/* webpackChunkName: 'homeRouter' */ '@/views/home/Home'); // 首页


export const Home = [{
    path: '/',
    name: 'homePage',
    component: homePage,
    meta: {
        title: '首页',
        keepAlive: false
    }
}];
