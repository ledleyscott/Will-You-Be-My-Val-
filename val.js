var fontSize = 20;
var step = 20;

var base = 0;
var plus = 1;

var words = ["lol", "Are you sure?", "Really sure?", "Pookie please", "Think about it", "If you say so, I'll be very sad", "Ok, fine I'll stop asking", "Just kidding, please say yes", "You're breaking my heart"]


$(".b1").click(function () { 
    $(".butt").remove();
    $("h1").text("💓" + "Thank You!!!" + "💓");
    document.getElementsByTagName("img")[0].getAttribute("src");
    document.getElementsByTagName("img")[0].setAttribute("src", "https://gifdb.com/images/high/cute-dog-sticker-love-heart-un1t8hl7y26rnjpt.gif");
});



$(".b2").click(function () { 
    fontSize += step;
    $(".b1").css("font-size", fontSize + "px");

    base += plus;
    $(".b2").text(words[base]);

    if (base===8) {
        base=0;
    }
});
