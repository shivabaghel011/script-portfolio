var randomNumber1= Math.floor(Math.random() * 6 )+1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");


var randomNumber2= Math.floor(Math.random() * 6 )+1;

randomDiceImageSource="images/dice"+randomNumber2+".png"

document.querySelector(".img2").setAttribute("src",randomDiceImageSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="winner: player1";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="winner: player2";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}

