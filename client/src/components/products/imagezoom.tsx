import { useState } from "react";

const ImageZoom = ({ src }:{src:any}) => {
  const [magnifierStyle, setMagnifierStyle] = useState<any>({ display: "none" });

  const handleMouseMove = (e) => {
    const { top, left, width, height } = e.target.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    setMagnifierStyle({
      display: "block",
      left: `${x - 50}px`, // Adjust size and position
      top: `${y - 50}px`,
      backgroundPosition: `-${x * 2}px -${y * 2}px`, // Adjust zoom level
    });
  };

  const handleMouseLeave = () => {
    setMagnifierStyle({ display: "none" });
  };

  return (
    <div
      className="relative w-80 h-80 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt="Zoomable" className="w-full h-full object-cover" />
      <div
        className="absolute w-24 h-24 border-2 border-black rounded-full pointer-events-none bg-no-repeat bg-cover"
        style={{
          ...magnifierStyle,
          backgroundImage: `url(${src})`,
          backgroundSize: "200%", // Adjust for zoom level
        }}
      ></div>
    </div>
  );
};

export default ImageZoom;
