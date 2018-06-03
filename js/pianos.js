var grandButton = document.querySelectorAll(".grand-button");
var grandButtonA = new Array();
var uprightButton = document.querySelectorAll(".upright-button");
var uprightButtonA = new Array();
var inPianoDis = document.querySelectorAll(".in-piano-display");

for(var i = 0; i < grandButton.length; i++)
{
	grandButtonA[i] = grandButton[i];
	uprightButtonA[i] = uprightButton[i];

	$(grandButton[i]).click(function()
	{
		var n = grandButtonA.indexOf(this);
		$(inPianoDis[n + 1]).css("margin-left", "0px");
	});
	$(uprightButton[i]).click(function()
	{
		var n = uprightButtonA.indexOf(this);
		$(inPianoDis[n + 1]).css("margin-left", "-90vw");
	});
}

var openBar = document.querySelectorAll(".open-bar");
var openBarA = new Array();
var closeBar = document.querySelectorAll(".close-bar");
var closeBarA = new Array();

for(var i = 0; i < openBar.length; i++)
{
	openBarA[i] = openBar[i];
	closeBarA[i] = closeBar[i];
	$(openBar[i]).on("touchstart", function()
	{
		alert("Hello");
	});
}