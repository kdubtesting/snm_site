console.log(window.innerHeight + " height")
console.log(window.innerWidth + " width");

$(document).on("scroll", function(){
	if($(document).scrollLeft() != 0)
	{
		$(document).scrollLeft(0);
	}
});


var titleDisplay = document.getElementById("title-display")
var titleH = parseInt($(titleDisplay).css("height"));
var titleT = parseInt($(titleDisplay).css("top"));

$("#more-stuff").css("top", ((2 * titleT) + titleH) + "px");

var bodyH = (3 * titleT) + (2 * titleH);

$(document.body).css("height", bodyH + "px");