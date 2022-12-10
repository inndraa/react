import mainSearch from "../images/search.svg";
import mainImage from "../images/main.png";
const Main = () => {
    return ( 
        <section className="main">
        <div className="container">
          <div className="main__inner">
            <div className="main__info">
              <h1 className="main__info-title">
                O‘zbekistonda eng yangi mashina shinalari, 30% gacha chegirma.
              </h1>
              <p className="main__info-text">
                O‘zbekiston bo‘ylab yetkazib berish bepul.
              </p>
              <label className="main__input-block">
                <input type="search" className="main__info-input" placeholder="Mahsulotlar bo‘ylab izlash" />
                <button className="main__info-btn">
                  <img src={mainSearch} alt="search" />
                </button>
              </label>
            </div>
            <div className="main__image">
              <img src={mainImage} width="520px" alt="main-image-tires" />
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Main;