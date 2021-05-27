import image1 from "../images/mormonTemple.jpeg";
import image2 from "../images/firestone.jpg";
import image3 from "../images/PBCBank.jpg";
import { useState, useEffect } from "react";

function HomePage() {
  const [current, setCurrent] = useState(0);
  let images = [image1, image2, image3];

  const switchImage = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
    return current;
  };

  useEffect(() => {
    const interval = setInterval(switchImage, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="HomePage">
      <img
        key={current}
        className="fade-in-image"
        src={images[current]}
        alt=""
      />
    </div>
  );
}

export default HomePage;
