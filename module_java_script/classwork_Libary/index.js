// const swiper = new Swiper('.swiper-container', {
// 	// Optional parameters
// 	direction: 'horizontal',
// 	loop: true,
// 	// effect: 'fade',
// 	// fadeEffect: {
// 	// 	crossFade: true,
// 	// },

// 	// If we need pagination
// 	// pagination: {
// 	// 	el: '.swiper-pagination',
// 	// },

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},

// 	// And if we need scrollbar
// 	// scrollbar: {
// 	// 	el: '.swiper-scrollbar',
// 	// },
// });

// ! Модальное окно

const btn = document.querySelector('.open');
const modal = document.querySelector('.modal-overlay');

btn.addEventListener('click', () => {
	modal.classList.add('active');
});

modal.addEventListener('click', event => {
	if (event.target.classList.contains('modal-overlay')) {
		modal.classList.remove('active');
	}
	if (event.target.classList.contains('ok')) {
		modal.classList.remove('active');
	}
});
