import React from "react";
import { Slideshow, SlideDesc } from "./components/Slideshow";
import { Slide, Title } from "./components/Styles";

const App = () => {
  const img1 = "https://placeimg.com/1000/250/animals",
    img2 = "https://placeimg.com/1000/250/arch",
    img3 = "https://placeimg.com/1000/250/nature",
    img4 = "https://placeimg.com/1000/250/people";

  return (
    <main>
      <Title>Some heading text</Title>
      <Slideshow ctrls={true}>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img1} alt="" />
          </a>
          <SlideDesc>
            <p>Image description</p>
          </SlideDesc>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img2} alt="" />
          </a>
          <SlideDesc>
            <p>Image description</p>
          </SlideDesc>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img3} alt="" />
          </a>
          <SlideDesc>
            <p>Image description</p>
          </SlideDesc>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img4} alt="" />
          </a>
          <SlideDesc>
            <p>Image description</p>
          </SlideDesc>
        </Slide>
      </Slideshow>

      <Title>Some heading text for second slider</Title>
      <Slideshow
        // ctrls={true} /* Uncomment for controls */
        autoplay={true}
        speed="3000"
        interval="5000"
      >
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img1} alt="" />
          </a>
          {/* change color for description background */}
          <SlideDesc descBgColor="navy">
            <p>Image description</p>
          </SlideDesc>
        </Slide>
        <Slide>
          <a href="https://www.falconmaters.com">
            <img src={img2} alt="" />
          </a>
          <SlideDesc>
            <p>Image description</p>
          </SlideDesc>
        </Slide>
      </Slideshow>
    </main>
  );
};

export default App;
