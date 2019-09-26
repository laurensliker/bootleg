// rank (numbers) change

var index = 0;
var arraySize = 13; 
var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

function next() {
	index = (index + 1) % arraySize;
	document.getElementById("number").innerHTML = rank[index];
	document.getElementById("number2").innerHTML = rank[index];
	document.getElementById("number3").innerHTML = rank[index];
	document.getElementById("number4").innerHTML = rank[index];
	document.getElementById("number5").innerHTML = rank[index];
	document.getElementById("number6").innerHTML = rank[index];
	document.getElementById("number7").innerHTML = rank[index];
	document.getElementById("number8").innerHTML = rank[index];
	console.log(index);
	console.log(rank);
}


// image change first card

var card1 = [
"images/theme.svg",
  "images/kirby1.jpg",
  "images/yoda1.jpg",
  "images/panther1.jpg",
   "images/logo1.jpg",
  "images/superman1.jpg",
  "images/simpsons1.jpg",
  "images/ketchup1.jpg",
]

var step = 0;

function changeImage1() {
  if (typeof card1 == "undefined" ||  step == card1.length) return;     

document.getElementById('imgClickAndChange1').src = card1[step]; 

step = (step + 1) % card1.length;

document.getElementById('imgClickAndChange1').setAttribute('src',card1[step]);
}




// image change second card

var card2 = [
"images/theme.svg",
  "images/kirby2.jpg",
  "images/yoda2.jpg",
  "images/panther2.jpg",
   "images/logo2.jpg",
  "images/superman2.jpg",
   "images/simpsons2.jpg",
    "images/ketchup2.jpg",
]

var step = 0;

function changeImage2() {
  if (typeof card2 == "undefined" ||  step == card2.length) return;     

document.getElementById('imgClickAndChange2').src = card2[step]; 

step = (step + 1) % card2.length;

document.getElementById('imgClickAndChange2').setAttribute('src',card2[step]);
}



// image change, third card

var card3 = [
"images/theme.svg",
  "images/kirby3.jpg",
  "images/yoda3.jpg",
  "images/panther3.jpg",
   "images/logo3.jpg",
  "images/superman3.jpg",
   "images/simpsons3.jpg",
    "images/ketchup3.jpg",
]

var step = 0;

function changeImage3() {
  if (typeof card3 == "undefined" ||  step == card3.length) return;     

document.getElementById('imgClickAndChange3').src = card3[step]; 

step = (step + 1) % card3.length;

document.getElementById('imgClickAndChange3').setAttribute('src',card3[step]);
}



// image change fourth card

var card4 = [
"images/theme.svg",
  "images/kirby4.jpg",
  "images/yoda4.jpg",
  "images/panther4.jpg",
    "images/logo4.jpg",
  "images/superman4.jpg",
   "images/simpsons4.jpg",
    "images/ketchup4.jpg",
]

var step = 0;

function changeImage4() {
  if (typeof card4 == "undefined" ||  step == card4.length) return;     

document.getElementById('imgClickAndChange4').src = card4[step]; 

step = (step + 1) % card4.length;

document.getElementById('imgClickAndChange4').setAttribute('src',card4[step]);
}

//arrow


