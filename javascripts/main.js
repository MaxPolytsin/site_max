//JS samples
function showHref() {
    alert(location.href);
}

//BOM samples
function showAgent() {
    alert(navigator.userAgent);
}

//DOM samples
function makeBGRed() {
    if (document.body.style.background.valueOf() === new String("red").valueOf()) {
        document.body.style.background = "";
    } else {
        document.body.style.background = "red";
    }
}

//jQuery

$(document).ready(function() {
    $("#fadeinout").click(function() {
        $(this).fadeOut(1000).fadeIn(1000);
    });
});
