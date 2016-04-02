//JS samples
function showHref() {
    alert("имя сервера: "+ location.hostname+"  "+"протокол: "+location.protocol);
}

//BOM samples
function showAgent() {
    alert(navigator.userAgent);
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
    $("#fadeinout").click(function() {
        $(this).fadeOut(1000).fadeIn(1000);
    });
});
