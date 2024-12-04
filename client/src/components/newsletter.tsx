import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";
import { Dot } from "pure-react-carousel";
import './newsletter/newsletter.css'
import 'pure-react-carousel/dist/react-carousel.es.css';
const Newsletter = () => {
    const arr =["https://i.ibb.co/qr0Sh67/Banner2.png","https://i.ibb.co/KVSCznG/Banner1.png","https://i.ibb.co/SVrmWgy/Banner3.png"];
  return (
    <div className="">
    <CarouselProvider isPlaying={true} interval={5000} className="relative w-full top-0 !h-[30vh] md:!h-[75vh]" isIntrinsicHeight={true} totalSlides={3} naturalSlideWidth={100} naturalSlideHeight={100} >
        <Slider   className="h-[20vh]  md:h-[80vh]">
        {arr.map((val,index)=>
        <Slide key={index} index={index}> 
        <img style={{objectFit:'contain'}} className="" src={val}/>
        </Slide>
    )}
        </Slider>
       
        <div className="flex mt-3 justify-center space-x-10 items-center w-full">
        <ButtonBack className=""><MdKeyboardArrowLeft className="text-gray-700" size={22} /></ButtonBack>
        <div className="flex justify-center space-x-4 md:space-x-9">
    {arr.map((_, index) => (
     <Dot   slide={index}
        key={index}
        className={`w-2 h-2 mx-1 rounded-full border-gray-500 border hover:bg-gray-500`}
      />
    ))}
  </div>
        <ButtonNext><MdKeyboardArrowRight className="text-gray-700" size={22} /></ButtonNext>
        </div>
    </CarouselProvider>
    </div>  
  )
}

export default Newsletter