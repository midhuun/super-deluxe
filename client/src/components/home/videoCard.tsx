import { useEffect, useState } from "react"
import ReactPlayer from "react-player/lazy";
const VideoCard = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsLoaded(true);
            }
          },
          { threshold: 0.5 }
        );
    
        const videoContainer = document.getElementById("video-container");
        if (videoContainer) observer.observe(videoContainer);
    
        return () => observer.disconnect();
      }, []);

  return (
    <div id="video-container" >
      {isLoaded ? (
        <div className="!w-full relative  px-2 md:!w-1/2 overflow-hidden">
        <ReactPlayer   muted={true}  preload="none" poster="placeholder-image.jpg"
         
         url="/ad2.mp4" progressInterval={1000} playing={true} loop={true}   playbackRate={0.75}
        />
        </div>
      ) : (
        <img src="placeholder-image.jpg" alt="Video placeholder" />
      )}
    </div>
  )
}

export default VideoCard;