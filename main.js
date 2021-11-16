$(document).ready(function(){

if($(window).scrollTop() >  10){
    $("nav").addClass("nav-Active");
}else{
    $("nav").removeClass("nav-Active");
}

$(".facility").magnificPopup({
    delagate:'a',
    type: 'image',
    gallery:{
        enabled:true
    }
});

});