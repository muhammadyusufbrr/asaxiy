import { IoMdClose } from 'react-icons/io'
import SiteLogo from '../../../assets/image/logo.svg'
import { navList } from '../../../static/data'
import './HeaderMenu.scss'
import { memo } from 'react'
import PropTypes from 'prop-types'
const HeaderMenu = ({ menu = false, setMenu }) => {
    return (
        <>
            <div className={`header-menu__overlay ${menu ? 'header-menu__overlay-active' : ''}`} onClick={() => setMenu(false)}></div>
            <div className={`header-menu ${menu ? 'header-menu__active' : ''}`}>
                <div className="header-menu__top">
                    <img src={SiteLogo} alt="site logo" />
                    <button className='header-menu__close' onClick={() => setMenu(false)}>
                        <IoMdClose />
                    </button>
                </div>
                <ul className='header-menu__nav-list'>
                    {
                        navList?.map((item) => (
                            <li key={item?.id}>
                                <a href={item?.url} className='header-menu__nav-link'>{item?.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <button className='button primary header-menu__btn'>Purchase now</button>
            </div>
        </>
    )
}
HeaderMenu.propTypes = {
    menu: PropTypes.bool,
    setMenu: PropTypes.func,
};

export default memo(HeaderMenu)                                                                           