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
import starFull from "./assets/starFull.svg"
import starEmpty from "./assets/starEmpty.svg"
import email from "./assets/email.svg"
import phone from "./assets/phone.svg"
import instagram from "./assets/instagram.svg"
import { useState } from 'react';


const Card = ({ image, title, items, background, backgroundColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid orange",
        width: "230px",
        height: isHovered ? "195px" : "175px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
        transition: "height 0.3s ease",
        backgroundColor: backgroundColor
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: "0.15",
            zIndex: 1,
          }}
        ></div>
      )}
      <img src={image} alt="" style={{ width: "47px", height: "52px", zIndex: 1 }} />
      <div style={{ marginTop: "20px", zIndex: 1 }}>{title}</div>
      <div style={{ zIndex: 1 }}>{items} items</div>
    </div>
  );
};

const CardMenu = ({ image, title, category, stars, background, backgroundColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        border: "1px dashed blue",
        width: "287px",
        height: "287px",
        borderRadius: "17px",
        padding: "40px 25px",
        backgroundColor: backgroundColor,
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease", // Menambahkan efek transisi untuk perubahan background
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: "0.15",
            zIndex: 1,
          }}
        ></div>
      )}
      <img src={image} alt="" style={{ borderRadius: "6px", height: "140px", width: "auto" }} />
      <div style={{ fontSize: "26px", fontWeight: "500", margin: "20px 0" }}>{title}</div>
      <div style={{ fontSize: "18px", fontWeight: "500", color: "#8BAC3E", marginTop: "20px" }}>{category}</div>
      <div style={{ display: "flex", gap: "3px", margin: "20px 0" }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <img key={index} src={index < stars ? starFull : starEmpty} alt="" style={{ width: "20px", height: "auto" }} />
        ))}
      </div>
    </div>
  );
};


function App() {

  return (
    <>
      <div style={{ position: "relative", width: "100%", height: "653px" }}>
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: "0.03" }}></div>
        <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
          <nav style={{ display: "flex", height: "96px", border: "1px solid red", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
            <div>
              <img src={elemesLogo} />
            </div>
            <div style={{ display: "flex", gap: "32px" }}>
              <div>Home</div>
              <div>About</div>
              <div>Promotions</div>
              <div>Blogs</div>
              <div>Contact Us</div>
            </div>
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", alignItems: "center" }}>
              <div>Masuk</div>
              <div style={{ backgroundColor: "#8BAC3E", borderRadius: "100px", padding: "10px 18px", color: "#fff" }}>Daftar Sekarang</div>
            </div>
          </nav>
          <div style={{ border: "1px blue dashed" }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "482px", height: "auto", marginTop: "83px" }}>
                <div style={{ fontSize: "64px", color: "#8BAC3E", fontWeight: "500" }}>
                  Good Food Us Good Mood
                </div>
                <div style={{ margin: "32px 0", fontSize: "18px", fontWeight: "400", color: "#757575", lineHeight: "1.5" }}>
                  I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ backgroundColor: "#8BAC3E", borderRadius: "100px", padding: "10px 18px", color: "#fff" }}>Daftar Sekarang</div>
                  <div style={{ backgroundColor: "#F2F2F2", borderRadius: "100px", padding: "10px 18px", color: "#333333" }}>About Us</div>
                </div>
              </div>
              <div style={{ position: "relative", marginLeft: "162px" }}>
                <img src={backgroundMain} style={{ position: "absolute", top: 0, left: 0, width: "518px", height: "518px" }} />
                <img src={mainFood} style={{ position: "relative", zIndex: 1, margin: "54px 57px" }} />
                <img src={mainFood2} style={{ position: "absolute", top: 0, left: 0, zIndex: 2, margin: "380px 359px 0 -100px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: "573px" }}>
        <div style={{ marginTop: "50px" }}>
          <div style={{ fontSize: "38px", fontWeight: "500", color: "#333", lineHeight: "50px" }}>Browser Our Category</div>
          <div style={{ fontSize: "38px", fontWeight: "500", color: "#8BAC3E", lineHeight: "50px" }}>Receipt</div>
        </div>
        {/* <div style={{ display: "flex", marginTop: "32px", gap: "10px" }}>
          <div style={{ display: " flex", flexDirection: "column", border: "1px solid orange", width: "230px", height: "175px", justifyContent: "center", alignItems: "center", borderRadius: "8px", backgroundColor: "#F0FEEB" }}>
            <img src={cupcake} alt="" style={{ width: "47px", height: "52px" }} />

            <div style={{ marginTop: "20px" }}>Cupcake</div>
            <div>22 items</div>

          </div>
          <div style={{ display: " flex", flexDirection: "column", border: "1px solid orange", width: "230px", height: "175px", justifyContent: "center", alignItems: "center", borderRadius: "8px", backgroundColor: "#F0FEEB" }}>
            <img src={pizza} alt="" style={{ width: "47px", height: "52px" }} />

            <div style={{ marginTop: "20px" }}>Pizza</div>
            <div>22 items</div>

          </div>
          <div style={{ display: " flex", flexDirection: "column", border: "1px solid orange", width: "230px", height: "175px", justifyContent: "center", alignItems: "center", borderRadius: "8px", backgroundColor: "#F0FEEB" }}>
            <img src={kebab} alt="" style={{ width: "47px", height: "52px" }} />

            <div style={{ marginTop: "20px" }}>Kebab</div>
            <div>22 items</div>

          </div>
          <div style={{ display: " flex", flexDirection: "column", border: "1px solid orange", width: "230px", height: "175px", justifyContent: "center", alignItems: "center", borderRadius: "8px", backgroundColor: "#F0FEEB" }}>
            <img src={salmon} alt="" style={{ width: "47px", height: "52px" }} />

            <div style={{ marginTop: "20px" }}>Salmon</div>
            <div>22 items</div>

          </div >
          <div style={{ display: " flex", flexDirection: "column", border: "1px solid orange", width: "230px", height: "175px", justifyContent: "center", alignItems: "center", borderRadius: "8px", backgroundColor: "#F0FEEB" }}>
            <img src={doughnout} alt="" style={{ width: "47px", height: "52px" }} />

            <div style={{ marginTop: "20px" }}>Doughnout</div>
            <div>22 items</div>
          </div>
        </div > */}
        <div style={{ display: "flex", marginTop: "32px", gap: "10px" }}>
          <Card image={cupcake} title="Cupcake" items={22} background={background} backgroundColor={"#F0FEEB"} />
          <Card image={pizza} title="Pizza" items={22} background={background} backgroundColor={"#E6F3F5"} />
          <Card image={kebab} title="Kebab" items={22} background={background} backgroundColor={"#EAEEFA"} />
          <Card image={salmon} title="Salmon" items={22} background={background} backgroundColor={"#F9EEF3"} />
          <Card image={doughnout} title="Doughnout" items={22} background={background} backgroundColor={"#F3F7D9"} />
        </div>
      </div >
      <div style={{ width: "100%", height: "1039px" }}>
        <div style={{ marginTop: "50px" }}>
          <div style={{ fontSize: "38px", fontWeight: "500", color: "#333", lineHeight: "50px" }}>Browser Our Trending</div>
          <div style={{ fontSize: "38px", fontWeight: "500", color: "#8BAC3E", lineHeight: "50px" }}>Receipt</div>
        </div>
        <div style={{ marginTop: "55px" }}>
          <div style={{ display: "flex", gap: "20px" }}>
            <CardMenu image={receipt1} title="Pizza Paperoni" category="Pizza" stars={4} background={background} backgroundColor={"#F0FEEB"} />
            <CardMenu image={receipt2} title="Pizza Meat" category="Pizza" stars={4} background={background} backgroundColor={"#F0FEEB"} />
            <CardMenu image={receipt1} title="Doner Kebab" category="Kebab" stars={4} background={background} backgroundColor={"#F0FEEB"} />
            <CardMenu image={receipt2} title="Salmon Roll" category="Salmon" stars={4} background={background} backgroundColor={"#F0FEEB"} />
          </div>
          <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
            <CardMenu image={receipt1} title="Cupcake Choco" category="Cupcake" stars={4} background={background} backgroundColor={"#F0FEEB"} />
            <CardMenu image={receipt2} title="Doughnut Milk" category="Doughnut" stars={4} background={background} backgroundColor={"#F0FEEB"} />
            <CardMenu image={receipt1} title="Doughnut Unicorn" category="Doughnut" stars={4} background={background} backgroundColor={"#F0FEEB"} />
            <CardMenu image={receipt2} title="Kathi Kebab" category="Kebab" stars={4} background={background} backgroundColor={"#F0FEEB"} />
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "68px" }}>
            <div style={{ backgroundColor: "#8BAC3E", borderRadius: "100px", padding: "10px 18px", color: "#fff" }}>All Receipt</div>
          </div>
        </div>
      </div>

      <div style={{ height: "646px" }}>
        <div style={{ display: "flex", marginTop: "191px", backgroundColor: "#F9FFF6;", border: "1px dashed red", height: "359px", padding: "79px 0 0 62px" }}>
          <div style={{ gap: "16px" }}>
            <img src={elemesLogo} alt="" />
            <div style={{ fontSize: "14px", fontWeight: "400", marginTop: "16px", lineHeight: "1.5", width: "335px", color: "#757575" }}>
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
              Kecamatan Setiabudi, Kota Jakarta Selatan,
              Daerah Khusus Ibukota Jakarta 12950
            </div>
            <div style={{ display: "flex", marginTop: "33px", gap: "8px" }}>
              <img src={email} alt="" style={{ backgroundColor: "#8BAC3E", padding: "10px", borderRadius: "50%" }} />
              <img src={phone} alt="" style={{ backgroundColor: "#fff", padding: "10px" }} />
              <img src={instagram} alt="" style={{ backgroundColor: "#fff", padding: "10px" }} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", width: "100%", marginLeft: "109px" }}>
            <div style={{ display: "flex", gap: "19px", flexDirection: "column" }}>
              <div style={{ fontSize: "18px", fontWeight: "500" }}>Categories</div>
              <div style={{ marginTop: "33px", display: "flex", flexDirection: "column", gap: "19px" }}>
                <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Cupcake</div>
                <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Pizza</div>
                <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Kebab</div>
                <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Salmon</div>
                <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Dougnut</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "19px", flexDirection: "column" }}>
              <div style={{ fontSize: "18px", fontWeight: "500" }}>About Us</div>
              <div style={{ marginTop: "33px", display: "flex", flexDirection: "column", gap: "19px" }}>
                <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>About us</div>
                <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>FAQ</div>
                <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Report Problem</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "19px", flexDirection: "column" }}>
              <div style={{ fontSize: "18px", fontWeight: "500" }}>Newsletter</div>
              <div style={{ marginTop: "33px", display: "flex", flexDirection: "column", gap: "19px" }}>
                <div style={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Get now free 50% discount for alll products on your first order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default App
