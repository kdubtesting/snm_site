console.log(window.innerHeight + " height")
console.log(window.innerWidth + " width");

$(document).on("scroll", function(){
	if($(document).scrollLeft() != 0)
	{
		$(document).scrollLeft(0);
	}
});

var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

console.log(isChrome);