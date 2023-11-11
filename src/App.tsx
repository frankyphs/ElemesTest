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



// function App() {
//   return (
//     <div style={{ padding: "0 120px" }}>
//       <div style={{ position: "relative", width: "100%", height: "653px" }}>
//         <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: "0.03" }}></div>
//         <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
//           <nav style={{ display: "flex", height: "96px", border: "1px solid red", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
//             <div>
//               <img src={elemesLogo} />
//             </div>
//             <div style={{ display: "flex", gap: "32px" }}>
//               <div style={{ fontSize: "14px", color: "#757575", fontWeight: "400" }}>Home</div>
//               <div style={{ fontSize: "14px", color: "#757575", fontWeight: "400" }}>About</div>
//               <div style={{ fontSize: "14px", color: "#757575", fontWeight: "400", position: "relative" }}>
//                 Promotions
//                 <div style={{ position: "absolute", top: "-15px", right: "-20px" }}>
//                   <div style={{ width: "36px", height: "19px", backgroundColor: "#E7462D", color: "white", fontSize: "8px", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                     HOT
//                   </div>
//                 </div>
//               </div>
//               <div style={{ fontSize: "14px", color: "#757575", fontWeight: "400" }}>Blogs</div>
//               <div style={{ fontSize: "14px", color: "#757575", fontWeight: "400" }}>Contact Us</div>
//             </div>
//             <div style={{ display: "flex", gap: "24px", justifyContent: "center", alignItems: "center" }}>
//               <div>Masuk</div>
//               <div style={{ backgroundColor: "#8BAC3E", borderRadius: "100px", padding: "10px 18px", color: "#fff" }}>Daftar Sekarang</div>
//             </div>
//           </nav>
//           <div style={{ border: "1px blue dashed" }}>
//             <div style={{ display: "flex" }}>
//               <div style={{ width: "482px", height: "auto", marginTop: "83px" }}>
//                 <div style={{ fontSize: "64px", color: "#8BAC3E", fontWeight: "500" }}>
//                   Good Food Us Good Mood
//                 </div>
//                 <div style={{ margin: "32px 0", fontSize: "18px", fontWeight: "400", color: "#757575", lineHeight: "1.5" }}>
//                   I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
//                 </div>
//                 <div style={{ display: "flex", gap: "16px" }}>
//                   <div style={{ backgroundColor: "#8BAC3E", borderRadius: "100px", padding: "10px 18px", color: "#fff", boxShadow: "0px 8px 32px 0px rgba(102, 107, 226, 0.35)" }}>Daftar Sekarang</div>
//                   <div style={{ backgroundColor: "#F2F2F2", borderRadius: "100px", padding: "10px 18px", color: "#333333" }}>About Us</div>
//                 </div>
//               </div>
//               <div style={{ position: "relative", marginLeft: "162px" }}>
//                 <img src={backgroundMain} style={{ position: "absolute", top: 0, left: 0, width: "518px", height: "518px" }} />
//                 <img src={mainFood} style={{ position: "relative", zIndex: 1, margin: "54px 57px" }} />
//                 <img src={mainFood2} style={{ position: "absolute", top: 0, left: 0, zIndex: 2, margin: "380px 359px 0 -100px" }} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div style={{ width: "100%", height: "573px", position: "relative" }}>
//         <div style={{ paddingTop: "64px" }}>
//           <div style={{ fontSize: "38px", fontWeight: "500", color: "#333", lineHeight: "50px" }}>Browser Our Category</div>
//           <div style={{ fontSize: "38px", fontWeight: "500", color: "#8BAC3E", lineHeight: "50px" }}>Receipt</div>
//         </div>
//         <div style={{ padding: "10px" }}>
//           <div style={{ display: "flex", marginTop: "32px", gap: "10px", border: "1px dashed blue", padding: "10px", maxWidth: "1243px", overflow: "hidden" }}>
//             <Card image={cupcake} title="Cupcake" items={22} background={background} backgroundColor={"#F0FEEB"} />
//             <Card image={pizza} title="Pizza" items={25} background={background} backgroundColor={"#E6F3F5"} />
//             <Card image={kebab} title="Kebab" items={12} background={background} backgroundColor={"#EAEEFA"} />
//             <Card image={salmon} title="Salmon" items={22} background={background} backgroundColor={"#F9EEF3"} />
//             <Card image={doughnout} title="Doughnout" items={11} background={background} backgroundColor={"#F3F7D9"} />
//           </div>
//         </div>
//         <div style={{ display: "flex", marginTop: "13px", gap: "13px", justifyContent: "end", position: "absolute", right: "0", bottom: "85px" }}>
//           <div>
//             <button style={{ width: "113px", height: "50px", borderRadius: "50px", backgroundColor: "#8BAC3E", borderStyle: "none" }}>
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
//                 <div style={{ width: "33px", height: "33px", backgroundColor: "white", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                   <img src={arrowLeft} alt="" />
//                 </div>'
//                 <div style={{ fontSize: "16px", fontWeight: "500", color: "#fff" }}>PREV</div>
//               </div>
//             </button>
//           </div>
//           <div>
//             <button style={{ width: "113px", height: "50px", borderRadius: "50px", backgroundColor: "#8BAC3E", borderStyle: "none" }}>
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
//                 <div style={{ fontSize: "16px", fontWeight: "500", color: "#fff" }}>NEXT</div>
//                 <div style={{ width: "33px", height: "33px", backgroundColor: "white", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
//                   <img src={arrowRight} alt="" />
//                 </div>'
//               </div>
//             </button>
//           </div>
//         </div>
//       </div >
//       <div style={{ width: "100%", height: "1039px" }}>
//         <div style={{ marginTop: "50px" }}>
//           <div style={{ fontSize: "38px", fontWeight: "500", color: "#333", lineHeight: "50px" }}>Browser Our Trending</div>
//           <div style={{ fontSize: "38px", fontWeight: "500", color: "#8BAC3E", lineHeight: "50px" }}>Receipt</div>
//         </div>
//         <div style={{ marginTop: "55px" }}>
//           <div style={{ display: "flex", gap: "20px" }}>
//             <CardMenu image={receipt1} title="Pizza Paperoni" category="Pizza" stars={4} background={background} backgroundColor={"#E6F3F5"} />
//             <CardMenu image={receipt2} title="Pizza Meat" category="Pizza" stars={3} background={background} backgroundColor={"#E6F3F5"} />
//             <CardMenu image={receipt3} title="Doner Kebab" category="Kebab" stars={5} background={background} backgroundColor={"#EAEEFA"} />
//             <CardMenu image={receipt4} title="Salmon Roll" category="Salmon" stars={4} background={background} backgroundColor={"#F9EEF3"} />
//           </div>
//           <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
//             <CardMenu image={receipt5} title="Cupcake Choco" category="Cupcake" stars={4} background={background} backgroundColor={"#F0FEEB"} />
//             <CardMenu image={receipt6} title="Doughnut Milk" category="Doughnut" stars={5} background={background} backgroundColor={"#F3F7D9"} />
//             <CardMenu image={receipt7} title="Doughnut Unicorn" category="Doughnut" stars={4} background={background} backgroundColor={"#F3F7D9"} />
//             <CardMenu image={receipt8} title="Kathi Kebab" category="Kebab" stars={4} background={background} backgroundColor={"#EAEEFA"} />
//           </div>
//           <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "68px" }}>
//             <div style={{ backgroundColor: "#8BAC3E", borderRadius: "100px", padding: "10px 18px", color: "#fff" }}>All Receipt</div>
//           </div>
//         </div>
//       </div>

//       <div style={{ height: "646px" }}>
//         <div style={{ display: "flex", marginTop: "191px", backgroundColor: "#F9FFF6;", border: "1px dashed red", height: "359px", padding: "79px 0 0 62px" }}>
//           <div style={{ gap: "16px" }}>
//             <img src={elemesLogo} alt="" />
//             <div style={{ fontSize: "14px", fontWeight: "400", marginTop: "16px", lineHeight: "1.5", width: "335px", color: "#757575" }}>
//               Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
//               Kecamatan Setiabudi, Kota Jakarta Selatan,
//               Daerah Khusus Ibukota Jakarta 12950
//             </div>
//             <FooterIcons />
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", width: "100%", marginLeft: "109px" }}>
//             <div style={{ display: "flex", gap: "19px", flexDirection: "column" }}>
//               <div style={{ fontSize: "18px", fontWeight: "500" }}>Categories</div>
//               <div style={{ marginTop: "33px", display: "flex", flexDirection: "column", gap: "19px" }}>
//                 <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Cupcake</div>
//                 <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Pizza</div>
//                 <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Kebab</div>
//                 <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Salmon</div>
//                 <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Doughnut</div>
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: "19px", flexDirection: "column" }}>
//               <div style={{ fontSize: "18px", fontWeight: "500" }}>About Us</div>
//               <div style={{ marginTop: "33px", display: "flex", flexDirection: "column", gap: "19px" }}>
//                 <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>About us</div>
//                 <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>FAQ</div>
//                 <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Report Problem</div>
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: "19px", flexDirection: "column" }}>
//               <div style={{ fontSize: "18px", fontWeight: "500" }}>Newsletter</div>
//               <div style={{ marginTop: "33px", display: "flex", flexDirection: "column", gap: "19px" }}>
//                 <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Get now free 50% discount for alll products on your first order</div>
//               </div>
//               <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
//                 <EmailIcon fillColor="#8BAC3E" />
//                 <div style={{ fontSize: "14px", fontWeight: "400" }}>elemesid@gmail.com</div>
//               </div>
//               <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
//                 <PhoneIcon fillColor="#8BAC3E" />
//                 <div style={{ fontSize: "14px", fontWeight: "400" }}> 0888 1111 2222 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//         <div style={{ textAlign: "center", fontSize: "12px", fontWeight: "400", color: "#757575" }}>
//           © 2021 Elemes id. All rights reserved
//         </div>
//       </div>
//     </div>

//   )
// }
// export default App


function App() {
  return (
    <div className="container__body">

      {/* 111111111111111111111111111111 */}

      <div className="container">
        <div className="background" style={{ backgroundImage: `url(${background})` }}></div>
        <div className="main-content">
          <nav className="nav">
            <div className="nav__logo">
              <img src={elemesLogo} alt="Logo" />
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
              <div className="nav__button">Masuk</div>
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


      {/* 111111111111111111111111111111 */}

      {/* 222222222222222222222222222222 */}

      <div className="category-container">
        <div className="category-header">
          <div className="category-header__title">Browser Our Category</div>
          <div className="category-header__subcategory-title">Receipt</div>
        </div>
        <div className="category-cards">
          <div className="category-cards__container">
            <Card image={cupcake} title="Cupcake" items={22} background={background} backgroundColor={"#F0FEEB"} />
            <Card image={pizza} title="Pizza" items={25} background={background} backgroundColor={"#E6F3F5"} />
            <Card image={kebab} title="Kebab" items={12} background={background} backgroundColor={"#EAEEFA"} />
            <Card image={salmon} title="Salmon" items={22} background={background} backgroundColor={"#F9EEF3"} />
            <Card image={doughnout} title="Doughnut" items={11} background={background} backgroundColor={"#F3F7D9"} />
          </div>
        </div>
        <div className="category-navigation">
          <div>
            <button className="category-navigation__button">
              <div className="category-navigation__button-content">
                <div className="category-navigation__button-icon">
                  <img src={arrowLeft} alt="" />
                </div>
                <div className="category-navigation__button-text">PREV</div>
              </div>
            </button>
          </div>
          <div>
            <button className="category-navigation__button">
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

      {/* 222222222222222222222222222222 */}


      {/* 333333333333333333333333333333333 */}

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


      {/* 333333333333333333333333333333333333 */}

      {/* 44444444444444444444444444444444444444 */}
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

  )
}
export default App