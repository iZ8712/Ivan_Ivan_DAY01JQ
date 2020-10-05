/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */


$("*").css("background-color", "yellow");

$("p").css("color", "green");


$("p#intro").css("color", "blue");


$(".note").css("color", "red");


$("div.note").css("color", "grey");


$("article > p").css("color", "white");


$("p:last").css("color", "red")


$("p:first").css("color", "blue")


$("p a").css("color", "green")


$("li:nth-child(2)").css("color", "white")


$("p:nth-child(2), p:nth-child(3)").css("color", "yellow")
