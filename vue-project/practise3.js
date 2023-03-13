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

//建立 VueRouter 實體物件
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  linkActiveClass:'active',
  routes
})


// 建立 Vue 實體元件
const app = Vue.createApp({
  data() {
    return {
      pageList: [{ name: '/', value: '首頁', id: 0 },
      { name: '/about1', value: '測試畫面1', id: 1 },
      { name: '/about2', value: '測試畫面2', id: 2 },
      { name: '/about3', value: '測試畫面3', id: 3 },
      { name: '/about4', value: '測試畫面4', id: 4 },
      ],
      // homeroutes: location.href.split('#', 2)[1] == routes[0].path,
      // firstroutes: location.href.split('#', 2)[1] == routes[1].path,
      // secondroutes: location.href.split('#', 2)[1] == routes[2].path,
      // thirdroutes: location.href.split('#', 2)[1] == routes[3].path,
      // fourthroutes: location.href.split('#', 2)[1] == routes[4].path,
      // isActive:false
    }

  },
  // computed: {
  //   classObject() {
  //      'active'isActive :true

  //   }
  // },
  // methods: {
  //   addclick(){
  //     location.href.split('#', 2)[1].includes(this.path)
  //     this.isActive ? 'active':true
  //   }
  // },
})
//透過 app.use(router) 使 app 的所有子元件
//都能存取 this.$router 與 this.$route
app.use(router)
// 掛載 Vue.js 實體至 DOM
app.mount('#app')
