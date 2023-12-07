import React from 'react';
import  './home.css';
import './trend.css'
import cate1_1 from '../images/cate1_btm1.webp';
import cate1_2 from '../images/cate1_btm2.webp';
import cate1_top from '../images/cate1_top.webp';
import cate2 from '../images/cate2.webp';
import { Link } from 'react-router-dom';
import { EmblaCarousel } from './EmblaCarousel';
import { useEffect } from 'react';
// import { useState } from 'react';
import Aos from 'aos';
import Trend from './Trend';
import 'aos/dist/aos.css';
import Collection from '../Collection';
import Tweet from '../testimony/Tweet';
import Insta from '../../instagram/Insta';


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Home() {
     useEffect(() => {
        Aos.init();
      }, [])
   
          
    
      
  return (  
    <>
        <div id="hero_sec">
            <EmblaCarousel/>
        </div>
        <div id="category">
            <div className="cate_1">
                <div className="top">
                    <img src={cate1_top} alt="" />
                    <button className="txt ">Dress</button>
                </div>
                <div className="btm">
                    <div className="rgt">
                    <button className="txt ">Accessories</button>
                        <img src={cate1_1} alt="" />
                    </div>
                    <div className="left">
                    <button className="txt ">Shoes</button>
                        <img src={cate1_2} alt="" />
                    </div>
                </div>
            </div>
            <div className="cate_2">
                <div className="txt ">
                    <p>NEW ARRIVALS</p>
                    <h1>
                        Blondes <br />
                        with minimalist
                    </h1>
                    <Link className='link'>Shop Collection</Link>
                </div>
                <img src={cate2} alt="" />
            </div>
        </div>
        <section id="trend">
            <div className="content">
                <div className="top">
                    <div className="left">
                        <h1>You are in 
                            <span className='htyz'> trending
                                <span class="material-symbols-outlined">
                                    south
                                </span>
                            </span>
                        </h1>
                    </div>
                    <div className="rgt">
                        <Link className='rgt_link'>Shop all product</Link>
                    </div>
                </div>
                <ul className="btm">
                    <Trend slides={SLIDES} options={OPTIONS} />       
                </ul>
            </div>
        </section>
        
            <Collection/>
            <Tweet slides={SLIDES} options={OPTIONS}/>
            <Insta/>
    </>
  ) 
}

export default Home; 