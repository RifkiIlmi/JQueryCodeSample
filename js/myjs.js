var username = "";

function bot_message(message) {
    $('#content').append(`<span class="animate"><span class="bot">MyLovelyBot : </span>` + message + `</span><br>`);
    $(".animate").hide();
    $(".animate").fadeIn(1500);
    $(".animate").removeClass("animate");
}

function get_username(message) {
    bot_message("Hello, What is your name??");
}

function ai(message) {
    if (username < 3) {
        username = message;
        bot_message("Nice to meet you " + username + ", Ask me anything...");
    }

    if (message.indexOf("time")>=0) {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        bot_message("Curent time is "+h+" : "+m);
    }
}

$(function () {

    get_username();

    $('#textbox').keypress(function (event) {
        if (event.which == 13) {
            if ($('#enter').prop("checked")) {
                $('#send').click();
                event.preventDefault();
            }
        }
    });

    $('#send').click(function () {
        let txt = $('#textbox').val();

        if ($('#textbox').val() == "") {
            alert("no message");
        } else {
            $('#textbox').val("");
            // let prevTxt = $('#content').html();
            $('#content').append(`<div class="float-right">` + txt + `<span class="username"> : You</span></div><br>`);
            $('#content').scrollTop($('#content').prop("scrollHeight"));
            ai(txt);
        }
    });

});