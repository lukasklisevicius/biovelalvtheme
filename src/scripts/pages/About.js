import HeroSlider, { Overlay, Slide } from "hero-slider";
import ReactPlayer from "react-player";
// import Footer from "../components/Footer";
import '../../styles/about.scss'
import { motion } from "framer-motion";

export default function About(props) {
if(!props.content.showvideo && props.slides.length > 1){
    return (<motion.div   initial={{opacity:0}}
      animate={{opacity:1,transition:{duration:0.5,delay:0.1}}}
      exit={{opacity:0,transition:{duration:0.5,delay:-0.3}}}>

        <HeroSlider
        className="desktop"
          height={"800px"}
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
          }}
        >
        {props.slides.map((slide,idx)=>{
          
          if(slide.aboutSlides.aboutSlide != null)
            return(
                <Slide key={idx}
                background={{
                  backgroundImageSrc: slide.aboutSlides.aboutSlide.mediaItemUrl
                }}
              >
                <Overlay>
                  <h1>{slide.aboutSlides.text}</h1>
                  <a className="overlay-btn" href={slide.aboutSlides.buttonUrl}>{slide.aboutSlides.buttonText}</a>
                </Overlay>
              </Slide>
            )
        })}
    
        </HeroSlider>
        <HeroSlider
        className="mobile"
          height={"800px"}
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
          }}
        >
        {props.slides.map((slide,idx)=>{
          
          if(slide.aboutSlides.mobileImg != null)
            return(
                <Slide key={idx}
                background={{
                  backgroundImageSrc: slide.aboutSlides.mobileImg.mediaItemUrl
                }}
              >
                <Overlay>
                  <h1>{slide.aboutSlides.text}</h1>
                  <a className="overlay-btn" href={slide.aboutSlides.buttonUrl}>{slide.aboutSlides.buttonText}</a>
                </Overlay>
              </Slide>
            )
        })}
    
        </HeroSlider>
        <div className="about with-img about-prooducts">
<div className="max">
            <img src={props.content.logo.mediaItemUrl}></img>
            <p>{props.content.content}</p>
        </div>
        </div>
    
            </motion.div>
      );
}

if(props.content.showvideo === true){
return(
  <motion.div   initial={{opacity:0}}
      animate={{opacity:1,transition:{duration:0.5,delay:0.1}}}
      exit={{opacity:0,transition:{duration:0.5,delay:-0.3}}}>
    <div className="video-background">
    <ReactPlayer
  url={props.content.video}
  config={{ file: { attributes: { playsInline: true, }, }, }}
  playsinline
  playing
  loop
  muted
  width="100%"
  height="100%"
/></div>
<div className="about with-img about-prooducts">
<div className="max">
            <img src={props.content.logo.mediaItemUrl}></img>
            <p>{props.content.content}</p>
        </div>
        </div>
    </motion.div>
)
}
if(props.slides.length === 1 && props.slides[0].aboutSlides.aboutSlide != null &&  props.slides[0].aboutSlides.mobileImg != null){
  return(
    <motion.div   initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:0.5,delay:0.1}}}
        exit={{opacity:0,transition:{duration:0.5,delay:-0.3}}}>
      <div className="single-banner desktop" style={{backgroundImage: `url(${props.slides[0].aboutSlides.aboutSlide.mediaItemUrl})`}}  >
        <div className="max">
        <div className="overlay">
        </div>
      <h1>{props.slides[0].aboutSlides.text}</h1>
                  <a className="overlay-btn" href={props.slides[0].aboutSlides.buttonUrl}>{props.slides[0].aboutSlides.buttonText}</a>
                  </div> 

</div>
<div className="single-banner mobile" style={{backgroundImage: `url(${props.slides[0].aboutSlides.mobileImg.mediaItemUrl})`}}  >
        <div className="max">
        <div className="overlay">
        </div>
      <h1>{props.slides[0].aboutSlides.text}</h1>
                  <a className="overlay-btn" href={props.slides[0].aboutSlides.buttonUrl}>{props.slides[0].aboutSlides.buttonText}</a>
                  </div> 

</div>
  <div className="about with-img about-prooducts">
    <div className="max">
              <img src={props.content.logo.mediaItemUrl}></img>
              <p>{props.content.content}</p>
          </div>
          </div>
      </motion.div>
  )
  }
}