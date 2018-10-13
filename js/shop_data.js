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
      
      console.log(this.$i)
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
      this.$bb.onclick = function (e) {
        e = e || window.event
        var target = e.target || e.srcEement
        console.log(target.nodeName)
        if (target.nodeName == 'A') {
          _this.setColor(target.index)
        }

        if (target.nodeName == 'SPAN') {
            _this.setColor_span(target.index)
        }
        // $("h2").show(2000)
        // $("p").show(2000)

      }
      this.$color.onclick = function (e) {
        e = e || window.event
        var target = e.target || e.srcElement
        console.log(target.nodeName)
        if (target.nodeName == 'A') {
          _this.setColor1(target.index)
        }

        if (target.nodeName == 'SPAN') {
            _this.setColor_span1(target.index)
        }
        // $("h2").show(2000)
        // $("p").show(2000)

      }
      // this.$select_box.onclick=function(e){
      //   e=e || window .event;
      //   var target=e.target || e.srcElement;
      //   e.preventDefault();
      //   console.log(target.nodeName);
      //   if(target.nodeName=="I"){
      //     a++;
      //     _this.$i[target.index].className="iconfont icon-checkbox active1";
      //     if(a%2==0){
      //       _this.$i[target.index].className="iconfont icon-checkbox";
      //     }
      //   }
        
      // }
      $(".icon-checkbox").click(function(){
        $(this).toggleClass("active1");
      })
      
      
    },



    setColor(index) {
      for (var i = 0; i < this.$select.length; i++) {
          this.$select[i].removeAttribute('class')
      }
          
      this.$select[index].className = 'active'
    },
    setColor1(index) {
        for (var i = 0; i < this.$select1.length; i++) {
            this.$select1[i].removeAttribute('class')
        }
            
        this.$select1[index].className = 'active'
      },
    setColor_span(index){
        for (var i = 0; i < this.$span.length; i++) {
            this.$span[i].parentNode.removeAttribute('class')
        }
        this.$span[index].parentNode.className = 'active'

    },
    setColor_span1(index){
        for (var i = 0; i < this.$span1.length; i++) {
            this.$span1[i].parentNode.removeAttribute('class')
        }
        this.$span1[index].parentNode.className = 'active'

    },


    getTop() {
      var _this = this
      var _top = this.$shop.offsetTop
      // console.log(_top)
      window.onscroll = function () {
        var top = document.documentElement.scrollTop
        // console.log(top)
        if (top >= _top) {
          _this.$shop.style.top = top + 'px'
        }else {
          _this.$shop.style.top = _top + 'px'
        }
      }
    }
  }
}())
