
const app = {
    data() {
      return {
        message: '',
        message2: '',
      }
    },
    computed: {
      // 计算属性的 getter


      reversedMessage: function () {
        // `this` 指向 vm 实例    
        var aa="";
        for(let i =0;i<this.message.length||i<this.message2.length;i++){
          if(i<this.message.length)
          aa+=this.message[i];
          if(i<this.message2.length)
          aa+=this.message2[i];  
          alert:(123)
        }
      return aa
      
      }
    },
    methods: {
      reversedMessage2: function () {
        var messageval="";
        if(this.message.length<this.message2.length){
           for(let i=0;i<this.message.length;i++){
        messageval += this.message[i]+this.message2[i];
        }
        messageval+=this.message2.substring(this.message.length,this.message2.length)
        }
        else{
          for(let i=0;i<this.message2.length;i++){
        messageval += this.message[i]+this.message2[i];
        }
        messageval+=this.message.substring(this.message2.length,this.message.length)
        }
         return messageval;
      }
    }
  }
  Vue.createApp(app).mount('#app-demo');
 