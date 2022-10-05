import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

import "../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Warm restaurant, enthusiastic and professional team. Fast service and
          excellent product quality. We came at 7 p.m. without a reservation and
          we shouldn't have come later, the restaurant was already almost full!
          The welcome was very pleasant and the owner quickly put us at ease.
          The evening was perfect.
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className="rounded" />
          <h6>John Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Super restaurant fast and friendly service the burgers and desserts
          are excellent everything is homemade... nothing to complain about
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className="rounded" />
          <h6>Mitchell Blake</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Not the first time we come Never disappointed. The burgers are
          excellent both from a taste point of view and ecological considering
          the foods which are all perfect. The servers are on top, the boss also
          everything is perfect in one word. (Special mention for the ketchup)
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className="rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
