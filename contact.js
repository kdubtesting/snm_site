var generalContact = document.getElementById("general-contacts");
var generalContactH = parseInt($(generalContact).css("height"));
var generalContactW = parseInt($(generalContact).css("width"));

var contactH = generalContactH + generalContactH + 1 + 20;
var contactW = 20 + 1 + generalContactW;

$("#contact-area").css("height", contactH + "px");
$("#contact-area").css("width", contactW + "px");
$("#contact-area").css("left", ((window.innerWidth / 2) - (contactW / 2)) + "px");
$("#contact-area").css("top", "9em");

$("#general-contacts").css("top", "10px");
$("#general-contacts").css("left", "10px");

$("#map-area").css("bottom", "10px");
$("#map-area").css("left", "10px")


