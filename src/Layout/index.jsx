import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import PropTypes from 'prop-types'

const Layout = ({ handelPrice }) => {
    return (
        <>
            <Header handelPrice={handelPrice} />
            <main>
                <Outlet />
            </main>
            <Footer handelPrice={handelPrice} />
        </>
    )
}
Layout.propTypes = {
    handelPrice: PropTypes.func
};
export default Layout