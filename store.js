var windowW = Math.floor(0.9 * window.innerWidth);

var storeBody = document.getElementById("store-body");

var options = [["all products", "cigars", "cigarettes", "bongs", "hookahs"],
				[20, 4, 11, 3, 3]];

var random = Math.floor(Math.random() * 4);


function createProductCard(number, windW)
{
	var leftPos = 0;
	var topPos = 0;
	while(storeBody.childNodes.length != 0)
	{
		storeBody.removeChild(storeBody.childNodes[0]);
	}
	for(var i = 0; i < window.options[1][number]; i++)
	{
		var card = document.createElement("DIV");
		card.className = "product-card";

		//Create Image block
		var image = document.createElement("DIV");
		image.className = "product-image";

		//Create Info block
		var info = document.createElement("DIV");

		//append element
		storeBody.appendChild(card);

		//position elements
		var cardW = parseInt($(storeBody.childNodes[0]).css("width"));
		var ogLeft = leftPos;
		leftPos += (cardW + 15)


		if(leftPos <= windW)
		{
			$(storeBody.childNodes[i]).css("top", topPos + "px");
			$(storeBody.childNodes[i]).css("left", ogLeft + "px");
		}
		else
		{
			$(storeBody).css("width", (ogLeft - 15) + "px");
			$(storeBody).css("left", ((window.innerWidth / 2) - ((ogLeft - 15) / 2)) + "px");
			leftPos = 0;
			topPos += (parseInt($(storeBody.childNodes[0]).css('height')) + 15);
			$(storeBody.childNodes[i]).css("left", leftPos + "px");
			$(storeBody.childNodes[i]).css("top", topPos + "px");
		}
	}

	if(topPos == 0)
	{
		$(storeBody).css("width", (leftPos - 15) + "px");
		$(storeBody).css("left", ((window.innerWidth / 2) - ((leftPos - 15) / 2)) + "px");
	}

	topPos += (parseInt($(storeBody.childNodes[0]).css('height')) + 15);
	$(storeBody).css("height", topPos + "px");
}

createProductCard(random, windowW);
console.log(storeBody.childNodes);

var storeBodyW = parseInt($(storeBody).css("width"));

$(window).on("resize", function(){
	var resizeWindow = Math.floor((0.9 * (window.innerWidth)));
	$(storeBody).css("left", ((window.innerWidth / 2) - (storeBodyW / 2)) + "px")
	createProductCard(random, resizeWindow);
});