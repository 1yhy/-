import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import typeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

Vue.component(typeNav.name, typeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

Vue.config.productionTip = false
import "swiper/css/swiper.min.css"
import '@/mock/mockServe'
import store from '@/store'
new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    router,
    store
}).$mount('#app')