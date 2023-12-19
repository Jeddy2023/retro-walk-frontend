import React from 'react'
import '../styles/insta.css';
import { data } from './img';
import { Link } from 'react-router-dom';

function Insta() {
  return (
    <>
    <div className="container">
        <div className="head">
            <h1>Instagram Shop</h1>
            <div className="txt">
                <h6>Shop your favourite styles from Instagram.</h6>
                <h5>@dematizestore</h5>
            </div>
        </div>
        <div className="imgs">
            <ul>
               {
                data.map(imgData =>{
                    return(
                        <li>
                        <a href="#">
                            <img src={imgData.img} alt="" />
                        </a>
                        <div className={imgData.classN}>{imgData.sign}</div>
                    </li>
                    )
                })
               }
            </ul>
        </div>
    </div>
    </>
  )
}

export default Insta;