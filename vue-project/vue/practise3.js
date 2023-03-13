//設置畫面
const Home = { template: '<div class="font">首頁</div>' }
const About1 = { template: '<div class="font">測試畫面1</div>' }
const About2 = { template: '<div class="font">測試畫面2</div>' }
const About3 = { template: '<div class="font">測試畫面3</div>' }
const About4 = { template: '<div class="font">測試畫面4</div>' }

//路由連結
const routes = [
  { path: '/', component: Home },
  { path: '/about1', component: About1 },
  { path: '/about2', component: About2 },
  { path: '/about3', component: About3 },
  { path: '/about4', component: About4 },
]
//創建一個可以被 Vue 使用的 Router 實體
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
})


const app = Vue.createApp({})

app.use(router)
app.mount('#app')
