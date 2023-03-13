const app = {
    //初始input和p的值
    data() {
        return {
            message: '',
            message2: '',
            message3: '',
            message4: '',
            reslt: '',
            reslt2:'',
            reslt3:'',
            reslt4:'',
        }
    },
    //click後執行
    methods: {
        reversedMessage: function () {

            //判斷用戶名用戶名
            this.namefunction();
            //判斷密碼
            this.passwordfuction();
            //判斷Email
            this.emasilfunction();
            //判斷手機號
            this.phonfunction();
            //錯誤訊息
            return this.reslt,this.reslt2,this.reslt3,this.reslt4
        },
        namefunction: function () {
            var name = this.message;
            var re = new RegExp('[0-9_]');
            var pattern = new RegExp('[^a-zA-Z0-9_]');
            var correct = new RegExp('[^a-zA-Z]');
            console.log(this.message)
            if (name.length < 6 || name.length > 18)
                this.reslt = '長度應為6~18個字符';
            else if (re.test(name.substring(0, 1)))
                this.reslt = '需以字母開頭';
            else if (pattern.test(name))
                this.reslt = '不可使用特殊字元';
            else if (correct && name.length >= 6 && name.length <= 18)
                this.reslt = '';
        },
        passwordfuction: function () {
            var password = this.message2;
            var patd = new RegExp('[^a-z0-9~!@#$%^&*()_]');
            var pats = new RegExp('[^A-Z0-9~!@#$%^&*()_]');
            if (password.length < 6 || password.length > 18)
                this.reslt2 = '長度應為6~18個字符';
            else if (!patd.test(password))
                this.reslt2 = "大小寫需要有區別(0)"
            else if (!pats.test(password))
                this.reslt2 = "大小寫需要有區別(1)"
            else if (patd.test(password) && pats.test(password))
                this.reslt2 = "";
        },
        emasilfunction: function () {
            var mail = this.message3;
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(mail))
                this.reslt3 = "Email格式錯誤";
            else
                this.reslt3 = "";

        },
        phonfunction: function () {
            var reg = /^[0-9]{10}$/g;
            var phone = this.message4;
            if (!reg.test(phone))
                this.reslt4 = "手機號碼格式錯誤"
            else if (phone.substring(0, 2) !== "09")
                this.reslt4 = "手機號碼格式錯誤"
            else
                this.reslt4 = "";

        }
    }
}
Vue.createApp(app).mount('#app-demo');


