const app = {
    //初始input和p的值
    data() {
        return {
            list: [
                { information: '用戶名:', inputmessage: '', message: '' },
                { information: '\u3000密碼:', inputmessage: '', message: '' },
                { information: '\u2000Email:', inputmessage: '', message: '' },
                { information: '手機號:', inputmessage: '', message: '' }
            ]
        }
    },
    //click後執行
    methods: {
        reversedMessage: function () {
            //判斷用戶名
            this.namefunction();
            // //判斷密碼
            this.passwordfuction();
            //判斷Email
            this.emasilfunction();
            //判斷手機號
            this.phonfunction();
            //顯示錯誤訊息
            return this.message
        },
        //判斷用戶名的方法
        namefunction: function () {
            var name = this.list[0].inputmessage;
            var reg = new RegExp('[0-9_]');
            var pattern = new RegExp('[^a-zA-Z0-9_]');
            var correct = new RegExp('[^a-zA-Z]');
            console.log(name)
            if (name.length < 6 || name.length > 18)
                this.list[0].message = '長度應為6~18個字符';
            else if (reg.test(name.substring(0, 1)))
                this.list[0].message = '需以字母開頭';
            else if (pattern.test(name))
                this.list[0].message = '不可使用特殊字元';
            else if (correct && /\w{6,18}/.test(name))
                this.list[0].message = '';
            
        },
        //判斷密碼的方法
        passwordfuction: function () {
            var password = this.list[1].inputmessage;
            var patd = new RegExp('[^a-z0-9~!@#$%^&*()_]');
            var pats = new RegExp('[^A-Z0-9~!@#$%^&*()_]');
            if (password.length < 6 || password.length > 18)
                this.list[1].message = '長度應為6~18個字符';
            else if (!patd.test(password))
                this.list[1].message = "大小寫需要有區別(0)"
            else if (!pats.test(password))
                this.list[1].message = "大小寫需要有區別(1)"
            else if (patd.test(password) && pats.test(password)&&password.length > 6 && password.length < 18)
                this.list[1].message = "";
        },
        //判斷Email的方法
        emasilfunction: function () {
            var mail = this.list[2].inputmessage;
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(mail))
                this.list[2].message = "Email格式錯誤";
            else
                this.list[2].message = "";
        },
        //判斷手機號的方法
        phonfunction: function () {
            var reg = /^[0-9]{10}$/g;
            var phone = this.list[3].inputmessage;
            if (reg.test(phone) && phone.substring(0, 2) == "09")
                this.list[3].message = "";
            else
                this.list[3].message = "手機號碼格式錯誤"
        }
    }
}
Vue.createApp(app).mount('#app-demo');


