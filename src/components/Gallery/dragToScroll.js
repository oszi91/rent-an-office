const dragToScroll = refProps => {
	let mouseDown = false;
	let startX, scrollLeft;

	const startDragging = e => {
		mouseDown = true;
		startX = e.pageX - refProps.current.offsetLeft;
		scrollLeft = refProps.current.scrollLeft;
	};
	const stopDragging = () => {
		mouseDown = false;
	};

	const drag = e => {
		e.preventDefault();
		if (!mouseDown) {
			return;
		}
		const x = e.pageX - refProps.current.offsetLeft;
		const scroll = x - startX;
		refProps.current.scrollLeft = scrollLeft - scroll;
	};

	const toRight = e => {
		e.preventDefault();
		refProps.current.scrollLeft += 100;
	}

	const toLeft = e => {
		e.preventDefault();
		refProps.current.scrollLeft -= 100;
	}

	return { startDragging, stopDragging, drag, toLeft, toRight};
};

export default dragToScroll;
