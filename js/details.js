var details = (function () {
    return {
        init() {
            this.$left1=document.querySelector('.left1');
            this.$center=document.querySelector('.center');
            this.$liAll=this.$center.querySelectorAll('.li1');
            this.$shop=document.querySelector('#shop_shadow');
            // console.log(this.$shop);
            this.event();
            this.getTop();
        },
        event() {
            var _this = this;
            !$(function(){
                first_ul('.li1');
                first_ul('.li2');
                first_ul('.li3');
                $(".li1,.li2,.li3,.first_ul").mouseenter(function () { 
                    $(".first_ul").stop();
                    $(".first_ul").slideDown();
                });
                            
                $(".li1,.li2,.li3,.nav,.first_ul").mouseleave(function (e) {
                    $(".first_ul").stop();
                    $(".first_ul").slideUp();
                    
                    // values: e.clientX, e.clientY, e.pageX, e.pageY
                });
            });
            this.$left1.onmouseover=function(){
                _this.$left1.style.background='#f66000 url(images/mi-home.png) no-repeat center'
            }
            this.$left1.onmouseleave=function(){
                _this.$left1.style.background='#f66000 url(images/mi-logo.png) no-repeat center'
            }
            // $("h2").show(2000);
            // $("p").show(2000);
        },
        getTop(){
            var _this=this;
            var _top=this.$shop.offsetTop;
            // console.log(_top);
            window.onscroll=function(){
                var top=document.documentElement.scrollTop;
                // console.log(top);
                if(top>=_top){
                    _this.$shop.style.top=top+'px';
                }else{
                    _this.$shop.style.top=_top+'px';
                }
            }
        }
    }
}())