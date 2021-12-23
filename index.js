//image1
var randomNumber1 =Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
//src changed to randomImageSource1
image1.setAttribute("src", randomImageSource1);

//image2

var randomNumber2 =Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];
//src changed to randomImageSource2
image2.setAttribute("src", randomImageSource2);


//if player wins
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩play 1 wins!";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "play 2 wins!🚩";

}
else{
  document.querySelector("h1").innerHTML = "draw!";
}
