import detailsImage from "../images/detail.png";
import detailsImage3 from "../images/detail3.png";
import detailsImage2 from "../images/detail2.png";

const Details = () => {
    return ( 
        <section className="details">
        <div className="container">
          <div className="details__inner">
            <div className="details__item">
              <div className="details__item-image">
                <img src={detailsImage} alt="" />
              </div>
              <div className="details__item-info">
                <h6 className="details__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="details__item-text">
                  O‘lchamlar va brendlar <br /> bo‘ylab izlang.
                </p>
              </div>
            </div>
            <div className="details__item">
              <div className="details__item-image">
                <img src={detailsImage2} alt="" />
              </div>
              <div className="details__item-info">
                <h6 className="details__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="details__item-text">
                  O‘lchamlar va brendlar <br /> bo‘ylab izlang.
                </p>
              </div>
            </div>
            <div className="details__item">
              <div className="details__item-image">
                <img src={detailsImage3} alt="" />
              </div>
              <div className="details__item-info">
                <h6 className="details__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="details__item-text">
                  O‘lchamlar va brendlar <br /> bo‘ylab izlang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Details;