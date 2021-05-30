// BURGER
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const lines = document.querySelectorAll('.line');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	links.forEach(item => {
		item.classList.toggle('fade');
	});
	lines[0].classList.toggle('top');
	lines[1].classList.toggle('medium');
	lines[2].classList.toggle('bot');
});



// CURSOR
// let mouseCursor = document.querySelector('.cursor');

// window.addEventListener('mousemove', e => {
// 	console.log('object');
// 	mouseCursor.style.top = e.pageY + 'px';
// 	mouseCursor.style.left = e.pageX + 'px';
// });