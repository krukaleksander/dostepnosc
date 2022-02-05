import React from "react";
import { useGlobalContext } from "../Context";

function Banner({ title, subtitle, img, imgClass, alt }) {
  const { openContactForm } = useGlobalContext();
  return (
    <div className="banner">
      <div className="text">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <button onClick={() => openContactForm()}>Darmowa konsultacja</button>
      </div>
      <div className={`image ${imgClass}`}>
        <img src={img} alt={alt} />
      </div>
    </div>
  );
}

export default Banner;
