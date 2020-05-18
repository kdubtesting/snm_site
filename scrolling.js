console.log(window.innerHeight + " height")
console.log(window.innerWidth + " width");

$(document).on("scroll", function(){
	if($(document).scrollLeft() != 0)
	{
		$(document).scrollLeft(0);
	}
});

//menu
var menu = document.getElementById("menu");
var menuH = parseInt($(menu).css("height"));

//Company Header
var companyName = document.getElementById("company-name");
var companyNameH = parseInt($(companyName).css("height"));
var companyNameW = parseInt($(companyName).css("width"));

var companyNameT = (menuH / 2) - (companyNameH / 2);

$(companyName).css("margin-top", companyNameT + "px");

//years op
var yearsOp = document.getElementById("years-op");
var yearsOpH = parseInt($(yearsOp).css("height"));

var yearsOpL = (1.5 * 16) + 10 + companyNameW;
var yearsOpT = (menuH / 2) - (yearsOpH / 2);

var totalTitleLength = (1.5 * 16) + companyNameW + 10 + parseInt($(yearsOp).css("width")) + 10;

$(yearsOp).css("left", yearsOpL + "px");
$(yearsOp).css("top", yearsOpT + "px");

//This will be the link area
var linkButtons = document.getElementsByClassName("link-button")
var linkTexts = document.getElementsByClassName("link-text");

var linksButtonL = 0;

for(var i = 0; i < linkButtons.length; i++)
{
	var linkTextW = parseInt($(linkTexts[i]).css("width"));
	var linkTextH = parseInt($(linkTexts[i]).css("height"));
	var linkTextT = (menuH / 2) - (linkTextH / 2);
	var linkButtonW = linkTextW + 40;

	$(linkTexts[i]).css("margin-top", linkTextT + "px");
	$(linkButtons[i]).css("left", linksButtonL + "px");
	linksButtonL += linkButtonW;
}

$("#links-area").css("width", linksButtonL + "px");

if((window.innerWidth - linksButtonL) < totalTitleLength)
{
	$("#links-area").css("display", "none");
}

for(var i = 0; i < linkButtons.length; i++)
{
	$(linkButtons[i]).on("mouseenter", function(){
		$(this.childNodes[1]).css("border-bottom", "2px solid #000")
	});

	$(linkButtons[i]).on("mouseleave", function(){
		$(this.childNodes[1]).css("border-bottom", "2px solid #fff")
	});
}

$(window).on("resize", function(){
	if((window.innerWidth - linksButtonL) < totalTitleLength)
	{
		$("#links-area").css("display", "none");
	}
});


$(window).css("oveflow-x", "hidden");