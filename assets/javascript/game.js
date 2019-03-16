var wins = 0;

var losses = 0;

var counter = 0;

var randomNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);



$("#random-number").text(randomNum);


var numberOptions = [];

for(j = 0; j < 6; j++) {

    randomCrystalNum = Math.floor(Math.random() * ((12 - 1) + 1) + 1);

    numberOptions.push(randomCrystalNum);

}

function reNum() {

    randomNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);


    $("#random-number").text(randomNum);

    for (j = 0; j < 6; j++) {

        randomCrystalNum = Math.floor(Math.random() * ((12 - 1) + 1) + 1);

        numberOptions.push(randomCrystalNum);
    }
}

var imageOption1 = "assets/images/crystal1.png";
var imageOption2 = "assets/images/crystal2.png";
var imageOption3 = "assets/images/crystal3.png";
var imageOption4 = "assets/images/crystal4.png";
var imageOption5 = "assets/images/crystal5.png";
var imageOption6 = "assets/images/crystal6.png";

var imageOptions = [imageOption1, imageOption2, imageOption3, imageOption4, imageOption5, imageOption6];

for (var i = 0; i < numberOptions.length; i++) {
    var crystalImg = $("<img>");
    crystalImg.addClass("crystal-image col-sm-3");
    crystalImg.attr("src", imageOptions[i]);
    crystalImg.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(crystalImg);
}

function reGen() {

    reNum();

    for (var i = 0; i < numberOptions.length; i++) {
        var crystalImg = $("<img>");
        crystalImg.addClass("crystal-image");
        crystalImg.attr("src", imageOptions[i]);
        crystalImg.attr("data-crystalvalue", numberOptions[i]);
        $("#crystals").append(crystalImg);
    }


    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));

        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $("#player-number").text(counter);
        if (counter === randomNum) {
            alert("Congrats now everyone gets to die later on...Fun");
            wins++;
            $("#wins").text(wins);
            counter = 0;
            $("#player-number").text("");
            numberOptions = [];
            $("#crystals").empty();
            reGen();
        }
        else if (counter >= randomNum) {
            alert("If you tried to stop him you failed, if not congrats you might be a dick...");
            losses++;
            $("#losses").text(losses);
            counter = 0;
            $("#player-number").text("");
            numberOptions = [];
            $("#crystals").empty();
            reGen();
        }

    });

}
$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));

    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#player-number").text(counter);
    if (counter === randomNum) {
        alert("Congrats now everyone gets to die later on...Fun");
        wins++;
        $("#wins").text(wins);
        counter = 0;
        $("#player-number").text("");
        numberOptions = [];
        $("#crystals").empty();
        reGen();
    }
    else if (counter >= randomNum) {
        alert("If you tried to stop him you failed, if not congrats you might be a dick...");
        losses++;
        $("#losses").text(losses);
        counter = 0;
        $("#player-number").text("");
        numberOptions = [];
        $("#crystals").empty();
        reGen();
    }
});

$("#hideDirections").click(function() {
    $("#hidden").slideToggle("slow");
})
$("#exit").click(function () {
    $("#hidden").slideToggle("slow");
})
