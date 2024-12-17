import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';
import TitleGoesHere from '../../assets/image/title-here-img.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Reusable.scss';

const Reusable = ({ is_bigComponent = false, img, is_button = false, handelPrice }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="container">
      <div
        className={` ${is_bigComponent ? 'reusable__big-component' : 'reusable__small-component'}`}
        data-aos="fade-up"
      >
        <div
          className={`reusable__right-box ${is_bigComponent ? 'reusable__right-box__big' : 'reusable__right-box__small'
            }`}
          data-aos="fade-right"
        >
          <h2 className="title x">Light, Fast & Powerful</h2>
          <p className="text x">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <br />
          <p className="text x">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
          {is_bigComponent && (
            <div className="reusable__bottom-box" data-aos="zoom-in">
              {Array.from({ length: 2 }, (_, index) => (
                <div key={index} className="reusable__bottom-box__card" data-aos="fade-up" data-aos-delay={index * 200}>
                  <img src={TitleGoesHere} alt="Title Goes Here Img" className="reusable__bottom-box__img" />
                  <h3 className="reusable__bottom-box__title">Title Goes Here</h3>
                  <p className="reusable__bottom-box__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                  </p>
                </div>
              ))}
            </div>
          )}
          {is_button && (
            <button className="button primary reusable__btn" data-aos="flip-left" onClick={handelPrice}>
              Purchase Now
            </button>
          )}
        </div>
        <div className={`reusable__img-box`} data-aos="fade-left">
          <img src={img} alt="Light, Fast & Powerful" />
        </div>
      </div>
    </section>
  );
};

Reusable.propTypes = {
  is_bigComponent: PropTypes.bool,
  img: PropTypes.string.isRequired,
  is_button: PropTypes.bool,
  handelPrice: PropTypes.func
};

export default memo(Reusable);
