var login = (function () {
    return {
        init: function (ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele['login-btn'];
            this.$usernameInp = this.$ele['username'];
            this.$passwordInp = this.$ele['password'];
            this.$form=document.querySelector('.form');
            this.$form_sm=document.querySelector('.form_sm');
            this.$h2_2=this.$form.querySelector('.h2_2');
            this.$h2_1=this.$form_sm.querySelector('.h2_1');
            this.$banner_box=document.querySelector('.banner_box');
            this.$top1=this.$form.querySelector('.form_top');
            this.$top2=this.$form_sm.querySelector('.form_top');
            this.$a1=this.$top1.querySelectorAll('a');
            this.$a2=this.$top2.querySelectorAll('a');
            for(var i=0;i<this.$a1.length;i++){
                this.$a1[i].index=i;
            }
            for(var j=0;j<this.$a2.length;j++){
                this.$a2[j].index=j;
            }
            // console.log(this.$form,this.$form_sm,this.$h2_2,this.$h2_1,this.$liAll,this.$top1,this.$top2);
            this.event();
        },
        event: function () {
            var _this = this;
            this.$form.onclick=function(ev){
                ev=ev || window.event;
                var target=ev.target || ev.srcElement;
                if(target.nodeName=='A'){
                    if(target.index==1){
                        _this.$form.style.display='none';
                        _this.$form_sm.style.display='block';
                    }
                }
            }
            this.$form_sm.onclick=function(ev){
                ev=ev || window.event;
                var target=ev.target || ev.srcElement;
                if(target.nodeName=='A'){
                    if(target.index==0){
                        _this.$form_sm.style.display='none';
                        _this.$form.style.display='block';
                    }
                }
            }
            // 提交按钮
            this.$loginBtn.onclick = function () {
                // 发送ajax，验证用户名和密码
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function (data) {
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('http://localhost:1147/mi/php/login.php', params);
            }
        },
        loginSuccess: function (data) {
            if (data.code == 200) {
                // 后台会返回一个token值
                // token 是用户登录成功时,后台自动生成的一串代码
                // 每次发送请求时,都携带这个token值,后台才能确定当前用户登录成功,才会返回数据
                document.cookie = "token=" + data.data.token;
                document.cookie = "user-id=" + data.data.id;

                location.href = 'index.html';
            } else {
                alert(data.msg);
            }
        }
    }

}())