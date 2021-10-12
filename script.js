// navbar shrink on scroll
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav ul');
const navItem = document.querySelectorAll('.nav ul li a');
const burger = document.querySelector('.burger');
const logo = document.querySelector('.logo a');

window.addEventListener('scroll', sizeNav);

function sizeNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('active');
		logo.style.color = 'black';
	} else {
		nav.classList.remove('active');
		logo.style.color = 'white';
	}
}

// navSlide
const navSlide = () => {
	burger.addEventListener('click', () => {
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');
	});
	// close navbar when clicking on li
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];

		closeNav.addEventListener('click', () => {
			if (navList.classList.contains('open')) {
				navList.classList.toggle('open');
			}
			// toggle hamburger
			if (burger.classList.contains('toggle')) {
				burger.classList.toggle('toggle');
			}
		});
	}
};
navSlide();
