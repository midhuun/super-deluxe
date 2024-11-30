import { FaArrowRight } from "react-icons/fa";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
const VideoCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 p-5">
    {/* Video Player for Large Screens */}
    <div className="hidden lg:block flex-shrink-0">
        <ReactPlayer
            muted={true}
            height="400px"
            width="650px"
            poster="/ad.png"
            url="/ad2.mp4"
            progressInterval={1000}
            playing={true}
            loop={true}
            playbackRate={0.75}
        />
    </div>

    {/* Video Player for Small Screens */}
    <div className="lg:hidden flex justify-center flex-shrink-0">
        <ReactPlayer
            muted={true}
            width="100%"
            height='100%'
            poster="/ad.png"
            url="/ad2.mp4"
            progressInterval={1000}
            playing={true}
            loop={true}
            playbackRate={0.75}
        />
    </div>

    {/* Shop Section */}
    <div className="shop hidden lg:block  flex-grow mt-10 text-gray-700">
        <h1 className="text-lg md:text-2xl">Finest Fabric</h1>
        <p className="text-xl text-gray-400 pt-5">
            Fabric sourced exclusively from India's finest mills. Rest assured every thread promises unmatched quality and lasting sophistication.
        </p>
        <button
            onClick={() => window.location.reload()}
            className="mt-5 px-4 py-3 border border-gray-700 flex items-center gap-3 transition-colors duration-300 hover:bg-gray-200"
        >
            Shop Now <span className="inline"><FaArrowRight size={16} /></span>
        </button>
    </div>
</div>
  )
}

export default VideoCard;