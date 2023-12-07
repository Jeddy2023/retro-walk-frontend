import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { flushSync } from 'react-dom'
import tweetsByIndex from './tweetIndex';
import './tweet.css';



const TWEEN_FACTOR = 4.2

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const Tweet = (props) => {


  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [tweenValues, setTweenValues] = useState([])

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
      return numberWithinRange(tweenValue, 0, 1)
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return

    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="tweet_con">
              <div className="head">
								From The People
							</div>
              {/* <div className="btn">
             <button onClick={scrollPrev}><i class="fa-solid fa-angle-left"></i></button>
             <button onClick={scrollNext}><i class="fa-solid fa-angle-right"></i></button>
           </div> */}
      <div className="tweet_viewport" ref={emblaRef}>
      
        <div className="tweet__container">
           
          {slides.map((index) => (
            
            <div
              className="tweets"
              key={index}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] })
              }}
            >
               <div className="btn">
             <button onClick={scrollPrev}><i class="fa-solid fa-angle-left"></i></button>
             <button onClick={scrollNext}><i class="fa-solid fa-angle-right"></i></button>
           </div>
              <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div className="msg">
                <h3>{tweetsByIndex(index).text}</h3>
                <p>{tweetsByIndex(index).pText}</p>
              </div>
             <div className="img"> 
              <img
                className="tweet_img"
                src={tweetsByIndex(index).img}
                alt="Your alt text"
              />
              <p className="name">{tweetsByIndex(index).name}</p>
             </div>
            
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Tweet;
