import { useState, useEffect } from "react";
import { navList } from "../../static/data";
import SiteLogo from '../../assets/image/logo.svg';
import './Header.scss';
import { IoMenuSharp } from "react-icons/io5";
import HeaderMenu from "./page/HeaderMenu";
import { GoArrowUp } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const Header = ({ handelPrice }) => {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HeaderMenu menu={menu} setMenu={setMenu} />
      {isScrolled && (
        <button className="site-back-top" onClick={scrollToTop}>
          <GoArrowUp />
        </button>
      )}
      <header
        className={`header ${isScrolled ? "scrolled" : ""}`}
        data-aos="fade-down"
      >
        <nav className="container header__nav">
          <ul className="header__nav-list">
            {navList?.map((item) => (
              <li key={item?.id} data-aos="fade-up">
                <a href={item?.url} className="header__nav-link">
                  {item?.name}
                </a>
              </li>
            ))}
          </ul>
          <img
            width={95}
            height={38}
            src={SiteLogo}
            alt="Site logo"
            data-aos="zoom-in"
          />
          <div className="header__btn-box" data-aos="fade-left">

            <button className="button primary header__btn" onClick={handelPrice}>Purchase now</button>
          <button
            className="header__menu-btn"
            onClick={() => {
              setMenu(true);
            }}
          >
            <IoMenuSharp />
          </button>
        </div>
      </nav>
    </header >
    </>
  );
};
Header.propTypes = {
  handelPrice: PropTypes.func
};
export default Header;
