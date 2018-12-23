$(document).ready(()=>{
    var clicked=false;

    $('#like-btn').click(()=>{
        if(clicked){
            console.log("click");
            clicked = false;
            $('#like-btn').css('background-color','white');
            $('#like-btn').css('color','aqua');
        }else{
            console.log("not click");
            clicked = true;
            $('#like-btn').css('background-color','aqua');
            $('#like-btn').css('color','white');

        }
    });
});