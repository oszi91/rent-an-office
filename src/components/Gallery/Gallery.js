import React, { useRef } from 'react';

import g1 from './../../images/gallery/1.png';
import g2 from './../../images/gallery/2.png';
import g3 from './../../images/gallery/3.png';
import g4 from './../../images/gallery/4.png';
import g5 from './../../images/gallery/5.png';
import g6 from './../../images/gallery/6.png';

import Arrow from './../Layout/Arrow';
import HeadWithLine from '../Layout/HeadWithLine';

import dragToScroll from './dragToScroll';

const Gallery = () => {
	const galleryRef = useRef();
	const { drag, startDragging, stopDragging, toLeft, toRight } =
		dragToScroll(galleryRef);

	return (
		<section className="gallerySection">
			<div
				className="gallery"
				onMouseMove={drag}
				onMouseDown={startDragging}
				onMouseUp={stopDragging}
				onMouseLeave={stopDragging}
				ref={galleryRef}
			>
				<div className="gallery__1">
					<img className="gallery__1__img" src={g1} alt="example1" />
				</div>
				<div className="gallery__2">
					<img className="gallery__2__1" src={g2} alt="example1" />
					<img className="gallery__2__2" src={g3} alt="example1" />
				</div>
				<div className="gallery__3">
					<div>
						<img className="gallery__3__1" src={g5} alt="example1" />
					</div>
					<div className="gallery__3__box">
						<img className="gallery__3__box__1" src={g4} alt="example1" />
						<img className="gallery__3__box__2" src={g6} alt="example1" />
					</div>
				</div>
				<HeadWithLine containerClass="gallery__header">Galeria</HeadWithLine>
			</div>
			<div className="gallery__arrows">
				<Arrow onClick={toLeft} direction="left" />
				<Arrow onClick={toRight} />
			</div>
		</section>
	);
};

export default Gallery;
