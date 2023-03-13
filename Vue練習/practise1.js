//component中的input標籤
const CustomInput = {
  props: {
    message: String,
    message2: String
  },
  template: `<label>字符串1:</label>
    <input 
      type="text"
      :value="message"
      @input="$emit('update:message', $event.target.value)">
<br><label>字符串2:</label>
    <input
      type="text"
      :value="message2"
      @input="$emit('update:message2', $event.target.value)">
  `
};
// 建立 Vue 實體元件
const App = {
  components: {
    CustomInput
  },
  //message&message2的初始值
  data() {
    return {
      message: "",
      message2: ""
    };
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
};

Vue.createApp(App).mount("#app");
