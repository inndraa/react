import benefitsImage from  "../images/detail4.png";
import benefitsImage2 from  "../images/detail5.png";
import benefitsImage3 from  "../images/detail6.png";

const Benefits = () => {
    return ( 
        <section className="benefits">
        <div className="container">
          <div className="benefits__inner">
            <div className="benefits__item">
              <div className="benefits__item-image">
                <img className="benefits__item-image-img" src={benefitsImage} alt="" />
              </div>
              <div className="benefits__item-info">
                <h6 className="benefits__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="benefits__item-text">
                  O‘lchamlar va brendlar <br /> bo‘ylab izlang.
                </p>
              </div>
            </div>
            <div className="benefits__item">
              <div className="benefits__item-image">
                <img className="benefits__item-image-img" src={benefitsImage2} alt="" />
              </div>
              <div className="benefits__item-info">
                <h6 className="benefits__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="benefits__item-text">
                  O‘lchamlar va brendlar <br /> bo‘ylab izlang.
                </p>
              </div>
            </div>
            <div className="benefits__item">
              <div className="benefits__item-image">
                <img className="benefits__item-image-img" src={benefitsImage3} alt="" />
              </div>
              <div className="benefits__item-info">
                <h6 className="benefits__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="benefits__item-text">
                  O‘lchamlar va brendlar <br /> bo‘ylab izlang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Benefits;