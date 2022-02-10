import { useEffect, useState } from 'react';

const useSliderHandle = images => {
	const lastIndex = images.length - 1;
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const lastIndex = images.length - 1;
		if (currentIndex > lastIndex) {
			setCurrentIndex(0);
		}

		const slider = setInterval(() => {
			setCurrentIndex(currentIndex + 1);
		}, 4000);

		return () => clearInterval(slider);
	}, [currentIndex, images.length]);

	const nextSlide = () => {
		setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
	};

	const prevSlide = () => {
		setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
	};

	return { currentIndex, nextSlide, prevSlide };
};

export default useSliderHandle;
