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
	$(openBar[i]).on("click", function()
	{
		var n = openBarA.indexOf(this);
		$(this).css("display", "none");
		$(closeBar[n]).css("display", "block");
		$(selectBar[n]).css("height", "auto");
	});
	$(closeBar[i]).on("click", function()
	{
		var n = closeBarA.indexOf(this);
		$(this).css("display", "none");
		$(openBar[n]).css("display", "block");
		$(selectBar[n]).css("height", "2em");
	});
}

var steinSel = document.getElementById("stein-select");
var steinName = document.querySelectorAll(".stein-name");
var steinNameA = new Array();

for(var i = 0; i < steinName.length; i++)
{
	steinNameA[i] = steinName[i];
	$(steinName[i]).click(function()
	{
		var n = steinNameA.indexOf(this);
		var content = steinName[n].innerHTML;
		steinSel.innerHTML = content;
	});
}

var bostonName = document.getElementById("boston-grand-name");
var bostonGrand = document.querySelectorAll(".boston-grand");
var bostonGrandA = new Array();

for(var i = 0; i < bostonGrand.length; i++)
{
	bostonGrandA[i] = bostonGrand[i];
	$(bostonGrand[i]).click(function()
	{
		var n = bostonGrandA.indexOf(this);
		var content = bostonGrand[n].innerHTML;
		bostonName.innerHTML = content;
	});
}

var bostonNameUp = document.getElementById("boston-upright-name");
var bostonUpright = document.querySelectorAll(".boston-up");
var bostonUprightA = new Array();

for(var i = 0; i < bostonUpright.length; i++)
{
	bostonUprightA[i] = bostonUpright[i];
	$(bostonUpright[i]).click(function()
	{
		var n = bostonUprightA.indexOf(this);
		var content = bostonUpright[n].innerHTML;
		bostonNameUp.innerHTML = content;
	});
}

var essexName = document.getElementById("essex-grand-name");
var essexGrand = document.querySelectorAll(".essex-grand");
var essexGrandA = new Array();

for(var i = 0; i < essexGrand.length; i++)
{
	essexGrandA[i] = essexGrand[i];
	$(essexGrand[i]).click(function()
	{
		var n = essexGrandA.indexOf(this);
		var content = essexGrand[n].innerHTML;
		essexName.innerHTML = content;
	});
}

var essexNameUp = document.getElementById("essex-upright-name");
var essexUpright = document.querySelectorAll(".essex-upright");
var essexUprightA = new Array();

for(var i = 0; i < essexUpright.length; i++)
{
	essexUprightA[i] = essexUpright[i];
	$(essexUpright[i]).click(function()
	{
		var n = essexUprightA.indexOf(this);
		var content = essexUpright[n].innerHTML;
		essexNameUp.innerHTML = content;
	});
}
