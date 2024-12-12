import { BlackBtn, OrangeBtn } from "../../Components/Buttons";

import { FaGooglePlay, FaAppStore } from "react-icons/fa";

export default function DownloadApps() {
  return (
    <>
      <section className="pt-20 bg-[#f4e2d9] rounded-br-[5vw]">
        <div className="container">
          <div className="md:flex gap-12">
            <div className="md:w-6/12">
              <div className="text-black">
                <h2 className="text-4xl font-medium" data-aos="fade-up">
                  You Are Interested? <br />
                  Download Apps Now
                </h2>
                <p className="text-xl mt-1 mb-5">Get Experience</p>
                <p className="text-lg mb-5 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis
                </p>
                <div className="flex flex-col md:flex-row md:items-center items-start gap-5">
                  <OrangeBtn txt="Play Store" link="" icon={<FaGooglePlay />} />
                  <BlackBtn txt="App Store" link="" icon={<FaAppStore />} />
                </div>
              </div>
            </div>
            <div className="md:w-6/12 mt-8 md:mt-0">
              <img
                src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/rect1209-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
