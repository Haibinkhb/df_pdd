import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import Home from '../pages/Home/Home.vue'
import Recommend from '../pages/Recommend/Recommend.vue'
import Search from '../pages/Search/Search.vue'
import Chat from '../pages/Chat/Chat.vue'
import Mine from '../pages/Mine/Mine.vue'

//二级路由
import Hot from '../../src/pages/Home/Children/Hot/Hot.vue'
import Women_s from '../../src/pages/Home/Children/Women_s.vue'
import Underwear from '../../src/pages/Home/Children/Underwear.vue'
import M_B from '../../src/pages/Home/Children/M_B.vue'
import Department from '../../src/pages/Home/Children/Department.vue'
import S_B from '../../src/pages/Home/Children/S_B.vue'
import Mobile from '../../src/pages/Home/Children/Mobile.vue'
import Men_s from '../../src/pages/Home/Children/Men_s.vue'
import Electric from '../../src/pages/Home/Children/Electric.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name:'home',
      component: Home,
      children:[
        { path: 'hot',component: Hot,name:'hot'},
        { path: 'women_s',component: Women_s},
        { path: 'underwear',component: Underwear},
        { path: 'm_b',component: M_B},
        { path: 'department',component: Department},
        { path: 's_b',component: S_B},
        { path: 'mobile',component: Mobile},
        { path: 'men_s',component: Men_s},
        { path: 'electric',component: Electric},
        { path: '/home',redirect: { name: 'hot' }},
      ]
    },
    {
      path: '/recommend',
      
      component: Recommend
    },
    {
      path: '/search',
      
      component: Search
    },
    {
      path: '/chat',
      
      component: Chat
    },
    {
      path: '/mine',
      
      component: Mine
    },
    {
      path: '/',
      redirect: {name:'home'}
    },
  ]
})
