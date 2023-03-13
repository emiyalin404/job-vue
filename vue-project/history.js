import { createRouter, createWebHashHistory } from 'vue-router'
const Home = { template: '<div class="font">首頁</div>' }
const About1 = { template: '<div class="font">測試畫面1</div>' }
const About2 = { template: '<div class="font">測試畫面2</div>' }
const About3 = { template: '<div class="font">測試畫面3</div>' }
const About4 = { template: '<div class="font">測試畫面4</div>' }

const router =createRouter({
 history:creatWebHashHistory(),
rouets:[
    { path: '/', component: Home },
    { path: '/about1', component: About1 },
    { path: '/about2', component: About2 },
    { path: '/about3', component: About3 },
    { path: '/about4', component: About4 },
  ], 
  data(){
        return{
          message: '',
            activeColor: 'red'
          }
    }
}) 


Vue.createApp(router).mount('#app')