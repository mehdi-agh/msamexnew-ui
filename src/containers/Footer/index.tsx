import * as React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Twiter from './icon/new-twiter.svg';
import Telegram from './icon/new-telegram.svg';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
// const Logo = require('../../assets/images/UdonLogo.svg');
import Logo from'../../assets/images/UdonLogo.png';


export const Footer: React.FC = Props => {
	const history = useHistory();

	const [emailAddress, setemailAddress] = useState('');

	const inputEmail = (e: any) => {
		setemailAddress(e.target.value);
	};

	const sendEmail = () => {
		const valueEmail = emailAddress;
		// do something
		setemailAddress(valueEmail);
	};

	if (history.location.pathname.startsWith('/confirm')) {
		return <React.Fragment />;
	}

	return <React.Fragment>{renderFooterDesktop(inputEmail, sendEmail, emailAddress)}</React.Fragment>;
};

const renderFooterDesktop = (inputEmail, sendEmail, emailAddress) => {
	// const valueInput: string = emailAddress;

	return (
		<div className="footerDesktop-screen">
			<div className="container-footer-screen">
				<div className="footer d-flex flex-row justify-content-between ">
					<div className="footer__logo">
						<Link className="footer__logo__img" to="/">
							<img src={Logo} alt="" />
						</Link>
						<p className="footer__info__item mt-5 mb-5">
							mSamex is regulated and licensed by Turkiye.
							<br /> It aims to provide the most secure and legal-compliance
							<br /> cryptocurrency trading and digital derivatives
							<br /> trading services to global investors.
						</p>
						<p className="footer__info__title">Follow us</p>
						<div className="footer__news__list-icon ">
							<div className="footer__news__list-icon__item  ">
								<a href="https://twitter.com/MsamexE" target="blank">
									<img src={Twiter} alt="twiter" />
								</a>
							</div>
							<div className="footer__news__list-icon__item  ">
								<a href="https://t.me/msamex" target="blank">
									<img src={Telegram} alt="telegram" />
								</a>
							</div>
						</div>
					</div>
					<div className="footer__info">
						<p className="footer__info__title">CONTACT</p>
						<div style={{ borderBottom: '2px solid var(--yellow)', width: 50, marginBottom: 20 }}></div>
						<p className="footer__info__item">
							<FaPhoneAlt className="footer__info__item__icon" /> +90 216 709 9344
						</p>
						<p className="footer__info__item">
							<FaEnvelope className="footer__info__item__icon" /> info@msamex.com
						</p>
					</div>
					<div className="footer__news">
						<p className="footer__news__title">QUICK LINKS</p>
						<div style={{ borderBottom: '2px solid var(--yellow)', width: 50, marginBottom: 20 }}></div>
						<p className="footer__info__item">
							<Link to="/Markets">Markets</Link>
						</p>
						<p className="footer__info__item">
							<Link to="/ieo">Launchpad</Link>
						</p>
						<p className="footer__info__item">
							<Link to="/competition">Competition</Link>
						</p>
						<p className="footer__info__item">
							<Link to="/stake">Stake</Link>
						</p>
						<p className="footer__info__item">
							<Link to="/promotion">Promotion</Link>
						</p>
					</div>
					<div className="footer__info">
						<p className="footer__info__title">SERVICE SUPPORT</p>
						<div style={{ borderBottom: '2px solid var(--yellow)', width: 50, marginBottom: 20 }}></div>
						<p className="footer__info__item">
							<Link to="/fee">Asset Fee </Link>
						</p>
						<p className="footer__info__item">
							<Link to="/announcement">Announcements </Link>
						</p>
						<p className="footer__info__item">
							<a href="#" target="blank">
								Submit Trade Listing
							</a>
						</p>
						<p className="footer__info__item">
							<a href="#" target="blank">
								Submit IEO Listing
							</a>
						</p>
						<p className="footer__info__item">
							<a href="#" target="blank">
								Submit Vote Listing
							</a>
						</p>
						<p className="footer__info__item">
							<a href="#" target="blank">
								API Documentation
							</a>
						</p>
						<p className="footer__info__item">
							<Link to="#">Udonex Cloud Service</Link>
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className="white-line"></div>
				<p className="footer__copyright">
					mSamex Exchange © 2022 <span className="text-primary">mSamex.com</span> All rights reserved.
				</p>
			</div>
		</div>
	);
};
