var imgs = ["img/test/hzd.jpg", "img/test/lanez.jpg", "img/test/lang.png"];
var whiteButton = document.querySelectorAll(".white-button");
var whiteButtonA = new Array();
var eventImgs = document.querySelectorAll(".event-imgs");
var eventImgsA = new Array();
var phoneBlock = document.querySelectorAll(".phone-block");
var closeButton = document.querySelectorAll(".close-event");
var closeButtonA = new Array();

for(var i = 0; i < imgs.length; i++)
{
	eventImgsA[i] = eventImgs[i];
	eventImgs[i].style.backgroundImage = "url('" + imgs[i] + "')";
	$(eventImgs[i]).on("mouseover", function()
	{
		var n = eventImgsA.indexOf(this);
		$(whiteButton[n]).css("background-color", "#fff");
		$(whiteButton[n]).css("color", "#000");
	});

	$(eventImgs[i]).on("mouseout", function()
	{
		var n = eventImgsA.indexOf(this);
		$(whiteButton[n]).css("background-color", "transparent");
		$(whiteButton[n]).css("color", "#fff");
	});

	whiteButtonA[i] = whiteButton[i];
	$(whiteButton[i]).click(function()
	{
		var n = whiteButtonA.indexOf(this);
		$(phoneBlock[n]).css("display", "block");
	});

	closeButtonA[i] = closeButton[i];
	$(closeButton[i]).click(function()
	{
		var n = closeButtonA.indexOf(this);
		$(phoneBlock[n]).css("display", "none");
	});
}