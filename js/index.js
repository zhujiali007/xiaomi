var index = (function () {
    return {
        init() {
            this.$time1 = document.querySelector('.time1');
            this.$time2 = document.querySelector('.time2');
            this.$time3 = document.querySelector('.time3');
            this.$jiadian_ul=document.querySelector('.jiadian_ul');
            this.$liAll=this.$jiadian_ul.querySelectorAll('a');
            this.$li7_block=document.querySelector('.li7_block');
            this.$li8_block=document.querySelector('.li8_block');
            this.$li9_block=document.querySelector('.li9_block');
            this.$li10_block=document.querySelector('.li10_block');
            console.log(this.$li9_block);
            for(var i=0;i<this.$liAll.length;i++){
                this.$liAll[i].index=i;
            }
            var timer = '';
            this.event();
            this.setDate('2018/10/11 00:00:00');

        },
        event() {
            var _this = this;
            $("li").mouseenter(function () { 
                $(this).children(".first_ul").stop();
                $(this).children(".first_ul").slideDown();
            });
            
            $("li").mouseleave(function (e) {
                    $(this).children(".first_ul").stop();
                    $(this).children(".first_ul").slideUp();
                
                // values: e.clientX, e.clientY, e.pageX, e.pageY
            });
            $(".li_display").hover(function () {
                // over
                $(this).children('.right4_box').stop();
                $(this).children('.right4_box').slideDown();

            }, function () {
                // out
                $(this).children('.right4_box').stop();
                $(this).children('.right4_box').slideUp();
            });
            this.$jiadian_ul.onmouseover=function(ev){
                ev=ev || window.event;
                var target=ev.target || ev.srcElement;
                console.log(target.nodeName);
                if(target.nodeName=="A"){
                    console.log(target.index);
                    _this.showPage(target.index);
                }
            }

        },
        showPage(index){
            if(index==0){
                this.$li7_block.style.display='block';
                this.$li8_block.style.display='none';
                this.$li9_block.style.display='none';
                this.$li10_block.style.display='none';
            }
            if(index==1){
                this.$li7_block.style.display='none';
                this.$li8_block.style.display='block';
                this.$li9_block.style.display='none';
                this.$li10_block.style.display='none';
            }
            if(index==2){
                this.$li7_block.style.display='none';
                this.$li8_block.style.display='none';
                this.$li9_block.style.display='block';
                this.$li10_block.style.display='none';
            }
            if(index==3){
                this.$li7_block.style.display='none';
                this.$li8_block.style.display='none';
                this.$li9_block.style.display='none';
                this.$li10_block.style.display='block';
            }
            for(var j=0;j<this.$liAll.length;j++){
                this.$liAll[j].removeAttribute('class');
            }
            this.$liAll[index].className='active'
        },
        getDate(fDate) {
            var _this = this;
            var date = new Date();
            var now = date.getTime();
            //设置截止时间  
            var endDate = new Date(fDate);
            var end = endDate.getTime();

            //时间差  
            var leftTime = end - now;
            //定义变量 d,h,m,s保存倒计时的时间
            var d, h, m, s;
            if (leftTime >= 0) {
                d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
                m = Math.floor(leftTime / 1000 / 60 % 60);
                s = Math.floor(leftTime / 1000 % 60);
            }
            if (leftTime < 0) {
                h = '0';
                m = '0';
                s = '0';
            }
            if (h < 10) {
                h = '0' + h;
            }
            if (m < 10) {
                m = '0' + m;
            }
            if (s < 10) {
                s = '0' + s;
            }
            _this.$time1.innerHTML = h;
            _this.$time2.innerHTML = m;
            _this.$time3.innerHTML = s;


        },
        setDate(fDate) {
            var _this = this;
            timer = setInterval(function () {
                _this.getDate(fDate);
            }, 1000)
        }
    }
}())