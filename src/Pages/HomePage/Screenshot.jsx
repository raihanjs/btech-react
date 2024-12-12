import { OrangeBtn } from "../../Components/Buttons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Screenshot() {
  return (
    <section className="pt-20">
      <div className="container">
        <div className="md:flex flex-wrap justify-end z-0">
          <div className="md:w-6/12">
            <img
              src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/g993.png"
              alt=""
            />
          </div>
          <div className="md:w-6/12 mt-8">
            <div className="text-white ml-2 lg:ml-10">
              <h2 className="text-4xl font-medium" data-aos="fade-up">
                The Apps Screenshots
              </h2>
              <p className="text-xl mt-2 mb-5">Completed & Powerfull Apps</p>
              <p className="text-lg mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <OrangeBtn txt="More On Apps" link="" />
            </div>
          </div>
          {/* Screenshot Slider Start */}
          <div className="mt-10 md:-mt-20 lg:-mt-32 md:w-9/12 ml-auto bg-[#f4e2d9] rounded-lg p-5">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop="true"
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              modules={[Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <img
                    src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/image1049.png"
                    className="mx-auto"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/image1082.png"
                    className="mx-auto"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/image1071.png"
                    className="mx-auto"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/image1104.png"
                    className="mx-auto"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/image1060.png"
                    className="mx-auto"
                    alt=""
                  />
                </div>
              </SwiperSlide>
              {/* Swiper Navigation Buttons */}
              <div className="custom-nav">
                <button className="custom-prev custom-next absolute top-2/4 left-0 z-50">
                  <IoIosArrowBack className="text-3xl text-orange-600" />
                </button>
                <button className="custom-next absolute top-2/4 right-0 z-50">
                  <IoIosArrowForward className="text-3xl text-orange-600" />
                </button>
              </div>
            </Swiper>
          </div>
          {/* Screenshot Slider End */}
        </div>
      </div>
    </section>
  );
}
