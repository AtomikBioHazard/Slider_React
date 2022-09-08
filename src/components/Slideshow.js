import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
  BtN,
  Controls,
  MainContainer,
  SlideshowContainer,
  SlideDescription
} from "./Styles";
import { ReactComponent as Backwards } from "../assets/back.svg";
import { ReactComponent as Forward } from "../assets/fwd.svg";

const Btns = styled.button`
  ${BtN}
`;
const SlideDesc = styled.div`
  ${SlideDescription}
`;

const Slideshow = ({
  children,
  ctrls = false,
  autoplay = false,
  speed = "500",
  interval = "5000"
}) => {
  const slideshow = useRef(null);
  const slideshowInterval = useRef(null);

  /* It's a function that is going to be called whenever the user clicks on the forward button. */
  const nextSlide = useCallback(() => {
    // Check if slideshow has any elements
    if (slideshow.current.children.length > 0) {
      // Obtain the first element
      const firstElement = slideshow.current.children[0];

      // Stablish transition for slideshow
      slideshow.current.style.transition = `${speed}ms ease-out all`;

      const slildeSize = slideshow.current.children[0].offsetWidth;

      // Move the slideshow
      slideshow.current.style.transform = `translateX(-${slildeSize}px)`;

      const transition = () => {
        // Reset slideshow position
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        // Take the first element and send it to the end of the array
        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener("transitionend", transition);
      };

      // For when the animation ends
      slideshow.current.addEventListener("transitionend", transition);
    }
  }, [speed]);

  /**
   * We're going to grab the last element of the slideshow, insert it before the first element, and
   * then translate the slideshow to the left by the width of the first element
   */
  const prevSlide = () => {
    if (slideshow.current.children.length > 0) {
      // Obtain slideshow's last element
      const idx = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[idx];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = "none";
      const slildeSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slildeSize}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${speed}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  /* Setting the interval for the slideshow to change slides. */
  useEffect(() => {
    if (autoplay) {
      slideshowInterval.current = setInterval(() => {
        nextSlide();
      }, interval);

      // Delete the intervals
      slideshow.current.addEventListener("mouseenter", () => {
        clearInterval(slideshowInterval.current);
      });

      // Set the interval again whenever the mouse leaves the slideshow
      slideshow.current.addEventListener("mouseleave", () => {
        slideshowInterval.current = setInterval(() => {
          nextSlide();
        }, interval);
      });
    }
  }, [autoplay, interval, nextSlide]);

  return (
    <MainContainer>
      <SlideshowContainer ref={slideshow}>{children}</SlideshowContainer>
      {ctrls && (
        <Controls>
          <Btns onClick={prevSlide}>
            <Backwards />
          </Btns>
          <Btns fwd onClick={nextSlide}>
            <Forward />
          </Btns>
        </Controls>
      )}
    </MainContainer>
  );
};

export { Slideshow, SlideDesc };
