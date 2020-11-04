import React from 'react'
import './Home.css';
import Product from './Product'
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* Product id, title, price, rating, image */}
      {/* Product */}
      <div className="home__row">
        <Product id="123213411"
        title="The Lean Startup: How Constant Inovation Create Radically Succesful Bussineses Paqperwork" 
        price={11.93} 
        rating={5}
        img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />

        <Product id="123213421"
        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-bearer , Dough Hook and Whisk, 5 Litre Glass Bowl" 
        price={239.93} 
        rating={4}
        img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product id="123213422"
        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
        price={199.433} 
        rating={3}
        img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />

        <Product id="123213424"
        title="Amazon Echo (3rd generation) | Smart speaker wityh Alexa, Charcol Fabric" 
        price={98.93} 
        rating={4}
        img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product id="123213425"
        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
        price={11.93} 
        rating={5}
        img="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>
      <div className="home__row">
        <Product id="123213426"
        title="Samsung LC49RG90SSUXEN 49' Curved Led Gaming Monitor - Super Ultra wide Duel WQhd 5120 X 1440" 
        price={1001.93} 
        rating={5}
        img="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX335_.jpg"
        />
      </div>    
    </div>
  );
}
export default Home;
