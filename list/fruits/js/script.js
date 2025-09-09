var slidIdx = 0;

function sliseAuto(){
    $(".backimg>li").removeClass("topImg");
    slidIdx++;
    var isIndx = slidIdx % 3;
    if(isIndx == 0){
        $(".backimg>li").eq(isIndx).addClass("topImg");
    }else if(isIndx == 1){
        $(".backimg>li").eq(isIndx).addClass("topImg");
    }else if(isIndx == 2){
        $(".backimg>li").eq(isIndx).addClass("topImg");
    }
}

var slideCall = setInterval("sliseAuto()",1500);

$(".headerWrap").hover(function(){
    clearInterval(slideCall);
},function(){
    slideCall = setInterval("sliseAuto()",1500);
});

$("#gnb>li").hover(function(){
    $(this).children(".sub").stop().slideDown(400);
},function(){
    $(this).children(".sub").stop().slideUp(400);
});

$("#menu").click(function(){
    $("#gnb").fadeToggle(200);
    $(this).toggleClass("menuAni");
});