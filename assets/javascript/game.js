var gameWeb = {
    wins: 0,
    losses: 0,
    triesleft: 3,
    triesSoFar: 0,
    currentDebt: 0,
    currentFunds: 0,
    butnNums: [],

    newButnNums: function () {

        console.log(gameWeb)

        for (i = 0; i < 4; i++) {

            //Clicks on a button, will add 1 - 12 ptsa.
            randomNum = Math.floor(Math.random() * 12 + 1);
            gameWeb.butnNums.push(randomNum);

            console.log(gameWeb.butnNums)

        };
    }
}

gameWeb.newButnNums()


$("#button1").on("click", function() {

    gameWeb.butnNums[0];
    console.log(gameWeb.butnNums[0]);
});

$("#button2").on("click", function() {

    gameWeb.butnNums[1];
    console.log(gameWeb.butnNums[1]);
});

$("#button3").on("click", function() {

    gameWeb.butnNums[2];
    console.log(gameWeb.butnNums[2]);
});

$("#button4").on("click", function() {

    gameWeb.butnNums[3];
    console.log(gameWeb.butnNums[3]);
});


function debtNum() {
        //Random number (19 - 120) at the start of the game.
        gameWeb.currentDebt = Math.floor(Math.random() * 120) + 19;

        console.log(gameWeb.currentDebt)
};

debtNum()

function run() {

    
}

$("#button-start").on("click", run);

//     //Random number (19 - 120) at the start of the game.
//     currentDebt: Math.floor(Math.random(19-120)),

//     fundNum: function () {
//         for (i = 0; i < 4; i++) {
//             //Hide points until the player clicks a button.
//             //Clicks on a button, will add 1 - 12 ptsa.
//             //All the buttons will have four new hidden values.
//             randomNum = Math.floor(Math.random() * 12 + 1);
//             this.buttonNum.push(randomNum);
//         }  
// };

// function currentFunds() {

// }

// $(document).ready(function () {

//     function run() {
//         clearInterval(intervalId);
//         intervalId = setInterval(decrement, 1000);
//       }

//       function stop() {
//         clearInterval(intervalId);
//       }

//     //Show the number of games the player wins and loses.
//     //Random number (19 - 120) at the start of the game.
//     targetNum = Math.floor(Math.random(19-120));




// $("#button-restart").on("click", restart);
//         //Player wins if their total score matches the random number from the beginning of the game.
//         //User's score (and score counter) will reset to zero.
//         //Game restarts whenever the player wins OR loses.
//         //New random number assigned with restart.

//         //Player loses if their score goes ABOVE the random number.


//     $(".operators").on("click", function (){

//         // parentsBtn 
//         // secJobBtn
//         // savings
//         // jobBtn

//         //On crystal click, update the player's score counter.
//         //Points will be added to the player's total score.
//     });

// });




