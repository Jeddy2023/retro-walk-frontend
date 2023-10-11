import React, { useState } from 'react';
import { trend } from '../Home/trendArr';

function Products({ filteredProducts }) {

    const [isHovered, setISHovered] = useState(null);
    const handleMouseEnter = (index) => {
        setISHovered(index);
    }
    const handleMouseLeave = () => {
        setISHovered(null);
    }
    return <>
        {
            filteredProducts.map((curElem) => (
                <li key={curElem.id} className='product-li'>
                    <div className="product-li-box">
                        <div className="product-li-box-img">
                            <img src={curElem.id === isHovered ? curElem.img1 : curElem.img2} onMouseEnter={() => handleMouseEnter(curElem.id)} onMouseLeave={handleMouseLeave} alt={`image ${curElem.id}`} />
                            <div className="brand-tag" style={{ backgroundColor: curElem.bC }}>{curElem.brand}</div>
                            <div className="add-icons">
                                <div className="add-icon ai-wishlist"></div>
                                <div className="add-icon ai-view"></div>
                            </div>
                            <div className="ih-icons">
                                <div className="ih-icons-btn">
                                    <form className="ih-icons-btn-left">
                                        <button type="button">
                                            <i class="fa-solid fa-minus"></i>
                                        </button>
                                        <input type="text" min={'0'} name="" id="counter" />
                                        <button type="button">
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </form>
                                    <button className="ih-icons-btn-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="snpc-con">
                            <div className="snpc-con-stars"></div>
                            <div className="snpc-con-name"></div>
                            <div className="snpc-con-price">
                                <p>{curElem.oldP}</p>
                                <span className={curElem.red}> {curElem.price}</span>
                            </div>
                            <div className="snpc-con-colors"></div>
                        </div>
                    </div>
                </li>
            ))
        }
    </>
}

export default Products