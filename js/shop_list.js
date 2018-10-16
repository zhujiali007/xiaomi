var shop_list=(function(){
    return{
        init(){
            this.event();
        },
        event(){
            var _this = this;
            $(".goods_name").text(localStorage.goodsName);
            $(".col-prices").text(localStorage.goodsPrice);
            $(".col-t").text(localStorage.goodsPrice);
            
            // console.log(a);
            //选中按钮
            $('.icon-check').click(function (e) { 
                e.preventDefault();
                $(this).toggleClass('icon-active');
                // var a=jQuery.inArray('icon-active',$("i"))
                // console.log(a);
                if($(this).is(".icon-active")){
                    // console.log(1);
                    $(".no-select-tip").addClass("hide");
                    $(".btn-primary").removeClass("btn-a");
                    var a=$(this).parents(".item-row").children(".col-a").text();
                    $("#J_cartTotalPrice").text(a);
                }else{
                    // console.log(2);
                    $(".no-select-tip").removeClass("hide");
                    $(".btn-primary").addClass("btn-a");
                    $("#J_cartTotalPrice").text(0)
                }  
            });
            //删除按钮
            $(".icon-cuowu1").click(function (e) { 
                e.preventDefault();
                $(this).parent().parent().parent().parent(".item-box").remove()
            });
            
            //增减功能
            $(".icon-jian").click(function (e) { 
                e.preventDefault();
                console.log("jian")
                var num=parseInt($(".goods-num").val());
                if(num>1){
                    num-=1;
                }else{
                    num==1;
                }  
                $(".goods-num").val(num);
                var a=$(this).parent().parent().parent(".col-num").prev().text();
                var total=parseInt($(".goods-num").val())*parseFloat(a);
                $(this).parent().parent().parent(".col-num").next().text(total+"元")
                // console.log(b);
            });
            $(".icon-jia").click(function (e) { 
                e.preventDefault();
                var sum=parseInt($(".goods-num").val());
                sum+=1;
                $(".goods-num").val(sum); 
                var a=$(this).parent().parent().parent(".col-num").prev().text();
                var total=parseInt($(".goods-num").val())*parseFloat(a);
                $(this).parent().parent().parent(".col-num").next().text(total+"元")              
                
                console.log(total)
            });
            
            

              
            
        }
    }
}())