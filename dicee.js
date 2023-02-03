// var array = [1,2,3,4,5,6];
// function randomArray(array) {
// var randomNumber1 = array[Math.floor(Math.random()*array.length)];
// console.log(randomNumber1);
// return (randomNumber1);
// }
// randomArray(array);



// function changeImage1() {
//     var randomNumber1 = Math.floor((Math.random() * 6) + 1);
//     console.log(randomNumber1);
//     document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";

// }


// function changeImage2() {
//     var randomNumber2 = Math.floor((Math.random() * 6) + 1);
//     console.log(randomNumber2);
//     document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

// }

// changeImage1();
// changeImage2();

function changeImage() {
    
        var randomNumber = Math.floor((Math.random() * 6) + 1);
        var player1 = document.querySelector(".img1").src = "images/dice" + randomNumber + ".png";
        randomNumber = Math.floor((Math.random() * 6) + 1);
        var player2 = document.querySelector(".img2").src = "images/dice" + randomNumber + ".png";

        if (player1 > player2) {
            document.querySelector("h1").innerHTML = "Player 1 wins!";
        }

        else if (player1 < player2) {
            document.querySelector("h1").innerHTML = "Player 2 wins!";
        }

        else {document.querySelector("h1").innerHTML = "Draw!";
    }
    }
    
    changeImage();


