$(document).ready(function () {

    function gameClear() {
        fundsNumber = 0;
        debtNumber = 0;

        $("#funds-area").text("$ " + fundsNumber);
        $("#debt-area").text("$ " + debtNumber);
    }
    gameClear();

    function gameOn() {


        function debt() {

                debtNumber = Math.floor(Math.random() * 120000) + 19000;
                $("#debt-area").text("-$ " + debtNumber);

                console.log("Debt: -$ " + debtNumber);
        }
        debt();


        function button() {
                buttonNumber = Math.floor(Math.random() * 1200) + 100;
        }
        button();

    }    

    $("#start-button").on("click", function () {
        gameOn();
    })


    $(".funds").on("click", function () {

        var buttonValue = ($(this).attr("data-income"));
        buttonValue = parseInt(buttonValue);

        fundsNumber += buttonValue

        if (fundsNumber === debtNumber) {
            alert("Winner winner, chicken dinner!");
        }
        else if (fundsNumber > debtNumber) {
            alert("You snooze, you lose!");
        }
    })

})

