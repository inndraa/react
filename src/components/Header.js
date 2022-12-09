import headerLogo from "../images/header-logo.svg";
import headerCart from "../images/cart.svg";
import headerLogin from "../images/login.svg";
import headerWishlist from "../images/wishlist.svg";


const Header = () => {

return (
<header className="header">
    <div className="container">
        <div className="header__inner">
            <div className="logo">
                <a href="#" className="logo__link">
                    <img src={headerLogo} alt="logo" />
                </a>
            </div>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#" className="menu__item-link">Mahsulotlar</a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__item-link">Chegirmalar</a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__item-link">Yetkazib berish</a>
                    </li>
                </ul>
            </nav>
            <div className="burger-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="sidemenu">
                <ul className="sidemenu__list">
                    <li className="sidemenu__item phone">
                        <a href="tel:496170961709" className="sidemenu__phone">+998 (99) 121 23 08</a>
                    </li>
                    <li className="sidemenu__item">
                        <button className="sidemenu__btn login">
                            <img className="sidemenu__btn-image" src={headerLogin} alt="login" />
                        </button>
                    </li>
                    <li className="sidemenu__item">
                        <button className="sidemenu__btn wishlist">
                            <img className="sidemenu__btn-image" src={headerWishlist} alt="wishlist" />
                        </button>
                    </li>
                    <li className="sidemenu__item">
                        <button className="sidemenu__btn cart">
                            <img className="sidemenu__btn-image" src={headerCart} alt="cart" />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>
);
}

export default Header;