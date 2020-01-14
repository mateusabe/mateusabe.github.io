var currentFs, nextFs, previousFs;
var left, opacity, scale;

$(".nextActionButton").click(function(){
currentFs = $(this).parent();
nextFs = $(this).parent().next();

$("#progressbar li").eq($("fieldset").index(nextFs)).addClass("active");

nextFs.show();
currentFs.animate({opacity:0}, {
    step: function(now, mx){
        scale = 1 -(1-now) *0.2;
        left = (now * 50)+"%";
        opacity = 1 - now;
        currentFs.css({'transform': 'scale('+scale+')'});
        nextFs.css({'left':left,'opacity':opacity});
    },
    duration:600,
    complete:function(){
        currentFs.hide();
    },
    easing:'easeInOutBack'
});
});

$(".prevActionButton").click(function(){
currentFs = $(this).parent();
previousFs = $(this).parent().prev();

$("#progressbar li").eq($("fieldset").index(currentFs)).removeClass("active");

previousFs.show();
currentFs.animate({opacity:0}, {
    step: function(now, mx){
        scale = 0.8 + (1-now) *0.2;
        left = ((1-now) * 50)+"%";
        opacity = 1 - now;
        currentFs.css({'left':left});
        previousFs.css({'transform':'scale('+scale+')','opacity':opacity});
    },
    duration:600,
    complete:function(){
        currentFs.hide();
        animating = false;
    },
    easing:'easeInOutBack'
});
});

$(".end").click(function(){
return false;
});