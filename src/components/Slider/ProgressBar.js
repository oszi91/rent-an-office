import React from 'react';

const ProgressBar = ({ currentSlide, allSlides }) => {
	const progressBar = (currentSlide / allSlides) * 100;
	
	return (
		<div className="progressBarContainer">
			<p className="progressBarContainer__slideNum">{`0${currentSlide}`}</p>
			<div className="progressBarContainer__wrapper">
				<div className="progressBarContainer__wrapper__progressBar">
					<span
						className="progressBarContainer__wrapper__progressBar__fill"
						style={{ width: `${progressBar}%` }}
					></span>
				</div>
			</div>
			<p className="progressBarContainer__slideNum">{`0${allSlides}`}</p>
		</div>
	);
};

export default ProgressBar;
