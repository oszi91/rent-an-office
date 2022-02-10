export const findImage = (imgList, photoName) => {
	const nameFormat = text => text.substr(0, text.lastIndexOf('.'));

	const foundImg = imgList.find(
		img => nameFormat(img.node.childImageSharp.fluid.originalName) === photoName
	);

	return foundImg.node.childImageSharp.gatsbyImageData;
};
