import Vue from 'vue';
import Router from 'vue-router';
import {Home} from './modules/home';
console.log(Home);

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...Home,
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return {
            x: 0,
            y: 0,
        };
    },
});
