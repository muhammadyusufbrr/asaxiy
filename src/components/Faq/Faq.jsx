import { memo } from 'react';
import './Faq.scss'
import PropTypes from 'prop-types';
const Faq = ({ handelPrice }) => {
    return (
        <section className='faq'>
            <div className='container'>
                <div className=''>
                    <div className='faq__top-box'>
                        <h2 className='title x center'>A Price To Suit Everyone</h2>
                        <p className='text x center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    </div>
                    <div className='faq__center-box'>
                        <p className='title xl center'>$40</p>
                        <p className='text x center'>UI Design Kit</p>
                    </div>
                    <div className='faq__bottom-box'>
                        <p className='text x center'>See, One price. Simple.</p>
                        <button className='button primary' onClick={handelPrice}>Purchase Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
Faq.propTypes = {
    handelPrice: PropTypes.func
};
export default memo(Faq)