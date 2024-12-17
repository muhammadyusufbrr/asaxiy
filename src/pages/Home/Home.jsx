import Reusable from "../../components/Reusable/Reusable"
import smallOne from '../../assets/image/small-one.png'
import smallTwo from '../../assets/image/small-two.png'
import smallThree from '../../assets/image/small-three.png'
import undrawMobile from '../../assets/image/undrawMobile.png'
import Faq from "../../components/Faq/Faq"
import HeroSection from "../../components/HeroSection/HeroSection"
import PropTypes from "prop-types"
const Home = ({handelPrice}) => {
    return (
        <>
            <HeroSection handelPrice={handelPrice} />
            <Reusable is_bigComponent={true} img={undrawMobile} />
            <Reusable img={smallOne} />
            <Reusable img={smallTwo} />
            <Reusable is_button={true} img={smallThree} handelPrice={handelPrice} />
            <Faq handelPrice={handelPrice} />
        </>
    )
}
Home.propTypes = {
    handelPrice: PropTypes.func
};

export default Home