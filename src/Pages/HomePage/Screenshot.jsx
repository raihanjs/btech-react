import { OrangeBtn } from "../../Components/OrangeBtn";

export default function Screenshot() {
  return (
    <section>
      <div className="container">
        <div className="md:flex gap-10">
          <div className="md:w-6/12">
            <img
              src="https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/g993.png"
              alt=""
            />
          </div>
          <div className="md:w-6/12 mt-8">
            <div className="text-white">
              <h2 className="text-4xl font-medium">The Apps Screenshots</h2>
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
        </div>
      </div>
    </section>
  );
}
