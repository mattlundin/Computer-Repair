// navbar
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('ul li a');
const current = document.querySelector('.current');

window.addEventListener('scroll', sizeNav);

function sizeNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
}
// for (item of navItem) {
// 	if (item.classList.contains('current')) {

// 	}
// }
