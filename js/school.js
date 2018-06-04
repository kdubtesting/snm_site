var eduImgs = ["img/education/piano.jpg",
"img/education/violin.jpg", "img/education/viola.jpg",
"img/education/cello.jpg", "img/education/guitar.jpg",
"img/education/voice.jpg", "img/education/brass.jpg", 
"img/education/flute.jpg"];
var instImg = document.querySelectorAll(".inst-img");

for(var i = 0; i < eduImgs.length; i++)
{
	instImg[i].style.backgroundImage = "url('" + eduImgs[i] + "')";
}