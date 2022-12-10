import sidebarImage1 from "../images/sidebar1.png";
import sidebarImage2 from "../images/sidebar2.png";
import sidebarImage3 from "../images/sidebar3.png";
import sidebarImage4 from "../images/sidebar4.png";
import starsImage from "../images/star.svg";
import shopImage from "../images/shop1.png";
const Shop = () => {
    return (
        <section className="shop">
            <div className="container">
                <div className="shop__inner">
                    <div className="shop__sidebar">
                        <div className="shop__sidebar-list">
                            <div className="shop__sidebar-item">
                                <div className="shop__sidebar-item-inner">
                                    <img className="shop__sidebar-img" src={sidebarImage1} alt="" />
                                    <p className="shop__sidebar-title">Shinalar</p>
                                </div>

                            </div>
                            <div className="shop__sidebar-item">
                                <div className="shop__sidebar-item-inner">
                                    <img className="shop__sidebar-img" src={sidebarImage2} alt="" />
                                    <p className="shop__sidebar-title">Rullar</p>
                                </div>

                            </div>
                            <div className="shop__sidebar-item">
                                <div className="shop__sidebar-item-inner">
                                    <img className="shop__sidebar-img" src={sidebarImage3} alt="" />
                                    <p className="shop__sidebar-title">O‘rindiqlar</p>
                                </div>

                            </div>
                            <div className="shop__sidebar-item">
                                <div className="shop__sidebar-item-inner">
                                    <img className="shop__sidebar-img" src={sidebarImage4} alt="" />
                                    <p className="shop__sidebar-title">Akkumlyatorlar</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shop__main">
                        <div className="shop__row">
                            <div className="shop__item">
                                <div class="shop__image">
                                    <div className="shop__item-image">
                                        <img src={shopImage} alt="" />
                                    </div>
                                </div>
                                <div class="shop__info">
                                    <div className="shop__item-title">
                                        Hankook Kinergy ST H735 all <br /> Season Radial
                                    </div>
                                    <div className="shop__item-bottom">
                                        <div className="shop__item-bottom-rate">
                                            <img src={starsImage} alt="" />
                                        </div>
                                        <div className="shop__item-bottom-price">
                                            $86.00
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="shop__item">
                                <div class="shop__image">
                                    <div className="shop__item-image">
                                        <img src={shopImage} alt="" />
                                    </div>
                                </div>

                                <div class="shop__info">
                                    <div className="shop__item-title">
                                        Hankook Kinergy ST H735 all <br /> Season Radial
                                    </div>
                                    <div className="shop__item-bottom">
                                        <div className="shop__item-bottom-rate">
                                            <img src={starsImage} alt="" />
                                        </div>
                                        <div className="shop__item-bottom-price">
                                            $86.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop__item">
                                <div class="shop__image">
                                    <div className="shop__item-image">
                                        <img src={shopImage} alt="" />
                                    </div>
                                </div>

                                <div class="shop__info">
                                    <div className="shop__item-title">
                                        Hankook Kinergy ST H735 all <br /> Season Radial
                                    </div>
                                    <div className="shop__item-bottom">
                                        <div className="shop__item-bottom-rate">
                                            <img src={starsImage} alt="" />
                                        </div>
                                        <div className="shop__item-bottom-price">
                                            $86.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shop__row">
                            <div className="shop__item">
                                <div class="shop__image">
                                    <div className="shop__item-image">
                                        <img src={shopImage} alt="" />
                                    </div>
                                </div>
                                <div class="shop__info">
                                    <div className="shop__item-title">
                                        Hankook Kinergy ST H735 all <br /> Season Radial
                                    </div>
                                    <div className="shop__item-bottom">
                                        <div className="shop__item-bottom-rate">
                                            <img src={starsImage} alt="" />
                                        </div>
                                        <div className="shop__item-bottom-price">
                                            $86.00
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="shop__item">
                                <div class="shop__image">
                                    <div className="shop__item-image">
                                        <img src={shopImage} alt="" />
                                    </div>
                                </div>

                                <div class="shop__info">
                                    <div className="shop__item-title">
                                        Hankook Kinergy ST H735 all <br /> Season Radial
                                    </div>
                                    <div className="shop__item-bottom">
                                        <div className="shop__item-bottom-rate">
                                            <img src={starsImage} alt="" />
                                        </div>
                                        <div className="shop__item-bottom-price">
                                            $86.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop__item">
                                <div class="shop__image">
                                    <div className="shop__item-image">
                                        <img src={shopImage} alt="" />
                                    </div>
                                </div>

                                <div class="shop__info">
                                    <div className="shop__item-title">
                                        Hankook Kinergy ST H735 all <br /> Season Radial
                                    </div>
                                    <div className="shop__item-bottom">
                                        <div className="shop__item-bottom-rate">
                                            <img src={starsImage} alt="" />
                                        </div>
                                        <div className="shop__item-bottom-price">
                                            $86.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Shop;