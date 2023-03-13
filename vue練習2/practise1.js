// 建立 Vue 實體元件
const app = {
  //message&message2的初始值
  data() {
    return {
      message: '',
      message2: '',
    }
  },

  //回傳一個值，並且會把它緩存起來，當函式的值改變時，才會重新執行
  computed: {
    reversedMessage: function () {
      var value = "";
      for (let i = 0; i < this.message.length || i < this.message2.length; i++) {
        if (i < this.message.length)
          value += this.message[i];
        if (i < this.message2.length)
          value += this.message2[i];
      }
      return value
    }
  },

  //被呼叫時就會執行
  methods: {
    reversedMessage2: function () {
      var value = "";
      for (let i = 0; i < this.message.length || i < this.message2.length; i++) {
        if (i < this.message.length)
          value += this.message[i];
        if (i < this.message2.length)
          value += this.message2[i];
      }
      return value
    }
  }
}
Vue.createApp(app).mount('#app-demo');
