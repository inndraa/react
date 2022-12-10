import itemImage1 from "../images/item1.png";
import itemImage2 from "../images/item2.png";
import itemImage3 from "../images/item3.png";
import itemImage4 from "../images/item4.png";
import starsImage from "../images/star.svg";
const Products = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__inner">
                    <div className="products__top">
                        <div className="products__title">
                            Eng songi Mahsulotlar
                        </div>
                        <div className="products__link">
                            Barchasi
                        </div>
                    </div>
                    <div className="products__row">
                        <div className="products__item">
                            <div class="products__image">
                                <div className="products__item-image">
                                    <img src={itemImage1} alt="" />
                                </div>
                            </div>
                            <div class="products__info">
                                <div className="products__item-title">
                                    Hankook Kinergy ST H735 all <br /> Season Radial
                                </div>
                                <div className="products__item-bottom">
                                    <div className="products__item-bottom-rate">
                                        <img src={starsImage} alt="" />
                                    </div>
                                    <div className="products__item-bottom-price">
                                        $86.00
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="products__item">
                            <div class="products__image">
                                <div className="products__item-image">
                                    <img src={itemImage2} alt="" />
                                </div>
                            </div>

                            <div class="products__info">
                                <div className="products__item-title">
                                    Hankook Kinergy ST H735 all <br /> Season Radial
                                </div>
                                <div className="products__item-bottom">
                                    <div className="products__item-bottom-rate">
                                        <img src={starsImage} alt="" />
                                    </div>
                                    <div className="products__item-bottom-price">
                                        $86.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products__item">
                            <div class="products__image">
                                <div className="products__item-image">
                                    <img src={itemImage3} alt="" />
                                </div>
                            </div>

                            <div class="products__info">
                                <div className="products__item-title">
                                    Hankook Kinergy ST H735 all <br /> Season Radial
                                </div>
                                <div className="products__item-bottom">
                                    <div className="products__item-bottom-rate">
                                        <img src={starsImage} alt="" />
                                    </div>
                                    <div className="products__item-bottom-price">
                                        $86.00
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="products__item">
                            <div class="products__image">
                                <div className="products__item-image">
                                    <img src={itemImage4} alt="" />
                                </div>
                            </div>

                            <div class="products__info">
                                <div className="products__item-title">
                                    Hankook Kinergy ST H735 all <br /> Season Radial
                                </div>
                                <div className="products__item-bottom">
                                    <div className="products__item-bottom-rate">
                                        <img src={starsImage} alt="" />
                                    </div>
                                    <div className="products__item-bottom-price">
                                        $86.00
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

export default Products;