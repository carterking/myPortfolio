$(document).ready(function () {
    console.log('We are ready!');

    $("#social-click").click(function () {
        $(".social-icon").toggle('slide');
    });

    $("#about").mouseover(function () {
        $("#headshot").attr("src", "../images/headshot2.jpg")
        $("#about").css({"flex-direction": "row-reverse"})
    }).mouseout(function () {
        $("#headshot").attr("src", "../images/headshot1.jpg")
        $("#about").css({"flex-direction": "row"})
    })


});




