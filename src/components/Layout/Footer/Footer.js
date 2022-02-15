import React from 'react';

import Container from './../Container';
import Logo from '../Logo';

const Footer = () => {
	return (
		<section className="footerSection">
			<Container>
				<footer className="footer">
					<Logo />
					<div className="footer__container">
						<div className="footer__contact">
							<p className="footer__contact__street">ul. Towarowa 5/6</p>
							<p className="footer__contact__city">31-000 Kraków</p>
							<a href="tel:+48999999999" className="footer__contact__phone">
								+48 999 999 999
							</a>
							<a
								href="mailto:email@email.com"
								className="footer__contact__email"
							>
								email@email.com
							</a>
						</div>
						<ul className="footer__nav footer__nav__first">
							<li className="footer__nav__item">Strona główna</li>
							<li className="footer__nav__item">Poznaj przestrzeń</li>
							<li className="footer__nav__item">Oferta</li>
						</ul>
						<ul className="footer__nav footer__nav__second">
							<li className="footer__nav__item">Lokalizacja</li>
							<li className="footer__nav__item">Własne biuro</li>
							<li className="footer__nav__item">Kontakt</li>
						</ul>
					</div>
					<div className="footer__more">
						<p className="footer__more__privacy">Polityka prywatności</p>
						<div className="footer__more__copyright">
							<p>Proudly designed by</p>
							<img src="footer/logo.png" alt="logo" />
						</div>
					</div>
					<img
						className="footer__decoration__img"
						src="footer/1.png"
						alt=""
					/>
				</footer>
			</Container>
		</section>
	);
};

export default Footer;
