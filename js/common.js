
!$(function(){
    var first_ul=window.first_ul=function(ele){
    $(ele).mouseover(function () { 
        if(ele=='.li1'){
            $('.child a img').attr('src','images/1.jpg');
        }
        if(ele=='.li2'){
            $('.child a img').attr('src','images/3.jpg');
        }
        if(ele=='.li3'){
            $('.child a img').attr('src','images/4.jpg');
        }
    });
}
})



