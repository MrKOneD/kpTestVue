import Vue from 'vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App.vue';
import router from './router';
import store from './store';

window.onload = function viewportFill() {
    window.viewportUnitsBuggyfill.init({
        hacks: window.viewportUnitsBuggyfillHacks,
    });
};

Vue.config.productionTip = false;
Vue.use(MintUI); // 使用mint-ui ui框架
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
