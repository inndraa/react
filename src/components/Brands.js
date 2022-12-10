import brandsImage1 from "../images/brandsImage1.png";
import brandsImage2 from "../images/brandsImage2.png";
import brandsImage3 from "../images/brandsImage3.png";
import brandsImage4 from "../images/brandsImage4.png";
import brandsImage5 from "../images/brandsImage5.png";
import brandsImage6 from "../images/brandsImage6.png";
import brandsImage7 from "../images/brandsImage7.png";
import brandsImage8 from "../images/brandsImage8.png";

const Brands = () => {
    return ( 
        <section className="brands">
            <div className="container">
                <div className="brands__inner">
                    <h1 className="brands__title">
                        Brendlar
                    </h1>
                    <div className="brands__row">
                        <div className="brands__item">
                            <img src={brandsImage1} alt=""/>
                        </div>

                        <div className="brands__item">
                            <img src={brandsImage2} alt=""/>
                        </div>

                        <div className="brands__item">
                            <img src={brandsImage3} alt=""/>
                        </div>

                        <div className="brands__item">
                            <img src={brandsImage4} alt=""/>
                        </div>
                    </div>
                    <div className="brands__row">
                        <div className="brands__item">
                            <img src={brandsImage5} alt=""/>
                        </div>

                        <div className="brands__item">
                            <img src={brandsImage6} alt=""/>
                        </div>

                        <div className="brands__item">
                            <img src={brandsImage7} alt=""/>
                        </div>

                        <div className="brands__item">
                            <img src={brandsImage8} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Brands;