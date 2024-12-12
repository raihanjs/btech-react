import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

export default function BrandSlider() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="px-10 py-24 bg-[#f4e2d9] rounded-lg">
          <Swiper
            slidesPerView={5}
            loop="true"
            autoplay={{
              delay: 2500,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex justify-center">
                <img
                  src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/clients4.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <img
                  src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/clients5.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <img
                  src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/clients6.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <img
                  src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/clients7.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <img
                  src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/clients1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <img
                  src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/clients2.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center">
                <img
                  src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/clients3.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
