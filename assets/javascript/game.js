
    var fundsNumber = 1;
    var debtNumber = 0;
    var score = 0;

$(document).ready(function () {

    function gameOn() {


        function debt() {

            debtNumber = Math.floor(Math.random() * 120000) + 19000;
            $("#debt-area").text("-$ " + debtNumber);

            console.log("Debt: -$ " + debtNumber);
        }
        debt();
    }

    $("#start-button").on("click", function () {
        gameOn();
    })

    function button() {
        var buttonNumber = Math.floor(Math.random() * 12000) + 100;
        fundsNumber += buttonNumber;
        checkScore();
    }

    function buttonOne() {
        fundsNumber = fundsNumber + 1;
        checkScore();
    }

    score


    $("#savings").on("click", function () {
        button();
        $("#funds-area").text(fundsNumber);
    })
    $("#job").on("click", function () {
        button();
        $("#funds-area").text(fundsNumber);
    })
    $("#sideHustle").on("click", function () {
        buttonOne()
        $("#funds-area").text(fundsNumber);
    })

})



function checkScore() {

    if (fundsNumber === debtNumber) {
        $(document).ready(function () {
          
            alert("ya win")
        });
        function scoreAdd() {
            ++score
            $("win-area").text(score);
        }
        gameClear();
        scoreAdd();
    }
    else if (fundsNumber > debtNumber) {
        alert("You snooze, you lose!");
        
    }
   // gameClear();
}
function gameClear() {
    fundsNumber = 0;
    debtNumber = 0;

    $("#funds-area").text("$ " + fundsNumber);
    $("#debt-area").text("$ " + debtNumber);
}
