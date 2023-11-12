import './App.css'
import elemesLogo from './assets/elemes.svg';
import mainFood from './assets/foodMain.svg'
import backgroundMain from "./assets/backgroundMain.svg"
import background from "./assets/background.svg"
import mainFood2 from "./assets/foodMain2.svg"
import cupcake from "./assets/cupcake.svg"
import pizza from "./assets/pizza.svg"
import kebab from "./assets/kebab.svg"
import salmon from "./assets/salmon.svg"
import doughnout from "./assets/doughnut.svg"
import receipt1 from "./assets/receipt1.svg"
import receipt2 from "./assets/receipt2.svg"
import receipt3 from "./assets/receipt3.svg"
import receipt4 from "./assets/receipt4.svg"
import receipt5 from "./assets/receipt5.svg"
import receipt6 from "./assets/receipt6.svg"
import receipt7 from "./assets/receipt7.svg"
import receipt8 from "./assets/receipt8.svg"
import arrowLeft from "./assets/arrowLeft.svg"
import arrowRight from "./assets/arrowRight.svg"

import FooterIcons, { EmailIcon, PhoneIcon } from "./components/FooterIcons"
import Card from './components/Card';
import CardMenu from './components/CardReceipt';

import { useRef, RefObject } from "react"


function App() {
  const categoryCardsRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  // scroll-function
  const scrollContainer = (direction: string) => {
    const container = categoryCardsRef.current;
    const scrollAmount = 250;

    if (container) {
      if (direction === 'next') {
        container.scrollLeft += scrollAmount;
      } else if (direction === 'prev') {
        container.scrollLeft -= scrollAmount;
      }
    }
  };


  return (
    <>
      <div className="container__body">
        <div className="container">
          <div className="background" style={{ backgroundImage: `url(${background})` }}></div>
          <div className="main-content">
            <nav className="nav">
              <div className="nav__logo">
                <img className="nav__logo" src={elemesLogo} alt="Logo" />
              </div>
              <div className="nav__items">
                <div className="nav__item">Home</div>
                <div className="nav__item">About</div>
                <div className="nav__item nav__item--promotions">
                  Promotions
                  <div className="promotion-badge">
                    <div>HOT</div>
                  </div>
                </div>
                <div className="nav__item">Blogs</div>
                <div className="nav__item">Contact Us</div>
              </div>
              <div className="nav__buttons">
                <div className="nav__button nav-button--white">Masuk</div>
                <div className="nav__button cta-button nav-button--green">Daftar Sekarang</div>
              </div>
            </nav>
            <div className="main-text">
              <div className="main-text__description">
                <div className="main-text__title">Good Food Us Good Mood</div>
                <div className="main-text__paragraph">
                  I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
                </div>
                <div className="cta-buttons">
                  <div className="cta-button cta-button--green">Daftar Sekarang</div>
                  <div className="cta-button cta-button--gray">About Us</div>
                </div>
              </div>
              <div className="main-image">
                <img className="main-image__background" src={backgroundMain} alt="Background" />
                <img className="main-image__food" src={mainFood} alt="Food" />
                <img className="main-image__food2" src={mainFood2} alt="Food 2" />
              </div>
            </div>
          </div>
        </div>

        <div className="category-container">
          <div className="category-header">
            <div className="category-header__title">Browser Our Category</div>
            <div className="category-header__subcategory-title">Receipt</div>
          </div>
          <div className="category-cards">
            <div className="category-cards__container" ref={categoryCardsRef}>
              <Card image={cupcake} title="Cupcake" items={22} background={background} backgroundColor={"#F0FEEB"} />
              <Card image={pizza} title="Pizza" items={25} background={background} backgroundColor={"#E6F3F5"} />
              <Card image={kebab} title="Kebab" items={12} background={background} backgroundColor={"#EAEEFA"} />
              <Card image={salmon} title="Salmon" items={22} background={background} backgroundColor={"#F9EEF3"} />
              <Card image={doughnout} title="Doughnut" items={11} background={background} backgroundColor={"#F3F7D9"} />
              <Card image={salmon} title="Tuna" items={10} background={background} backgroundColor={"#F9EEF3"} />
              <Card image={salmon} title="Mackareel" items={5} background={background} backgroundColor={"#F9EEF3"} />
              <Card image={cupcake} title="Bread" items={22} background={background} backgroundColor={"#F0FEEB"} />
            </div>
          </div>
          <div className="category-navigation">
            <div>
              <button className="category-navigation__button" onClick={() => scrollContainer('prev')}>
                <div className="category-navigation__button-content">
                  <div className="category-navigation__button-icon">
                    <img src={arrowLeft} alt="" />
                  </div>
                  <div className="category-navigation__button-text">PREV</div>
                </div>
              </button>
            </div>
            <div>
              <button className="category-navigation__button" onClick={() => scrollContainer('next')}>
                <div className="category-navigation__button-content">
                  <div className="category-navigation__button-text">NEXT</div>
                  <div className="category-navigation__button-icon">
                    <img src={arrowRight} alt="" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>


        <div className="trending-container">
          <div className="trending-header">
            <div className="trending-header__title">Browser Our Trending</div>
            <div className="trending-header__subcategory-title">Receipt</div>
          </div>
          <div className="menu-cards">
            <div className="menu-cards__row">
              <CardMenu image={receipt1} title="Pizza Paperoni" category="Pizza" stars={4} background={background} backgroundColor={"#E6F3F5"} />
              <CardMenu image={receipt2} title="Pizza Meat" category="Pizza" stars={3} background={background} backgroundColor={"#E6F3F5"} />
              <CardMenu image={receipt3} title="Doner Kebab" category="Kebab" stars={5} background={background} backgroundColor={"#EAEEFA"} />
              <CardMenu image={receipt4} title="Salmon Roll" category="Salmon" stars={4} background={background} backgroundColor={"#F9EEF3"} />
            </div>
            <div className="menu-cards__row">
              <CardMenu image={receipt5} title="Cupcake Choco" category="Cupcake" stars={4} background={background} backgroundColor={"#F0FEEB"} />
              <CardMenu image={receipt6} title="Doughnut Milk" category="Doughnut" stars={5} background={background} backgroundColor={"#F3F7D9"} />
              <CardMenu image={receipt7} title="Doughnut Unicorn" category="Doughnut" stars={4} background={background} backgroundColor={"#F3F7D9"} />
              <CardMenu image={receipt8} title="Kathi Kebab" category="Kebab" stars={4} background={background} backgroundColor={"#EAEEFA"} />
            </div>
            <div className="menu-cards__all-receipt">
              <div className="menu-cards__all-receipt-button">All Receipt</div>
            </div>
          </div>
        </div>


        <div className="footer">
          <div className="footer__content">
            <div className="footer__left-section">
              <img className="footer__logo" src={elemesLogo} alt="" />
              <div className="footer__address">
                <div className="footer__address-text">
                  Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                  Kecamatan Setiabudi, Kota Jakarta Selatan,
                  Daerah Khusus Ibukota Jakarta 12950
                </div>
                <FooterIcons />
              </div>
            </div>
            <div className="footer__right-section">
              <div className="footer__category-section">
                <div className="footer__section-title">Categories</div>
                <div className="footer__category-list">
                  <div className="footer__category-item">Cupcake</div>
                  <div className="footer__category-item">Pizza</div>
                  <div className="footer__category-item">Kebab</div>
                  <div className="footer__category-item">Salmon</div>
                  <div className="footer__category-item">Doughnut</div>
                </div>
              </div>
              <div className="footer__about-section">
                <div className="footer__section-title">About Us</div>
                <div className="footer__about-list">
                  <div className="footer__about-item">About us</div>
                  <div className="footer__about-item">FAQ</div>
                  <div className="footer__about-item">Report Problem</div>
                </div>
              </div>
              <div className="footer__newsletter-section">
                <div className="footer__section-title">Newsletter</div>
                <div className="footer__newsletter-content">
                  <div className="footer__newsletter-text">
                    Get now free 50% discount for all products on your first order
                  </div>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <input placeholder='Your email address' type='text' className='footer__input'></input>
                    <div className='footer__input-button'>SEND</div>
                  </div>
                  <div className="footer__contact-info">
                    <div className="footer__contact-item">
                      <EmailIcon fillColor="#8BAC3E" />
                      <div className="footer__contact-text">elemesid@gmail.com</div>
                    </div>
                    <div className="footer__contact-item">
                      <PhoneIcon fillColor="#8BAC3E" />
                      <div className="footer__contact-text">0888 1111 2222</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            © 2021 Elemes id. All rights reserved
          </div>
        </div>


      </div>
      <div className="bottom-navigation-container">
        <nav className="bottom-navigation">
          <div className="bottom-navigation__item">
            <span className="material-symbols-outlined">
              reorder
            </span>
            <div className="bottom-navigation__text">Home</div>
          </div>
          <div className="bottom-navigation__item">
            <span className="material-symbols-outlined">
              reorder
            </span>
            <div className="bottom-navigation__text">Promotions</div>
          </div>
          <div className="bottom-navigation__item">
            <span className="material-symbols-outlined">
              reorder
            </span>
            <div className="bottom-navigation__text">Others</div>
          </div>
        </nav>
      </div>
    </>

  )
}
export default App