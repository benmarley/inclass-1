var $brush = $('.cursor-brush');
var $pencil = $('.cursor-pencil');
var $eraser = $('.cursor-eraser');
var $line = $('.cursor-line');


$brush.on('click', function () {
	$(document.body).removeClass('pencil eraser line');
	$(document.body).toggleClass('brush');
});

$pencil.on('click', function () {
	$(document.body).removeClass('brush eraser line');
	$(document.body).toggleClass('pencil');
});

$eraser.on('click', function () {
	$(document.body).removeClass('brush pencil line');
	$(document.body).toggleClass('eraser');
});

$line.on('click', function () {
	$(document.body).removeClass('brush pencil eraser');
	$(document.body).toggleClass('line');
});