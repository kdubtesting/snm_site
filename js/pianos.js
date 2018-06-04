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

/*for(var i = 0; i < steinName.length; i++)
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
}*/

var bostonName = document.getElementById("boston-grand-name");
var bostonGrand = document.querySelectorAll(".boston-grand");
var bostonGrandA = new Array();
var bostonImg = document.getElementById("boston-grand-img");

/*for(var i = 0; i < bostonGrand.length; i++)
{
	bostonGrandA[i] = bostonGrand[i];
	$(bostonGrand[i]).click(function()
	{
		var n = bostonGrandA.indexOf(this);
		var content = bostonGrand[n].innerHTML;
		bostonName.innerHTML = content;
	});
}*/

var bostonNameUp = document.getElementById("boston-upright-name");
var bostonUpright = document.querySelectorAll(".boston-up");
var bostonUprightA = new Array();
var bostonUpImg = document.getElementById("boston-upright-img");

/*for(var i = 0; i < bostonUpright.length; i++)
{
	bostonUprightA[i] = bostonUpright[i];
	$(bostonUpright[i]).click(function()
	{
		var n = bostonUprightA.indexOf(this);
		var content = bostonUpright[n].innerHTML;
		bostonNameUp.innerHTML = content;
	});
}*/

var essexName = document.getElementById("essex-grand-name");
var essexGrand = document.querySelectorAll(".essex-grand");
var essexGrandA = new Array();
var essexGrandImg = document.getElementById("essex-grand-img");

/*for(var i = 0; i < essexGrand.length; i++)
{
	essexGrandA[i] = essexGrand[i];
	$(essexGrand[i]).click(function()
	{
		var n = essexGrandA.indexOf(this);
		var content = essexGrand[n].innerHTML;
		essexName.innerHTML = content;
	});
}*/

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

var winW = $(window).width();
var pianoInfo = document.querySelectorAll(".piano-info-sec");
var pianoImg = document.querySelectorAll(".piano-img");
var bostonGrandName = document.getElementById("boston-grand-piano-name");
var bostonGrandSub = document.getElementById("boston-grand-sub-name");
var bostonGrandImgs = ["img/Boston/Grand/bostonM156.jpg", "img/Boston/Grand/bostonM163.jpg",
"img/Boston/Grand/bostonM178.jpg", "img/Boston/Grand/bostonM193.jpg", 
"img/Boston/Grand/bostonM215.jpg"];
var bostonGrandNameTitle = ["Boston Grand Piano 156 EP", "Boston Grand Piano 163 EP", 
"Boston Grand Piano 178 EP", "Boston Grand Piano 193 EP", 
"Boston Grand Piano 215 EP"];
var bostonGrandText = ["Featuring a maple inner rim and Octagrip pinblock, the GP-215 Performance Edition II is 7' ½\" (215 cm) in length, and the grand of choice for many institutions and festivals that boast mid-sized performance venues.",
"At 6' 4\" (193 cm), the GP-193 Performance Edition II produces a powerful yet warm sound and is an excellent choice for teaching studios.",
"At 5' 10\" (178 cm), the GP-178 Performance Edition II is the perfect grand for any teaching studio or music room.",
"At 5' 4\" (163 cm), the GP-163 Performance Edition II is small enough to fit in any home, but possesses the sound of a much larger grand — thanks to its widetail design.",
"The smallest Boston grand by size at 5' 1½\" (156 cm), there is nothing small about the sound of GP-156 Performance Edition II, which benefits from a wide-tail design"];
//--------------------
var bostonUprightName = document.getElementById("boston-upright-piano-name");
var bostonUprightImgs = ["img/Boston/Uprights/bostonMUP118EP.jpg", "img/Boston/Uprights/bostonMUP118SBOS.jpg",
"img/Boston/Uprights/bostonMUP126EP.jpg", "img/Boston/Uprights/bostonMUP132.jpg"];
var bostonUprightNameTitle = ["Boston Upright Piano 118 EP", "Boston Upright Piano 118 SBOS", 
"Boston Upright Piano 126 EP", "Boston Upright Piano 132 EP"];
var bostonUprightText = ["The Boston 118E Performance Edition combines the best in beauty and performance in an affordable piano. At a height of 46½\" (118 cm) and a depth of 23½\" (60 cm), the small profile allows you to fit this piano into almost any room.",
"Boston's institutional model, UP-118S Performance Edition, is perfect for any music room and features double-rubber casters for ease of movement — and locks for the top and fallboard. Height: 46½\" (118 cm)",
"The Boston UP-126E Performance Edition makes a great addition to any teaching studio or home. A longer music rest accommodates more music. Height: 49½\" (126 cm)",
"The largest Boston upright piano at a height of 52\" (132 cm), the UP-132E Performance Edition provides a rich and powerful sound that rivals many grand pianos."];
//-------------------
var essexGrandName = document.getElementById("essex-grand-piano-name");
var essexGrandSub = document.getElementById("essex-grand-sub-name");
var essexGrandImgs = ["img/Essex/Grand/egp155FBCHS.jpg", "img/Essex/Grand/egp155CBlack.jpg", 
"img/Essex/Grand/egp155CWhite.jpg", "img/Essex/Grand/egp173CBlack.jpg"];
var essexGrandNameTitle = ["Essex Grand 155F", "Essex Grand 155C Black", "Essex Grand 155C White", "Essex Grand 173C Black"];
var essexGrandSubTitle = ["French Provincial", "Classic Grand", "Classic Grand", "Classic Grand"];
var essexGrandText = ["Our smallest grand piano, the EGP-155F is not small when it comes to volume, thanks to Steinway–designed features — in an elegant French provincial style — to maximize the potential of this instrument.",
"Our smallest grand piano, the EGP-155C is not small when it comes to volume, thanks to Steinway–designed features to maximize the potential of this instrument.",
"Our smallest grand piano, the EGP-155C is not small when it comes to volume, thanks to Steinway–designed features to maximize the potential of this instrument.",
"The EGP-173C or \"Classic Grand\" is the style by which all others are judged. This Classic Sheraton design has withstood the test of time for over 100 years since it was first introduced by Steinway & Sons in 1900."];

if(winW >= 1024)
{
	var pIHONE = $(pianoInfo[0]).height();
	var pImgOne = $(pianoImg[0]).height();
	var grandSecH = $(grandSec[0]).height();
	var calcH = (grandSecH - pIHONE) / 2;
	var calcI = (grandSecH - pImgOne) / 2;
	pianoInfo[0].style.top = calcH + "px";
	pianoImg[0].style.marginTop = calcI + "px";
	//---------------------
	var pIHTWO = $(pianoInfo[1]).height();
	var pImgTwo = $(pianoImg[1]).height();
	var calcHTwo = (grandSecH - pIHTWO) / 2;
	var calcITwo = (grandSecH - pImgTwo) / 2;
	pianoInfo[1].style.top = calcHTwo + "px";
	pianoImg[1].style.marginTop = calcITwo + "px";
	//----------------------
	var pIHTHREE = $(pianoInfo[2]).height();
	var pImgThree = $(pianoImg[2]).height();
	var calcHThree = (grandSecH - pIHTHREE) / 2;
	var calcIThree = (grandSecH - pImgThree) / 2;
	pianoInfo[2].style.top = calcHThree + "px";
	pianoImg[2].style.marginTop = calcIThree + "px";
	//----------------------
	var pIHFOUR = $(pianoInfo[3]).height();
	var pImgFour = $(pianoImg[3]).height();
	var calcHFour = (grandSecH - pIHFOUR) / 2;
	var calcIFour = (grandSecH - pImgFour) / 2;
	pianoInfo[3].style.top = calcHFour + "px";
	pianoImg[3].style.marginTop = calcIFour + "px";
	//----------------------
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
			steinImg.style.height = "350px";
			selectBar[0].style.height = "2em";
			openBar[0].style.display = "block";
			closeBar[0].style.display = "none";
		});
	}
	//-----------------------
	for(var i = 0; i < bostonGrand.length; i++)
	{
		bostonGrandA[i] = bostonGrand[i];
		$(bostonGrand[i]).click(function()
		{
			var n = bostonGrandA.indexOf(this);
			var content = bostonGrand[n].innerHTML;
			bostonName.innerHTML = content;
			bostonImg.setAttribute("src", bostonGrandImgs[n]);
			bostonGrandName.innerHTML = bostonGrandNameTitle[n];
			infoOnPara[1].innerHTML = bostonGrandText[n];
			selectBar[1].style.height = "2em";
			openBar[1].style.display = "block";
			closeBar[1].style.display = "none";
		});
	}
	//-----------------------
	for(var i = 0; i < bostonUpright.length; i++)
	{
		bostonUprightA[i] = bostonUpright[i];
		$(bostonUpright[i]).click(function()
		{
			var n = bostonUprightA.indexOf(this);
			var content = bostonUpright[n].innerHTML;
			bostonNameUp.innerHTML = content;
			bostonUpImg.setAttribute("src", bostonUprightImgs[n]);
			bostonUprightName.innerHTML = bostonUprightNameTitle[n];
			infoOnPara[2].innerHTML = bostonUprightText[n];
			selectBar[2].style.height = "2em";
			openBar[2].style.display = "block";
			closeBar[2].style.display = "none";
		});
	}
	//-----------------------
	for(var i = 0; i < essexGrand.length; i++)
	{
		essexGrandA[i] = essexGrand[i];
		$(essexGrand[i]).click(function()
		{
			var n = essexGrandA.indexOf(this);
			var content = essexGrand[n].innerHTML;
			essexName.innerHTML = content;
			essexGrandSub.innerHTML = essexGrandSubTitle[n];
			essexGrandImg.setAttribute("src", essexGrandImgs[n]);
			essexGrandName.innerHTML = essexGrandNameTitle[n];
			infoOnPara[3].innerHTML = essexGrandText[n];
			selectBar[3].style.height = "2em";
			openBar[3].style.display = "block";
			closeBar[3].style.display = "none";
		});
	}
}	
