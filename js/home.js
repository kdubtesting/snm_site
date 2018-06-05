var preview = document.querySelectorAll(".previews");
var previewA = new Array();
var previewImg = ["img/Spirio/ipad_one.jpg",
"img/Spirio/party_one.jpg", "img/Spirio/crspirio_one.jpg",
"img/Spirio/woman_one.jpg"];
var whiteButton = document.querySelectorAll(".white-button");
var firstPre = document.getElementById("first-preview");

firstPre.addEventListener("mouseover", function()
{
	whiteButton[0].style.backgroundColor = "#fff";
	whiteButton[0].style.color = "#000";
});
firstPre.addEventListener("mouseout", function()
{
	whiteButton[0].style.backgroundColor = "transparent";
	whiteButton[0].style.color = "#fff";
});

for(var i = 0; i < preview.length; i++)
{
	previewA[i] = preview[i];
	preview[i].style.backgroundImage = "url('" + previewImg[i] + "')";
	preview[i].addEventListener("mouseover", function()
	{
		var n = previewA.indexOf(this);
		whiteButton[n + 1].style.backgroundColor = "#fff";
		whiteButton[n + 1].style.color = "#000";
	});
	preview[i].addEventListener("mouseout", function()
	{
		var n = previewA.indexOf(this);
		whiteButton[n + 1].style.backgroundColor = "transparent";
		whiteButton[n + 1].style.color = "#fff";
	});
}

//------------------------

var headOne = document.getElementById("headone");
var headTwo = document.getElementById("headtwo");
var firstT = document.getElementById("first-tracker");
var secondT = document.getElementById("second-tracker");

var car;
var setup;
var ctrack;

function carosel(n)
{
	if(n == 0)
	{
		firstT.style.backgroundColor = "#fff";
		secondT.style.backgroundColor = "transparent";
		ctrack = 0;
		setup = setTimeout(function()
		{
			headOne.style.zIndex = "10000";
			headOne.style.left = "100vw";
			headTwo.style.zIndex = "10";
			headTwo.style.left = "200vw";
		}, 600);
		car = setTimeout(function()
		{
			headOne.style.zIndex = "10";
			headOne.style.left = "0px";
			headTwo.style.zIndex = "10000";
			headTwo.style.left = "100vw";
			carosel(1);
		}, 15000);
	}
	else if(n == 1)
	{
		firstT.style.backgroundColor = "transparent";
		secondT.style.backgroundColor = "#fff";
		ctrack = 1;
		setup = setTimeout(function()
		{
			headOne.style.zIndex = "10";
			headOne.style.left = "200vw";
			headTwo.style.zIndex = "10000";
			headTwo.style.left = "100vw";
		}, 600);
		car = setTimeout(function()
		{
			headOne.style.zIndex = "10000";
			headOne.style.left = "100vw";
			headTwo.style.zIndex = "10";
			headTwo.style.left = "0px";
			carosel(0);
		}, 15000);
	}
	else if(n == 2)
	{
		firstT.style.backgroundColor = "transparent";
		secondT.style.backgroundColor = "transparent";
		clearTimeout(car);
		clearTimeout(setup);
	}
}

var caroselB = document.getElementById("carosel-block");
var reset;

caroselB.addEventListener("mouseover", function()
{
	carosel(2);
	if(ctrack == 0)
	{
		firstT.style.backgroundColor = "#fff";
		secondT.style.backgroundColor = "transparent";
		reset = setTimeout(function()
		{
			carosel(0);
		}, 15000);
	}
	else
	{
		firstT.style.backgroundColor = "transparent";
		secondT.style.backgroundColor = "#fff";
		reset = setTimeout(function()
		{
			carosel(1);
		}, 15000)
	}
});

caroselB.addEventListener("mouseout", function()
{
	if(ctrack == 0)
	{
		firstT.style.backgroundColor = "#fff";
		secondT.style.backgroundColor = "transparent";
		clearTimeout(reset);
		carosel(0);
	}
	else
	{
		firstT.style.backgroundColor = "transparent";
		secondT.style.backgroundColor = "#fff";
		clearTimeout(reset);
		carosel(1);
	}
});

firstT.addEventListener("click", function()
{
	carosel(2);
	headOne.style.left = "100vw";
	headOne.style.zIndex = "10000";
	headTwo.style.left = "0px";
	headTwo.style.zIndex = "10";
	firstT.style.backgroundColor = "#fff";
	secondT.style.backgroundColor = "transparent";
	setTimeout(function()
	{
		headTwo.style.left = "200vw";
	}, 500);
	ctrack = 0;
});

secondT.addEventListener("click", function()
{
	carosel(2);
	headOne.style.left = "0px";
	headOne.style.zIndex = "10";
	headTwo.style.left = "100vw";
	headTwo.style.zIndex = "10000";
	firstT.style.backgroundColor = "transparent";
	secondT.style.backgroundColor = "#fff";
	setTimeout(function()
	{
		headOne.style.left = "200vw";
	}, 500);
	ctrack = 1;
});

carosel(0);