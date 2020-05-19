var windowRef = Math.floor(0.9 * window.innerWidth);

var storeBody = document.getElementById("store-body");

var options = [["all products", "cigars", "cigarettes", "bongs", "hookahs"],
				[20, 4, 11, 3, 3]];

var random = Math.floor(Math.random() * 4);

//Divde function into three parts
//The first part is what is the maximum width the cards can be,
//and how they relate to the size of the screen

var firstCard = document.createElement("DIV");
firstCard.className = "product-card";
storeBody.removeChild(storeBody.childNodes[0]);
storeBody.appendChild(firstCard);

//This is the image being added to the card
var firstImage = document.createElement("DIV");
firstImage.className = "product-image";

storeBody.childNodes[0].appendChild(firstImage);

//get the width of the card
//This is the original width
var fCardW = parseInt($(storeBody.childNodes[0]).css("width"));


//This is the original height
var fCardH = parseInt($(storeBody.childNodes[0]).css("height"));


//This will be the ration between height and width
var ratioHW = fCardH / fCardW;
var ratioWH = fCardW / fCardH;
var fiftyOGH = 0.5 * fCardH;

//These variables will be for sizing purposes
var maxWidth = (fCardW * 4) + 3;

$(window).on("load", function(){
	if((window.innerWidth - 16) <= maxWidth)
	{
		var threeWidth = (3 * fCardH) + 2;
		$(storeBody.childNodes[0]).css("width", fCardW + "px");
		$(storeBody.childNodes[0]).css("height", fCardH + "px");
		$(storeBody).css("height", fCardH + "px");
		$(storeBody).css("width", threeWidth + "px");
		$(storeBody).css("left", ((window.innerWidth / 2) - (threeWidth / 2)) + "px");

		if((window.innerWidth - 16) <= threeWidth)
		{
			var smallWidth = window.innerWidth - 16 - 3;
			var setCardW = smallWidth / 3;
			var setCardH = ratioHW * setCardW;
			$(storeBody.childNodes[0]).css("height", setCardH + "px");
			$(storeBody.childNodes[0]).css("width", setCardW + "px");
			$(storeBody).css("width", (window.innerWidth - 16) + "px");
			$(storeBody).css("height", setCardH + "px");
			$(storeBody).css("left", (8) + "px");
		}
	}
	else
	{
		$(storeBody).css("width", maxWidth + "px");
		$(storeBody).css("height", fCardH + "px");
		$(storeBody).css("left", ((window.innerWidth / 2) - (maxWidth / 2)) + "px");
	}
});

$(window).on("resize", function(){
	if((window.innerWidth - 16) <= maxWidth)
	{
		var threeWidth = (3 * fCardW) + 2;
		$(storeBody.childNodes[0]).css("width", fCardW + "px");
		$(storeBody.childNodes[0]).css("height", fCardH + "px");
		$(storeBody).css("height", fCardH + "px");
		$(storeBody).css("width", threeWidth + "px");
		$(storeBody).css("left", ((window.innerWidth / 2) - (threeWidth / 2)) + "px");

		if((window.innerWidth - 16) <= threeWidth)
		{
			var remainWidth = window.innerWidth - 16 - 3;
			var newCardW = remainWidth / 3;
			var newCardH = ratioHW * newCardW;
			$(storeBody.childNodes[0]).css("height", newCardH + "px");
			$(storeBody.childNodes[0]).css("width", newCardW + "px");
			$(storeBody).css("width", (window.innerWidth - 16) + "px");
			$(storeBody).css("height", newCardH + "px");
			$(storeBody).css("left", (8) + "px");

			if(newCardH <= fiftyOGH)
			{
				console.log(window.innerWidth - 16);
				var remainSWidth = (window.innerWidth - 16) - 1;
				var newCardSW = remainWidth * 0.5;
				var newCardSH = newCardW + (7 * 16);
				$(storeBody.childNodes[0]).css("height", newCardSH + "px");
				$(storeBody.childNodes[0]).css("width", newCardSW + "px");
				$(storeBody).css("width", (window.innerWidth - 16) + "px");
				$(storeBody).css("height", newCardSH + "px");
				$(storeBody).css("left", (8) + "px");
			}
		}
	}
	else
	{
		$(storeBody.childNodes[0]).css("width", fCardW + "px");
		$(storeBody.childNodes[0]).css("height", fCardH + "px");
		$(storeBody).css("width", maxWidth + "px");
		$(storeBody).css("height", fCardH + "px");
		$(storeBody).css("left", ((window.innerWidth / 2) - (maxWidth / 2)) + "px");
	}
});

/*
var testCard = document.createElement("DIV");
testCard.className = "product-card";
storeBody.removeChild(storeBody.childNodes[0]);
storeBody.appendChild(testCard)
var testCardW = parseInt($(storeBody.childNodes[0]).css("width"));
var testCardH = parseInt($(storeBody.childNodes[0]).css("height"));
var ratioHW = testCardH / testCardW;
var halfOGH = 0.6 * testCardH;
var maxBreakPoint = testCardW * 3; //This is where the site will either get smaller or larger

$(window).on("resize", function(){
	windowRef = Math.floor(0.9 * window.innerWidth);
	if(windowRef <= maxBreakPoint)
	{
		var cardW = (windowRef * (0.33) - 6);
		var cardH = ratioHW * cardW;
		if(cardH <= halfOGH)
		{
			cardW = parseInt($(storeBody.childNodes[0]).css("width"));
			cardH = ratioHW * cardW;
			var storeBodyW = (2 * cardW);
			$(storeBody).css("width", storeBodyW + "px");
			$(storeBody).css("height", cardH + "px")
			$(storeBody).css("left", ((window.innerWidth / 2) - (storeBodyW / 2)) + "px");	
		
			if(storeBodyW > window.innerWidth)
			{
				storeBodyW = 0.9 * window.innerWidth;
				cardH = storeBodyW;
				cardW = storeBodyW;
				$(storeBody.childNodes[0]).css("width", cardW + 'px');
				$(storeBody.childNodes[0]).css("height", cardH + "px");
				$(storeBody).css("left", "5vw");
				$(storeBody).css("width", storeBodyW + "px");
				$(storeBody).css("height", storeBodyW + "px");
			}

		}
		else
		{
			$(storeBody).css("width", "90vw");
			$(storeBody).css("left", "5vw");
			$(storeBody.childNodes[0]).css('width', cardW + "px");
			$(storeBody.childNodes[0]).css('height', cardH + "px");
		}

	}
	else
	{
		$(storeBody).css("left", "5vw");
		$(storeBody.childNodes[0]).css('width', testCardW + "px");
		$(storeBody.childNodes[0]).css('height', testCardH + "px");
	}
})
*/

