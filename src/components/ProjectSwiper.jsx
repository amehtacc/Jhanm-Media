// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Video_1, Video_2, Video_3, Video_4, Video_5, Video_6, Video_7, Video_8, Video_9 } from "../assets/images";
import { Video_1_cover, Video_2_cover, Video_3_cover, Video_4_cover, Video_5_cover, Video_6_cover, Video_7_cover, Video_8_cover, Video_9_cover } from "../assets/images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

function ProjectSwiper() {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index

  const videos_detail = [
    { videoLink: Video_1, posterLink: Video_1_cover },
    { videoLink: Video_2, posterLink: Video_2_cover },
    { videoLink: Video_3, posterLink: Video_3_cover },
    { videoLink: Video_4, posterLink: Video_4_cover },
    { videoLink: Video_5, posterLink: Video_5_cover },
    { videoLink: Video_6, posterLink: Video_6_cover },
    { videoLink: Video_7, posterLink: Video_7_cover },
    { videoLink: Video_8, posterLink: Video_8_cover },
    { videoLink: Video_9, posterLink: Video_9_cover },
  ];

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 5000, // Rotate every 5 seconds
          disableOnInteraction: true, // Stop autoplay after interaction
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active slide index
      >
        {videos_detail.map((video, index) => (
          <SwiperSlide key={index}>
            <video
              src={video.videoLink}
              poster={video.posterLink}
              controls={activeIndex === index} // Show controls only on active slide
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default  ProjectSwiper;