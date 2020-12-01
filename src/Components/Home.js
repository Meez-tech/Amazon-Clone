import React from "react";
import "../Styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/39/home/GW_banners/XCM_Manual_1295736_AE_GW_Tall_hero_2x_OHL_Homefest_3000x1200_En_8d3225ac-7b07-4015-9fa5-6c483f3724ef._CB414621487_.jpg"
        alt="hero image"
      />
      {/**Proudc id, title, price, rating,image */}
      {/**Proudc id, title, price, rating,image */}
      {/**Proudc id, title, price, rating,image */}
      <div className="home__row">
        {" "}
        <Product
          id="12321341"
          title="The Lean Startup: How Contact Innovation Creates Succesful Business"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />
        <Product
          id="12321342"
          title="Fire TV Stick 4K con Alexa Voice Remote, reproductor multimedia"
          price={27.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL480_SR480,480_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321343"
          title="Fossil Grant Watch for Men"
          price={65.77}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81Jt7Y9KHUL._AC_SX679_.jpg"
        />
        <Product
          id="12321344"
          title="OnePlus 8 Pro ​- 8GB RAM + 128GB - Onyx Black"
          price={499}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/31UmvSJh7EL._AC_.jpg"
        />
        <Product
          id="12321345"
          title="Under Armour Women's UA Streaker 2.0 Short Sleeve T-Shirt"
          price={20.55}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91AaTely3cL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321346"
          title="Hisense 50B7100UW 50 Inch 4K VIDAA 3.0 Smart TV"
          price={289.5}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61UyExYjt1L._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
