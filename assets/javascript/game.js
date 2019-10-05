$(document).ready(function () {

    var creditorWeb = {
        currentDebt: 0,
        fundsCounter: 0,
        // buttonNumbers: [],


        $(".income").on("click", function () {
            creidtorWeb.fundsCounter += 1;

            alert("You clicked this button " + fundsCounter + " times!");
            console.log("You clicked this button " + creditorWeb.fundsCounter + " times!")
        })
    }
        // function newButtonNumbers() {

        //     for (i = 0; i < 4; i++) {

        //         //Clicks on a button, will add 100 - 1200 ptsa.
        //         randomNumber = Math.floor(Math.random() * 1200 + 100);

        //         buttonNumbers.push(randomNumber);
        //     }
        // }
        // newButtonNumbers()


        // function debtNumber() {

        //     //Random number (19000 - 120000) at the start of the game.
        //     gameWeb.currentDebt = Math.floor(Math.random() * 120000) + 19000;

        //     $("#currentDebt").text("-$" + gameWeb.currentDebt);
        //     console.log("Current Debt: -$" + gameWeb.currentDebt);
        // };
        // debtNumber()

        // function fundsNumber() {

        //     gameWeb.currentDebt = Math.floor(Math.random() * 120000) + 19000;

        //     $("#currentDebt").text("-$" + creditorWeb.currentDebt);
        //     console.log("Current Debt: -$" + creditorWeb.currentDebt);
        // };
        // fundsNumber()

    });