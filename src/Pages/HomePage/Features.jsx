import { OrangeBtn } from "../../Components/OrangeBtn";

export default function Features() {
  return (
    <section className="py-40">
      <div className="container">
        <div className="md:flex gap-5">
          <div className="md:w-6/12">
            <div className="text-white text-right">
              <h2 className="text-4xl font-medium">
                Get The Best <br />
                Amazing Features
              </h2>
              <p className="text-xl mt-1 mb-5">Completed & Powerfull Apps</p>
              <p className="text-lg mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <OrangeBtn txt="More Features" link="" />
            </div>
          </div>
          <div className="md:w-6/12 mt-8 md:mt-0">
            <div className="flex justify-center gap-3 flex-wrap">
              {/* Feature Item */}
              <div className="p-5 bg-[#f4e2d9] max-w-[210px] rounded-md text-center">
                <img
                  src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/g9338.png"
                  className="mx-auto mb-4"
                  alt=""
                />
                <h5 className="text-center text-lg font-medium text-gray-500">
                  Easy to use
                </h5>
                <p className="text-lg text-gray-500/75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              {/* Feature Item */}
              <div className="p-5 bg-[#f4e2d9] max-w-[210px] rounded-md text-center">
                <img
                  src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/g3024.png"
                  className="mx-auto mb-4"
                  alt=""
                />
                <h5 className="text-center text-lg font-medium text-gray-500">
                  Easy to use
                </h5>
                <p className="text-lg text-gray-500/75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              {/* Feature Item */}
              <div className="p-5 bg-[#f4e2d9] max-w-[210px] rounded-md text-center">
                <img
                  src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/g9342.png"
                  className="mx-auto mb-4"
                  alt=""
                />
                <h5 className="text-center text-lg font-medium text-gray-500">
                  Easy to use
                </h5>
                <p className="text-lg text-gray-500/75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              {/* Feature Item */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
