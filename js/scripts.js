var list = document.getElementById('list'),
	add = document.getElementById('addElem');
	elementsList = document.getElementsByTagName('li').length;
	n = 1;

add.addEventListener('click', function() {
	var element = document.createElement('li');

	element.innerHTML = 'item ' + n++;

	list.appendChild(element);

	console.log(element);
});