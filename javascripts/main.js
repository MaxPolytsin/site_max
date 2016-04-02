//JS samples
function showserv() {
    alert("имя сервера: "+ location.hostname+"  "+"протокол: "+location.protocol);
}

//BOM samples
function showAgent() {
    //alert(navigator.userAgent);
    document.write('Разрешение экрана: <b>'+screen.width+'X'+
screen.height+'</b>')
}

//DOM samples
function makeBGGreen() {
    if (document.body.style.background.valueOf() === new String("green").valueOf()) {
        document.body.style.background = "";
    } else {
        document.body.style.background = "green";
    }
}

//jQuery

$(document).ready(function() {
    $("#hide").click(function() {
        $(this).hide(5);
    });
});
