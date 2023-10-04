import React from 'react';
import { trend, colors } from './trendArr';
import { Link } from 'react-router-dom';
import { EmblaCarousel } from './EmblaCarousel';
import { useEffect } from 'react';
import { useState } from 'react';
import './trend.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Trend({id}) {
    const [count, setcount] = useState(0);
   
     

  
    const increament = () =>{
               setcount(count + 1)
   
            }
  return (

   <>
          {
                    trend.map(tred =>{
                  
                        return(
                            <li key={tred.id} id={tred.id}>
                                <div className="img_con">
                                    <div className="img">
                                        <img className='change' src={tred.img1} alt="" />
                                    </div>
                                    <div className="icons">
                                        <ul className="top">
                                            <li data-aos="fade-up"><i class="fa-regular fa-heart"></i></li>
                                            <li data-aos="fade-up">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>


                                            </li >
                                            <li data-aos="fade-up">
                                                <span class="material-symbols-outlined">
                                                    visibility
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="btm">
                                            <form className="left">
                                                <button type="button">
                                                <i class="fa-solid fa-minus"></i>
                                                </button>
                                                <input type="text" value={count} min={'0'} name="" id="counter" />
                                                <button onClick={increament} type="button">
                                                <i class="fa-solid fa-plus"></i>
                                                </button>
                                            </form>
                                            <button className="rgt">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                                            Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="txt">
                                    <div className="star"></div>
                                    <p className="name">
                                        {tred.name}
                                    </p>
                                    <p className="price">
                                        <p>{tred.oldP}</p>
                                       <span className={tred.red}> {tred.price}</span>
                                    </p>
                                    <div className='circles'>
                                        {
                                            colors.map(color =>{
                                                return(
                                                    <span>
                                                       <div> <p className={color.coloring.color1}></p></div>
                                                        <div><p className={color.coloring.color2}></p></div>
                                                        <div><p className={color.coloring.color3}></p></div>
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </li>
                        )
                    })
                   }
   </>
  )
}

export default Trend