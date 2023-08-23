import React from 'react';
import  './home.css';
import slider1 from '../images/slider1.webp';
import slider2 from '../images/slider2.webp';
import slider3 from '../images/slider3.webp';

function Home() {
  return (  
    <>
        <div id="hero_sec">
            <div id="hero_con">
                <div id="hero_1">
                    <img src={slider1} alt="" />
                    <div className="hero_txt">
                        <h1>Essentials 
                            <span>
                            Starting at $9.99
                            </span>
                            
                        </h1>
                        <p>Oufie Boutique is Located at Port-Harcourt</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div id="hero_1">
                    <img src={slider2} alt="" />
                    <div className="hero_txt">
                        <h1>Today Only 
                            <span>
                            20% Off + Free Shipping
                            </span>
                            
                        </h1>
                        <p>Oufie Boutique is Located at Port-Harcourt</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div id="hero_1">
                    <img src={slider3} alt="" />
                    <div className="hero_txt">
                        <h1>Packs 
                            <span>
                            From $12.99
                            </span>
                            
                        </h1>
                        <p>Oufie Boutique is Located at Port-Harcourt</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  ) 
}

export default Home; 