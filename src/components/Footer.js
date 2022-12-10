import footerLogo from "../images/footer-logo.svg";
import telegramIcon from "../images/telegram.svg";
import instagramIcon from "../images/instagram.svg";
import facebookIcon from "../images/facebook.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__logo">
                        <div className="footer__logo-img">
                            <img src={footerLogo} alt="" />
                        </div>
                        <a className="footer__logo-tel" href="tel:998991212308">+998 (99) 121 23 08</a>
                    </div>
                    <div className="footer__list">
                        <div className="footer__list-title">
                            Ma'lumotlar
                        </div>
                        <div className="footer__list-item">
                            Tovar yetkazib berish
                        </div>
                        <div className="footer__list-item">
                            Tovarni qaytarish
                        </div>
                        <div className="footer__list-item">
                            Biz haqimizda
                        </div>
                    </div>
                    <div className="footer__list">
                        <div className="footer__list-title">
                            Biz bilan aloqa
                        </div>
                        <div className="footer__list-item">
                            +998 99 121 23 08
                        </div>
                        <div className="footer__list-item">
                            info@Car.uz
                        </div>
                        <div className="footer__list-item">
                            Qoraqalpog’iston, Beruniy
                        </div>
                    </div>
                    <div className="footer__end">
                        <div className="footer__end-title">
                            Ijtimoiy tarmoqlarimiz
                        </div>
                        <div className="footer__end-list">
                            <div className="footer__end-list-item">
                                <img src={telegramIcon} alt="" />
                            </div>
                            <div className="footer__end-list-item">
                                <img src={instagramIcon} alt="" />
                            </div>
                            <div className="footer__end-list-item">
                                <img src={facebookIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;