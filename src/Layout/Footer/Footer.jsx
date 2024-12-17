import { memo, useEffect } from 'react'
import SiteLogo from '../../assets/image/logo.svg'
import './Footer.scss'
import { navList } from '../../static/data'
import { RiFacebookFill, RiYoutubeFill } from "react-icons/ri";
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import AOS from 'aos';
import PropTypes from 'prop-types';
const socialNetworksList = [
    {
        id: 1,
        icon: <RiFacebookFill />,
        url: 'https://www.facebook.com/'
    },
    {
        id: 2,
        icon: <FaLinkedinIn />,
        url: 'https://www.facebook.com/'
    },
    {
        id: 3,
        icon: <FaTwitter />,
        url: 'https://www.facebook.com/'
    },
    {
        id: 4,
        icon: <RiYoutubeFill />,
        url: 'https://www.facebook.com/'
    },
    {
        id: 5,
        icon: <SiInstagram />,
        url: 'https://www.facebook.com/'
    }
]
function Footer({ handelPrice }) {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top-box">
                    <p className="footer__text" data-aos="fade-left" >©2023 Yourcompany</p>
                    <img width={95} height={38} src={SiteLogo} alt="Site logo" />
                    <nav className='footer__nav-responsive'>
                        <ul className='footer__nav-list'>
                            {
                                navList?.map((item) => (
                                    <li key={item?.id}>
                                        <a href={item?.url} className='footer__nav-link'>{item?.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <button className='button primary' data-aos="flip-left" onClick={handelPrice}>Purchase now</button>
                </div>
                <div className='footer__hr' />
                <div className='footer__bottom-box'>
                    <p className=" footer__text-responsive" data-aos="fade-left">©2023 Yourcompany</p>
                    <nav className='footer__nav'>
                        <ul className='footer__nav-list'>
                            {
                                navList?.map((item) => (
                                    <li key={item?.id}>
                                        <a href={item?.url} className='footer__nav-link'>{item?.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <ul className='footer__social-networksList' >
                        {
                            socialNetworksList?.map((item) => (
                                <li key={item?.id} >
                                    <a href={item?.url} target='_blank' className='footer__social-network-link'>{item?.icon}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}
Footer.propTypes = {
    handelPrice: PropTypes.func
};
export default memo(Footer)