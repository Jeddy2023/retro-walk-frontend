import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { hero } from './hero'
// import AOS from 'aos'
import './hero.css'
import  './home.css'
// import 'aos/dist/aos.css';
import Autoplay from 'embla-carousel-autoplay'



export const EmblaCarousel = () => {
  const autoplayOptions = {
    delay: 8000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  }
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla"  ref={emblaRef}>
      <div className="embla__container" id='hero_con'>
        {
            hero.map(hero1 =>{
                return(
                    <div className="embla__slide" id='hero_1'>
                        <img src={hero1.Img} alt="" />
                        <div className="hero_txt">
                            <h1>
                                {hero1.h1_1}
                                <br />
                                {hero1.h1_2}
                            </h1>
                            <p>
                                {hero1.p} 
                            </p>
                            <button className='btnx34'>
                                {hero1.btn}
                            </button>
                        </div>
                        <div className="arrow">
                          <button  onClick={scrollPrev}><i class="fa-solid fa-angle-left"></i></button>
                          <button onClick={scrollNext}><i class="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>
                )
            })
        }
       
      </div>
    </div>
  )
}
