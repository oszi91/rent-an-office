import React, { useRef, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Arrow from './../Layout/Arrow';
import HeadWithLine from '../Layout/HeadWithLine';

import dragToScroll from './dragToScroll';

const Gallery = () => {
	const galleryRef = useRef();
	const { drag, startDragging, stopDragging, toLeft, toRight } =
		dragToScroll(galleryRef);

	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

	const images = [
		'gallery/1.png',
		'gallery/2.png',
		'gallery/3.png',
		'gallery/4.png',
		'gallery/5.png',
		'gallery/6.png',
	];

	return (
		<section className="gallerySection">
			<div>
				{lightboxOpen && (
					<Lightbox
						mainSrc={images[photoIndex]}
						nextSrc={images[(photoIndex + 1) % images.length]}
						prevSrc={images[(photoIndex + images.length - 1) % images.length]}
						onCloseRequest={() => setLightboxOpen(false)}
						onMovePrevRequest={() =>
							setPhotoIndex((photoIndex + images.length - 1) % images.length)
						}
						onMoveNextRequest={() =>
							setPhotoIndex((photoIndex + 1) % images.length)
						}
					/>
				)}
			</div>
			<div
				className="gallery"
				onMouseMove={drag}
				onMouseDown={startDragging}
				onMouseUp={stopDragging}
				onMouseLeave={stopDragging}
				ref={galleryRef}
				onClick={() => setLightboxOpen(true)}
			>
				<div className="gallery__1">
					<img
						className="gallery__1__img"
						src="gallery/1.png"
						alt="example1"
						onClick={() => setPhotoIndex(0)}
					/>
				</div>
				<div className="gallery__2">
					<img
						className="gallery__2__1"
						src="gallery/2.png"
						alt="example1"
						onClick={() => setPhotoIndex(1)}
					/>
					<img
						className="gallery__2__2"
						src="gallery/3.png"
						alt="example1"
						onClick={() => setPhotoIndex(2)}
					/>
				</div>
				<div className="gallery__3">
					<div className="gallery__3__one">
						<img
							className="gallery__3__one__img"
							src="gallery/5.png"
							alt="example1"
							onClick={() => setPhotoIndex(4)}
						/>
					</div>
					<div className="gallery__3__box">
						<img
							className="gallery__3__box__1"
							src="gallery/4.png"
							alt="example1"
							onClick={() => setPhotoIndex(3)}
						/>
						<img
							className="gallery__3__box__2"
							src="gallery/6.png"
							alt="example1"
							onClick={() => setPhotoIndex(5)}
						/>
					</div>
				</div>
				<div className="gallery__containerHeader">
					<HeadWithLine containerClass="gallery__containerHeader__header">
						Galeria
					</HeadWithLine>
				</div>
			</div>
			<div className="gallery__arrows">
				<Arrow onClick={toLeft} direction="left" />
				<Arrow onClick={toRight} />
			</div>
		</section>
	);
};

export default Gallery;
