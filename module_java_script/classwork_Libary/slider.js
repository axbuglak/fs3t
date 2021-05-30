const sliderItem = document.querySelectorAll('.slider-item');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
const sliderNavItems = document.querySelectorAll('.nav-item')

let count = 0;

btnRight.addEventListener('click', () => {
	sliderItem[count].classList.remove('active');
	sliderNavItems[count].classList.remove("active")
	count++;
	if (sliderItem.length === count) {
		count = 0;
	}
	sliderItem[count].classList.add('active');
		if (sliderNavItems.length === count) {
		count = 0;
	}
	sliderNavItems[count].classList.add('active');
});

btnLeft.addEventListener('click', () => {
	sliderItem[count].classList.remove('active');
	sliderNavItems[count].classList.remove("active")
	if (0 === count) {
		count = sliderItem.length;
	}
	if (0 === count) {
		count = sliderNavItems.length;
	}
	count--;
	sliderItem[count].classList.add('active');
	sliderNavItems[count].classList.add('active');
});

	