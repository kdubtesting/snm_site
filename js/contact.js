$("#open-read").click(function()
{
	$("#cover").css("height", "auto");
	$(this).css("display", "none");
	$("#close-read").css("display", "block");
	$("#shade").css("display", "none");
});

$("#close-read").click(function()
{
	$("#cover").css("height", "14em");
	$(this).css("display", "none");
	$("#open-read").css("display", "block");
	$("#shade").css("display", "block");
});