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
var selectBar = document.querySelectorAll(".select-bar");

for(var i = 0; i < openBar.length; i++)
{
	openBarA[i] = openBar[i];
	closeBarA[i] = closeBar[i];
	$(openBar[i]).on("touchend", function()
	{
		var n = openBarA.indexOf(this);
		$(this).css("display", "none");
		$(closeBar[n]).css("display", "block");
		$(selectBar[n]).css("height", "auto");
	});
	$(openBar[i]).on("click", function()
	{
		var n = openBarA.indexOf(this);
		$(this).css("display", "none");
		$(closeBar[n]).css("display", "block");
		$(selectBar[n]).css("height", "auto");
	});
	$(closeBar[i]).on("touchend", function()
	{
		var n = closeBarA.indexOf(this);
		$(this).css("display", "none");
		$(openBar[n]).css("display", "block");
		$(selectBar[n]).css("height", "2em");
	});
	$(closeBar[i]).on("click", function()
	{
		var n = closeBarA.indexOf(this);
		$(this).css("display", "none");
		$(openBar[n]).css("display", "block");
		$(selectBar[n]).css("height", "2em");
	});
}