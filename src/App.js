import "./styles/main.min.css";




function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="logo">
              <a href="#" className="logo__link">
                <img src="./images/header-logo.svg" alt="logo" />
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
            <nav className="sidemenu">
              <ul className="sidemenu__list">
                <li className="sidemenu__item phone">
                  <a href="tel:496170961709" className="sidemenu__phone">+998 (99) 121 23 08</a>
                </li>
                <li className="sidemenu__item">
                  <button className="sidemenu__btn login">
                    <img src="./images/login.svg" alt="login" />
                  </button>
                </li>
                <li className="sidemenu__item">
                  <button className="sidemenu__btn wishlist">
                    <img src="./images/wishlist.svg" alt="wishlist" />
                  </button>
                </li>
                <li className="sidemenu__item">
                  <button className="sidemenu__btn cart">
                    <img src="./images/cart.svg" alt="cart" />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section className="main">
        <div className="container">
          <div className="main__inner">
            <div className="main__info">
              <h1 className="main__info-title">
                O‘zbekistonda eng yangi <br/> mashina shinalari, 30% gacha <br/> chegirma.
                </h1>
                  <p className="main__info-text">
                    O‘zbekiston bo‘ylab yetkazib berish bepul.
                  </p>
                  <label className="main__input-block">
                    <input type="search" className="main__info-input" placeholder="Mahsulotlar bo‘ylab izlash" />
                      <button className="main__info-btn">
                        <img src="./images/search.svg" alt="search" />
                      </button>
                  </label>
                </div>
                <div className="main__image">
                  <img src="./images/main.png" alt="main-image-tires" />
                </div>
            </div>
          </div>
      </section>

      <section className="details">
        <div className="container">
          <div className="details__inner">
            <div className="details__item">
              <div className="details__item-image">
                <img src="./images/detail.png" alt="" />
              </div>
              <div className="details__item-info">
                <h6 className="details__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="details__item-text">
                  O‘lchamlar va brendlar <br/> bo‘ylab izlang.
                </p>
              </div>
            </div>
            <div className="details__item">
              <div className="details__item-image">
                <img src="./images/detail2.png" alt="" />
              </div>
              <div className="details__item-info">
                <h6 className="details__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="details__item-text">
                  O‘lchamlar va brendlar <br/> bo‘ylab izlang.
                </p>
              </div>
            </div>
            <div className="details__item">
              <div className="details__item-image">
                <img src="./images/detail3.png" alt="" />
              </div>
              <div className="details__item-info">
                <h6 className="details__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="details__item-text">
                  O‘lchamlar va brendlar <br/> bo‘ylab izlang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="container">
          <div className="benefits__inner">
            <div className="benefits__item">
              <div className="benefits__item-image">
                <img className="benefits__item-image-img" src="./images/detail4.png" alt=""/>
              </div>
              <div className="benefits__item-info">
                <h6 className="benefits__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="benefits__item-text">
                  O‘lchamlar va brendlar <br/> bo‘ylab izlang.
                </p>
              </div>
            </div>
            <div className="benefits__item">
              <div className="benefits__item-image">
                <img className="benefits__item-image-img" src="./images/detail5.png" alt=""/>
              </div>
              <div className="benefits__item-info">
                <h6 className="benefits__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="benefits__item-text">
                  O‘lchamlar va brendlar <br/> bo‘ylab izlang.
                </p>
              </div>
            </div>
            <div className="benefits__item">
              <div className="benefits__item-image">
                <img className="benefits__item-image-img" src="./images/detail6.png" alt="" />
              </div>
              <div className="benefits__item-info">
                <h6 className="benefits__item-title">
                  Avtomobile o‘rindiqlari
                </h6>
                <p className="benefits__item-text">
                  O‘lchamlar va brendlar <br/> bo‘ylab izlang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="build">
        <div className="container">
          <div className="build__inner">
            <div className="build__info">
              <div className="build__info-title">
                Avtomabil ehtiyot qismlari, <br/> eng ishonchli va sifatli.
              </div>
              <a href="#" className="build__info-link">Barchasi</a>
            </div>
            <div className="build__image">
              <img src="./images/build.png" alt=""/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
