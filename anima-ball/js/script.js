function animateBalls(){
	const balls = document.querySelectorAll('.ball');
	let centerCircle = document.querySelector('.center-circle');
	let interval;

	//Events
	window.addEventListener('DOMContentLoaded', () => {
		translateBalls(balls);
		interval = setInterval(translateBalls, 1500, balls);
	});
	centerCircle.addEventListener('mouseenter', () => {
		comaBackTranslateBalls(balls);
		clearInterval(interval);
	});
	centerCircle.addEventListener('mouseleave', () => {
		translateBalls(balls);
		interval = setInterval(translateBalls, 1500, balls);
	});
	getBall(balls);
	function getBall(list) {
		list.forEach((item, index) => {
			if (index % 2 == 0) {
				item.style.transition = `all 2.5s cubic-bezier(0.45, 0, 0.55, 1) 0s`;
			} else if (index % 3 == 0) {
				item.style.transition = `all 1.8s cubic-bezier(0.45, 0, 0.55, 1) 0s`; //cubic-bezier(0.45, 0, 0.55, 1)
			} else {
				item.style.transition = `all 1.5s cubic-bezier(0.45, 0, 0.55, 1) 0s`;
			}
		});
	}

	function translateBalls(arr) {
		arr.forEach((item) => {
			item.style.transform = `translate(${randomInteger(-23,23,)}px,${randomInteger(-23, 23)}px)`;
		});
	}

	function comaBackTranslateBalls(arr) {
		arr.forEach((item) => {
			item.style.transform = `translate(0px,0px)`;
		});
	}

	function randomInteger(min, max) {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}
	
}

animateBalls()