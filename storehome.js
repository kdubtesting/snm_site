var quickStore = document.getElementById("quick-store");

var options = [[],[8]];

var productCard = document.createElement("DIV");
productCard.className = "product-card";

quickStore.appendChild(productCard);

var fCardW = parseInt($(quickStore.childNodes[0]).css("width"));
var fCardH = parseInt($(quickStore.childNodes[0]).css("height"));

//This will be the ration between height and width
var ratioHW = fCardH / fCardW;
var ratioWH = fCardW / fCardH;
var fiftyOGH = 0.7 * fCardH;

//These variables will be for sizing purposes
var maxWidth = (fCardW * 4) + 3;

function loadMore(cardAmount, cardWidth, cardHeight, quickStoreW)
{
	while(quickStore.childNodes.length != 0)
	{
		console.log("hello")
		quickStore.removeChild(quickStore.childNodes[0]);
	}
	var leftPos = 0;
	var topPos = 0;

	for(var i = 0; i < cardAmount; i++)
	{
		var createCard = document.createElement("DIV");
		createCard.className = "product-card";
		quickStore.appendChild(createCard);

		if(leftPos < quickStoreW){
			$(quickStore.childNodes[i]).css("left", leftPos + "px");
			$(quickStore.childNodes[i]).css("width", cardWidth + "px");
			$(quickStore.childNodes[i]).css("height", cardHeight + "px");
			$(quickStore.childNodes[i]).css("top", topPos + "px");
			leftPos += (cardWidth + 1);
		}
		else
		{
			leftPos = 0;
			topPos += (cardHeight + 1);
			$(quickStore.childNodes[i]).css("left", "0px");
			$(quickStore.childNodes[i]).css("top", topPos + "px");
			$(quickStore.childNodes[i]).css("width", cardWidth + "px");
			$(quickStore.childNodes[i]).css("height", cardHeight + "px");
			leftPos += (cardWidth + 1);
		}
	}
	topPos += (cardHeight + 1);
	$(quickStore).css("height", topPos + "px");
}

$(window).on("load", function(){
	if((window.innerWidth - 16) <= maxWidth)
	{
		var threeWidth = (3 * fCardW) + 2;
		

		if((window.innerWidth - 16) <= threeWidth)
		{
			var smallWidth = window.innerWidth - 16 - 3;
			var setCardW = smallWidth / 3;
			var setCardH = ratioHW * setCardW;
			$(quickStore).css("width", (window.innerWidth - 16) + "px");
			$(quickStore).css("left", (8) + "px");
			loadMore(options[1][0], setCardW, setCardH, smallWidth);
			

			if(setCardH <= fiftyOGH)
			{
				var remainSWidth = (window.innerWidth - 16) - 1;
				var newCardSW = remainSWidth * 0.5;
				var newCardSH = newCardSW + (1 * 16);
				$(quickStore).css("width", (window.innerWidth - 16) + "px");
				$(quickStore).css("left", (8) + "px");
				loadMore(options[1][0], newCardSW, newCardSH, remainSWidth);
			}
		}
		else
		{
			loadMore(options[1][0], fCardW, fCardH, threeWidth);
			$(quickStore).css("width", threeWidth + "px");
			$(quickStore).css("left", ((window.innerWidth / 2) - (threeWidth / 2)) + "px");
		}
	}
	else
	{
		$(quickStore).css("width", maxWidth + "px");
		$(quickStore).css("left", ((window.innerWidth / 2) - (maxWidth / 2)) + "px");
		loadMore(options[1][0], fCardW, fCardH, maxWidth)
	}


	var quickStoreT = parseInt($(quickStore).css("top"));
	var quickStoreH = parseInt($(quickStore).css("height"));
	var goToStore = document.getElementById("go-to-store");
	$(goToStore).css("top", (quickStoreT + quickStoreH + 30) + "px");
});

$(window).on("resize", function(){
	if((window.innerWidth - 16) <= maxWidth)
	{
		var threeWidth = (3 * fCardW) + 2;
		loadMore(options[1][0], fCardW, fCardH, threeWidth);
		$(quickStore).css("width", threeWidth + "px");
		$(quickStore).css("left", ((window.innerWidth / 2) - (threeWidth / 2)) + "px");

		if((window.innerWidth - 16) <= threeWidth)
		{
			var remainWidth = window.innerWidth - 16 - 3;
			var newCardW = remainWidth / 3;
			var newCardH = ratioHW * newCardW;
			$(quickStore).css("width", (window.innerWidth - 16) + "px");
			$(quickStore).css("left", (8) + "px");
			loadMore(options[1][0], newCardW, newCardH, remainWidth);

			if(newCardH <= fiftyOGH)
			{
				var remainSWidth = (window.innerWidth - 16) - 1;
				var newCardSW = remainSWidth * 0.5;
				var newCardSH = newCardSW + (2 * 16);
				$(quickStore).css("width", (window.innerWidth - 16) + "px");
				$(quickStore).css("left", (8) + "px");
				loadMore(options[1][0], newCardSW, newCardSH, remainSWidth);
			}
		}
	}
	else
	{
		$(quickStore).css("width", maxWidth + "px");
		$(quickStore).css("left", ((window.innerWidth / 2) - (maxWidth / 2)) + "px");
		loadMore(options[1][0], fCardW, fCardH, maxWidth)
	}
	var quickStoreT = parseInt($(quickStore).css("top"));
	var quickStoreH = parseInt($(quickStore).css("height"));
	var goToStore = document.getElementById("go-to-store");
	$(goToStore).css("top", (quickStoreT + quickStoreH + 30) + "px");
});



