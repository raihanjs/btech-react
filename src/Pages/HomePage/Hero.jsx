import { OrangeBtn } from "../../Components/OrangeBtn";

export default function Hero() {
  return (
    <section className="mt-10">
      <div className="container">
        <div className="md:flex justify-between">
          <div className="md:w-7/12">
            <div className="-ml-96 bg-[#f4e2d9] pt-24 md:pt-32 lg:pt-80 pr-10 lg:pr-20 pb-64 md:pb-10 rounded-br-[20%]">
              <div className="ml-96">
                <h2 className="text-4xl lg:text-6xl">
                  All Can Be <br />
                  Handled This Apps
                </h2>
                <p className="text-xl mt-3 mb-6">The Business Solution</p>
                <p className="text-lg text-gray-500 mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>

                <OrangeBtn txt="Download Now" />
              </div>
            </div>
          </div>
          <div className="md:w-4/12">
            <div className="-mt-52 md:mt-20 lg:mt-48 flex justify-center md:justify-end">
              <img
                src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/rect818-5-1.png"
                className="w-[80%] md:w-[90%]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
