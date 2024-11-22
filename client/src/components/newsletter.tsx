import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";
import { Dot } from "pure-react-carousel";
import './newsletter/newsletter.css'
import 'pure-react-carousel/dist/react-carousel.es.css';
const Newsletter = () => {
    const arr =["https://images.unsplash.com/photo-1578021127722-1f1ff95b429e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1578021127722-1f1ff95b429e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1578021127722-1f1ff95b429e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1578021127722-1f1ff95b429e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];
  return (
    <div className="">
    <CarouselProvider isPlaying={true} interval={5000} className="relative w-full top-0 !h-[80vh] " isIntrinsicHeight={true} totalSlides={4} naturalSlideWidth={100} naturalSlideHeight={100} >
        <Slider  className="h-[82vh]">
        {arr.map((val,index)=>
        <Slide index={index}> 
        <img className="object-cover" src={val}/>
        </Slide>
    )}
        </Slider>
       
        <div className="flex mt-3 justify-center space-x-10 items-center w-full">
        <ButtonBack className=""><MdKeyboardArrowLeft className="text-gray-700" size={22} /></ButtonBack>
        <div className="flex justify-center space-x-9">
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