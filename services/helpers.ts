import debounce from 'lodash.debounce';

export const ScrollToTop = (top: number = 0, smooth: boolean = true) => {
	if (window && window.scrollY > 100) {
		window?.scroll({
			top,
			behavior: smooth ? 'smooth' : 'instant',
		});

		/* const currentPos = window.scrollY;
		let start: number = 0;
		let time = 500;
		let pos = 0;
		pos = +pos;
		time = +time;
		window.requestAnimationFrame(function step(currentTime) {
			start = !start ? currentTime : start;
			const progress = currentTime - start;
			if (currentPos < pos) {
				window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
			} else {
				window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
			}
			if (progress < time) {
				window.requestAnimationFrame(step);
			} else {
				window.scrollTo(0, pos);
			}
		}); */
	}
};

export const debounceFunction = debounce((fn: () => unknown) => fn(), 500);
