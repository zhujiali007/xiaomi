var shop_data = (function () {
  return {
    init() {
      this.$left1 = document.querySelector('.left1')
      this.$center = document.querySelector('.center')
      this.$liAll = this.$center.querySelectorAll('.li1')
      this.$shop = document.querySelector('#shop_shadow')
      this.$select_box = document.querySelector('.select')
      this.$bb=document.querySelector('.bb');
      this.$color=document.querySelector('.color');
      this.$select = this.$bb.querySelectorAll('a')
      this.$span = this.$bb.querySelectorAll('span')
      this.$select1 = this.$color.querySelectorAll('a')
      this.$span1 = this.$color.querySelectorAll('span')
      this.$i=this.$select_box.querySelectorAll('i');
      this.$right_top=document.querySelector('.right_top');
      this.$right_span=this.$right_top.querySelector('span');
      this.$price=this.$bb.querySelectorAll('.price')
      this.$swiper=document.querySelector('.swiper-product')
      // console.log(this.$swiper)
      for (var i = 0;i < this.$select.length;i++) {
        this.$select[i].index = i
      }
      for (var j = 0;j < this.$span.length;j++) {
        this.$span[j].index = j
      }
      for (var i = 0;i < this.$select1.length;i++) {
        this.$select1[i].index = i
      }
      for (var j = 0;j < this.$span1.length;j++) {
        this.$span1[j].index = j
      }
      for(var i=0;i<this.$i.length;i++){
        this.$i[i].index=i;
      }
      this.event()
      this.getTop()
    },
    event() {
      var _this = this
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
      this.$left1.onmouseover = function () {
        _this.$left1.style.background = '#f66000 url(images/mi-home.png) no-repeat center'
      }
      this.$left1.onmouseleave = function () {
        _this.$left1.style.background = '#f66000 url(images/mi-logo.png) no-repeat center'
      }


      $(".aa").click(function (e) { 
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var a=$(this).children('.price').text();
        $(".right_top").children("span").text(a);
        $(".count_li1").children("span").text(a);
        $(".total_price").children(".t_price").text(a);
        var b=$(this).children('.xh').text();
        $(".count_li1").children("p").children(".count_type").text(b);
      });

      $(".aa1").click(function (e) { 
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var c=$(this).children('.c_color').text();
        $(".count_li1").children("p").children('.count_color').text(c);
      });

      $(".icon-checkbox").click(function(){
        $(this).toggleClass("active1")
        $(this).parents("li").children($(".icon-checkbox")).toggleClass("active1");
        // $(this).parents("li").children($("div")).children(".icon-checkbox").toggleClass("active1");
        var a=$(".total_price").children(".t_price").text();
        var b=$(this).parents("li").children("div").children(".price").text();
        console.log(b)
        if($(".icon-checkbox").is($(".active1"))){
          var c=parseFloat(a)+parseFloat(b);
        $(".total_price").children(".t_price").text(parseFloat(c))
        console.log(c);
        }else if(!$(".icon-checkbox").is($(".active1"))){
          var c=parseFloat(a)-parseFloat(b);
          $(".total_price").children(".t_price").text(parseFloat(c));
        }
        
      })

      $(".jiaru").click(function (e) { 
        e.preventDefault();
        var a=$(".count_li1").children("p").text();
        var b=$(".t_price").text();
      
      localStorage.setItem("goodsName",a);
      localStorage.setItem("goodsPrice",b);
      var a=localStorage.getItem('goodsName');
      var b=localStorage.getItem('goodsPrice');
      var data='<div class="item-box">'+
            '<div class="item-row clearfix">'+
                '<div class="col col-check">'+
                    '<i class="iconfont icon-check J_itemCheckbox"></i>'+ 
                '</div>'+
                '<div class="col col-img">'+ 
                    '<a href="" target="_blank">'+
                        '<img alt="" src="images/show.jpg" width="80" height="80">'+ 
                    '</a>'+ 
                '</div>'+ 
                '<div class="col col-name">'+  
                    '<h3 class="name">'+
                        '<a href="" target="_blank" class="goods_name">'+ 
                            a+ 
                        '</a>'+  
                    '</h3>'+     
                '</div>'+ 
                '<div class="col col-price col-prices">'+b+'</div>'+ 
                '<div class="col col-num">'+  
                    '<div class="change-goods-num J_changeGoodsNum">'+ 
                        '<a href="javascript:void(0)" class="J_minus">'+
                            '<i class="iconfont icon-jian" id="J_selectAll"></i>'+
                        '</a>'+ 
                        '<input tyep="text" value="1" autocomplete="off" class="goods-num J_goodsNum">'+ 
                        '<a href="javascript:void(0)" class="J_plus">'+
                            '<i class="iconfont icon-jia" id="J_selectAll"></i>'+
                        '</a>'+
                    '</div>'+  
                '</div>'+ 
                    '<div class="col col-total col-t col-a">'+b+'</div>'+ 
                    '<div class="col col-action">'+ 
                        '<a href="javascript:void(0);" title="删除" class="del J_delGoods">'+
                            '<i class="iconfont icon-cuowu1" id="J_selectAll"></i>'+
                        '</a>'+
                    '</div>'+ 
            '</div>'+ 
            '<div class="item-sub-box">'+
                        '<div class="item-row clearfix">'+ 
                            '<div class="col col-img">'+ 
                                '<span class="icon-activity icon-activity-reduction"></span>'+ 
                            '</div>'+ 
                            '<div class="col col-name">'+ 
                                '<h3 class="name">'+ 
                                    '秒杀优惠 100元'+ 
                                '</h3>'+ 
                            '</div>'+ 
                            '<div class="col col-price">'+ 
                                '-100元'+ 
                            '</div>'+ 
                            '<div class="col col-num">1</div>'+ 
                            '<div class="col col-total col-t">-100元</div>'+ 
                            '<div class="col col-action"></div>'+ 
                        '</div>'+ 
                    '<i class="arrow arrow1"></i>'+ 
            '</div>'+
            '<div class="item-sub-box J_service">'+
                '<div class="extend-buy">'+ 
                    '<i class="iconfont icon-plus"></i>'+
                    '<p>意外保障服务 179元</p>'+   
                    '<a href="" target="_blank" class="agreement">了解保障服务 &gt;</a>'+  
                '</div>'+    
                '<div class="extend-buy">'+ 
                    '<i class="iconfont icon-plus"></i>'+
                    '<p>碎屏保障服务 99元</p>'+   
                    '<a href="" target="_blank" class="agreement">了解保障服务 &gt;</a>'+ 
                '</div>'+   
            '</div>'+
      '</div>'
      localStorage.setItem("val",data);
      location.href="shop_list.html"
      });
      
      
    },


    getTop() {
      var _this = this
      var _top = this.$shop.offsetTop;
      var _top1=this.$swiper.offsetTop;
      console.log(_top1);
      window.onscroll = function () {
        var top = document.documentElement.scrollTop
        // console.log(top)
        if (top >= _top) {
          _this.$shop.style.top = top + 'px'
        }else {
          _this.$shop.style.top = _top + 'px'
        }
        if(top>_top1){
          _this.$swiper.style.top=top + 'px';
        }
        if(top>820){
          console.log(top);
          _this.$swiper.style.top=820 + 'px';
        }
      }
    }
  }
}())
