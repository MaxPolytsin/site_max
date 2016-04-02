//JS samples
function showHref() {
    alert("имя сервера: "+ location.hostname+"  "+"протокол: "+location.protocol);
}

//BOM samples
function showAgent() {
    alert(navigator.userAgent);
}

//DOM samples
function makeBGRed() {
    if (document.body.style.background.valueOf() === new String("green").valueOf()) {
        document.body.style.background = "";
    } else {
        document.body.style.background = "green";
    }
}

//jQuery

$(document).ready(function() {
    $("#hide").click(function() {
        $(this).hide(1000);
    });
});
