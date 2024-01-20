export const ScrollToTop = (top: number = 0, smooth: boolean = true) => {
	if (window && window.scrollY > 100) {
		window?.scroll({
			top,
			behavior: smooth ? 'smooth' : 'instant',
		});
	}
};

export default ScrollToTop;
