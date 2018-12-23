$(document).ready(()=>{
    var clicked=false;

    $('#like-btn').click(()=>{
        if(clicked){
            console.log("click");
            clicked = false;
            $('#like-btn').css('background-color','white');
            $('#like-btn').css('color','#f78733');
        }else{
            console.log("not click");
            clicked = true;
            $('#like-btn').css('background-color','#f78733');
            $('#like-btn').css('color','white');

        }
    });
});