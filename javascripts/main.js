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
<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js'></script>
<script type='text/javascript' src='js/jquery.easing.1.2.js'></script>
<script type='text/javascript' src='js/jquery.circulate.js'></script>

$("#anything).circulate({

    speed: 400,                  // Speed of each quarter segment of animation, 1000 = 1 second
    height: 200,                 // Distance vertically to travel
    width: 200,                  // Distance horizontally to travel
    sizeAdjustment: 100,         // Percentage to grow or shrink
    loop: false,                 // Circulate continuously
    zIndexValues: [1, 1, 1, 1]   // Sets z-index value at each stop of animation

});

$("#anything").circulate("Stop");
$(document).ready(function() {
    $("#fadeinout").click(function() {
        $(this).fadeOut(1000).fadeIn(1000);
    });
});
