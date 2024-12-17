import { memo } from 'react'
import './HeroSection.scss'
import PropTypes from 'prop-types';
const HeroSection = ({ handelPrice }) => {
    return (
        <section className="hero-section">
            <div className="container hero-section__wrapper" data-aos="fade-up">
                <div className="hero-section__left-box" data-aos="fade-right">
                    <h1 className="title xlm">Introduce Your Product Quickly & Effectively</h1>
                    <p className="text xl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <br />
                    <p className="text xl">mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <div className="hero-section__btn-box">
                        <button className='button primary' data-aos="flip-left" onClick={handelPrice}>Purchase UI Kit</button>
                        <button className='hero-section__button' data-aos="flip-left">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
HeroSection.propTypes = {
    handelPrice: PropTypes.func
};

export default memo(HeroSection)