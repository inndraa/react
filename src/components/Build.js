import buildImage from "../images/build.png";

const Build = () => {
    return ( 
        <section className="build">
        <div className="container">
          <div className="build__inner">
            <div className="build__info">
              <div className="build__info-title">
                Avtomabil ehtiyot qismlari, <br /> eng ishonchli va sifatli.
              </div>
              <a href="#" className="build__info-link">Barchasi</a>
            </div>
            <div className="build__image">
              <img src={buildImage} alt="" />
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Build;