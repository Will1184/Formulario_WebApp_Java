//------------Filter------------
$('.btn-filter').click(function(){
    $('.options-filter').css("display","block");
    $('.options-filter').removeClass("hide");
    $('.options-filter').addClass("show");   
    $('.options-filter ').addClass("showAlert");  
                
});                                            
$('.btn.close-filter').click(function(){
    $('.options-filter').addClass("hide");    
    $('.options-filter').removeClass("show");
    setTimeout(function(){
        $('.options-filter').css("display","none");
    },1000);   
});

//--------Alert eliminar-----------------
$('.eliminar').click(function(){
    $('.alert').removeClass("hide");
    $('.alert').addClass("show");   
    $('.alert').addClass("showAlert");                     
});                                            
 $('.btn.confimation').click(function(){
 $('.alert').addClass("hide");
 $('.alert').removeClass("show");
});
$('.btn.close').click(function(){
    $('.alert').addClass("hide");
    $('.alert').removeClass("show");
});
//--------Alert Send-email
$('.email').click(function(){
    $('.alert-send-email').css("display","flex");
    $('.btn-close-send-emai').css("display","none");
});
$('.btn-email').click(function(){
    $('.alert-send-email').css("display","flex");
    $('.btn-close-send-emai').css("display","none");
});
$('.btn-close-send-email').click(function(){
    $('.alert-send-email').css("display","none");
});

//---------------nav-menu-----------
$('.btn-menu').click(function(){
    $('#nav-menu').css("display","flex");
    $('.btn-menu').css("display","none");
    $('.remove-btn-menu').css("display","block");
    $('.nav-menu').addClass("show");
    $('.nav-menu').removeClass("hide");
});
$('.remove-btn-menu').click(function(){
    $('.btn-menu').css("display","block");
    $('.remove-btn-menu').css("display","none");   
    $('.nav-menu').addClass("hide");
    $('.nav-menu').removeClass("show");
    setTimeout(function(){
        $('#nav-menu').css("display","none"); 
    },100);   
});
// ---------Funcion Ver Hora-------------
function startTime(){
    let today=new Date();
    let hr=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    ap=(hr<12)? "<span>AM</span>":"<span>PM</span>";
    hr=(hr==12)? 12:hr;
    hr=(hr>12)? hr-12:hr;

    hr=checkTime(hr);
    min=checkTime(min);
    sec=checkTime(sec);
    document.getElementById("clock").innerHTML=hr+" : "+min+" : "+sec+" "+ap;
    
    let time=setTimeout(function(){startTime()},500);

}
function checkTime(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}
