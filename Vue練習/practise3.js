//定義路由組件
const Home = { template: '<div class="font">首頁</div>' }
const About1 = { template: '<div class="font">測試畫面1</div>' }
const About2 = { template: '<div class="font">測試畫面2</div>' }
const About3 = { template: '<div class="font">測試畫面3</div>' }
const About4 = { template: '<div class="font">測試畫面4</div>' }

//定義路由
const routes = [
  { path: '/', component: Home },
  { path: '/about1', component: About1 },
  { path: '/about2', component: About2 },
  { path: '/about3', component: About3 },
  { path: '/about4', component: About4 },
]

//建立路由實體並傳遞rortes配置
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})


// 建立實體並掛載實例
const app = Vue.createApp({
  data() {
    return {
      pageList: [{ name: '/', value: '首頁', id: 0 },
      { name: '/about1', value: '測試畫面1', id: 1 },
      { name: '/about2', value: '測試畫面2', id: 2 },
      { name: '/about3', value: '測試畫面3', id: 3 },
      { name: '/about4', value: '測試畫面4', id: 4 },
      ],
    }
  },
})
//透過 app.use(router) 使 app 的所有子元件
//都能存取 this.$router 與 this.$route
app.use(router)
// 掛載 Vue.js 實體至 DOM
app.mount('#app')
