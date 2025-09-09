$("#gnb>ul>li").on("mouseover mouseenter",function(){$(this).children(".submenu").stop().slideDown(400)});
$("#gnb>ul>li").on("mouseleave mouseout",function(){$(this).children(".submenu").stop().slideUp(400)});
$("#p_list>li:first-child").hover(function(){
    $("#product").css("background","url('./images/p_bnr1.jpg') no-repeat center 50%,#d8d8da")
},function(){
    $("#product").css("background","url('./images/p_bnr.jpg') center center/cover")
});
$("#p_list>li:nth-child(2)").hover(function(){
    $("#product").css("background","url('./images/p_bnr2.jpg') no-repeat center 10%/cover,#d8d8da")
},function(){
    $("#product").css("background","url('./images/p_bnr.jpg') center center/cover")
});
$("#p_list>li:nth-child(3)").hover(function(){
    $("#product").css("background","url('./images/p_bnr3.jpg') no-repeat center 50%,#d8d8da")
},function(){
    $("#product").css("background","url('./images/p_bnr.jpg') center center/cover")
});
$("#p_list>li:nth-child(4)").hover(function(){
    $("#product").css("background","url('./images/p_bnr4.jpg') no-repeat center 80%/cover,#d8d8da")
},function(){
    $("#product").css("background","url('./images/p_bnr.jpg') center center/cover")
});
$("#p_list>li:nth-child(5)").hover(function(){
    $("#product").css("background","url('./images/p_bnr5.png') no-repeat center/50%,#d8d8da")
},function(){
    $("#product").css("background","url('./images/p_bnr.jpg') center center/cover")
});
$("#p_list>li:nth-child(6)").hover(function(){
    $("#product").css("background","url('./images/p_bnr6.jpg') no-repeat center 80%/cover")
},function(){
    $("#product").css("background","url('./images/p_bnr.jpg') center center/cover")
});