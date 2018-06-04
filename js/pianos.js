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
var steinImg = document.getElementById("stein-img");
var steinImgs = ["img/Steinway/pianoA.jpg", "img/Steinway/pianoB.jpg", "img/Steinway/pianoD.jpg",
"img/Steinway/pianoM.jpg", "img/Steinway/pianoO.jpg", "img/Steinway/pianoS.jpg"];
var infoOnPara = document.querySelectorAll(".info-on-piano");
var steinSubName = document.getElementById("stein-sub-name");
var steinSub = ["salon grand", "classic grand", "concert grand", "studio grand", "living room grand", "city grand"];
var steinPara = ["At 6' 2\" (188 cm), the Model A is known for delivering a “grand” sound in a medium-scale instrument. This grand offers power and warmth, with a design that allows the solid spruce soundboard to freely and efficiently resonate, like its larger counterparts.",
"This magnificent 6' 11\" (211 cm) grand piano is often referred to by pianists as “the perfect piano.” It is a wonderfully balanced and versatile instrument that does extremely well in refined homes, teaching studios, and mid-sized venues and is also available as a STEINWAY SPIRIO, the world’s finest high resolution player piano.",
"At 8' 11¾\" (274 cm) in length, this majestic musical instrument — the pinnacle of concert grands — is the overwhelming choice of the world's greatest pianists and for anyone who demands the highest level of musical expression.",
"At 5' 7\" (170 cm) in length, this piano's rich tone, responsive action and manageable size makes it perfect for conservatories, and many homes as well. The Model M is also available as a STEINWAY SPIRIO, the world’s finest high resolution player piano",
"At 5' 10¾\" (180 cm), the Model O is the largest of Steinway’s “small grands.” This piano is large enough to satisfy those who demand a full, rich sound, yet sized to fit in almost any home",
"At 5' 1\" (155 cm), this piano is the smallest of the Steinway grands. This design was introduced in the 1930s to invite the majesty of the Steinway sound into almost any space."];
var steinNameInfo = document.getElementById("stein-piano-name");
var grandSec = document.querySelectorAll(".grand-sec");

for(var i = 0; i < steinName.length; i++)
{
	steinNameA[i] = steinName[i];
	$(steinName[i]).click(function()
	{
		var n = steinNameA.indexOf(this);
		var content = steinName[n].innerHTML;
		steinImg.setAttribute("src", steinImgs[n]);
		steinSel.innerHTML = content;
		steinNameInfo.innerHTML = content;
		steinSubName.innerHTML = steinSub[n];
		infoOnPara[0].innerHTML = steinPara[n];
		if(n == 0)
		{
			steinImg.style.width = "60vw";
		}
		else if(n == 1)
		{
			steinImg.style.width = "65vw";
		}
		else if(n == 2)
		{
			steinImg.style.width = "80%";
		}
		else if(n == 3)
		{
			steinImg.style.width = "60vw";
		}
		else if(n == 4)
		{
			steinImg.style.width = "63%";
		}
		else if(n == 5)
		{
			steinImg.style.width = "60%";
		}
		selectBar[0].style.height = "2em";
		openBar[0].style.display = "block";
		closeBar[0].style.display = "none";
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
