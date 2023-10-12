import React from 'react'
import col_1 from '../components/images/col_1.webp';
import col_2 from '../components/images/col_2.webp';
import col_3 from '../components/images/col_3.webp';
import col_4 from '../components/images/col_4.webp';
import '../styles/collection.css'
export default function Collection() {
  return (
    <>

            <div className="collection_con">
                <div className="img_con" id='null'>
                    <span>SHOP THE LOOK - SS 19</span>
                    <button className='btn1'>+</button>
                    <img className='col_img' src={col_1} alt="" />
                    
                </div>
                <div className="img_con" id='null'>
                    <span>SHOP THE LOOK - SS 20</span>
                    <button className='btn2'>+</button>
                    <img className='col_img' src={col_2} alt="" />
                </div>
                <div className="img_con" id='constant'>
                    <span>SHOP THE LOOK - SS 21</span>
                     <button className='btn3'>+</button>
                    <img className='col_img' src={col_3} alt="" />
                </div>
                <div className="img_con" id='null'>
                    <span>SHOP THE LOOK - SS 22</span>
                    <button className='btn4'>+</button>
                    <img className='col_img' src={col_4} alt=""/>
                </div>
            </div>
    </>
  )
}
