var winW = $(document).width();
var winH = $(document).height();

var height;

$(window).resize(function()
{
	height = $(document).height();
	width = $(document).width();
	if(height >= 535)
	{
		$("nav").css("top", "0em");
		$("#body-overflow").css("height", "calc(100vh - 4em)");
		$("#body-overflow").css("top", "4em");
		$("#menu-tab").css("top", "-5em");
	}
});

$("#body-overflow").on("scroll", function()
{
	if(height <= 534 && width <= 1024)
	{
		$("nav").css("top", "-4em");
		$("#body-overflow").css("height", "100vh");
		$("#body-overflow").css("top", "0px");
		$("#menu-tab").css("top", "0em");
	}
	else if(height >= 535 && width <= 1024)
	{
		$("nav").css("top", "0em");
		$("#body-overflow").css("height", "calc(100vh - 4em)");
		$("#body-overflow").css("top", "4em");
		$("#menu-tab").css("top", "-5em");
	}
});

if(winW <= 1024 && winW >= 535 && winH <= 534)
{
	$("#body-overflow").on("scroll", function()
	{
		$("nav").css("top", "-4em");
		$("#body-overflow").css("height", "100vh");
		$("#body-overflow").css("top", "0px");
		$("#menu-tab").css("top", "0em");
	});
}

if(winW <= 534 && winH <= 534)
{
	$("#body-overflow").on("scroll", function()
	{
		$("nav").css("top", "-4em");
		$("#body-overflow").css("height", "100vh");
		$("#body-overflow").css("top", "0px");
		$("#menu-tab").css("top", "-5em");
	});
}

/*---------------------------------------------------*/
//This is the code for using the menu buttons on smaller
//screens to open the navigation.
$("#menu-button").click(function()
{
	$("#small-menu").css("top", "4em");
	$(this).css("display", "none");
	$("#close-button").css("display", "block");
});

$("#close-button").click(function()
{
	$("#small-menu").css("top", "-15em");
	$(this).css("display", "none");
	$("#menu-button").css("display", "block");
	$("#phone-sub").css("height", "0px");
});

/*---------------------------------------------------*/
//This is the code to open the sub menu piano section

$("#open-phone-sub").click(function()
{
	$("#phone-sub").css("height", "auto");
	$(this).css("display", "none");
	$("#close-phone-sub").css("display", "block");
});


$("#close-phone-sub").click(function()
{
	$("#phone-sub").css("height", "0px");
	$(this).css("display", "none");
	$("#open-phone-sub").css("display", "block");
});




