import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Quotes() {
  return (
    <section className="py-20">
      <div className="container">
        <Swiper
          modules={[Navigation]}
          loop="true"
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="mySwiper"
        >
          {/* Swiper Item */}
          <SwiperSlide>
            <div className="w-9/12 md:w-10/12 mx-auto z-0">
              <div className="text-white text-center">
                <p className="text-lg md:text-xl text-gray-200">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                  do eiusmod tempor incididunt ut labore et dolore Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua."
                </p>

                <h4 className="text-lg font-bold mt-8">Enterpreneur</h4>
                <p className="text-lg">Motivator</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Swiper Item */}
          <SwiperSlide>
            <div className="w-9/12 md:w-10/12 mx-auto z-0">
              <div className="text-white text-center">
                <p className="text-lg md:text-xl text-gray-200">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                  do eiusmod tempor incididunt ut labore et dolore Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua."
                </p>

                <h4 className="text-lg font-bold mt-8">Jeff Bissaka</h4>
                <p className="text-lg">Travelling</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Swiper Item */}
          <SwiperSlide>
            <div className="w-9/12 md:w-10/12 mx-auto z-0">
              <div className="text-white text-center">
                <p className="text-lg md:text-xl text-gray-200">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                  do eiusmod tempor incididunt ut labore et dolore Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua."
                </p>

                <h4 className="text-lg font-bold mt-8">John Doe</h4>
                <p className="text-lg">Motivator</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Swiper Item */}
          <div className="custom-nav">
            <button className="custom-prev custom-next absolute top-2/4 left-0 z-50">
              <FaLongArrowAltLeft
                className="text-4xl px-2 text-white hover:bg-[#f4e2d9] hover:text-red-600 cursor-pointer"
                style={{ borderRadius: "0px 20px 20px 20px" }}
              />
            </button>
            <button className="custom-next absolute top-2/4 right-0 z-50">
              <FaLongArrowAltRight
                className="text-4xl px-2 text-white hover:bg-[#f4e2d9] hover:text-red-600 cursor-pointer"
                style={{ borderRadius: "0px 20px 20px 20px" }}
              />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
