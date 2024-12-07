import { CoffeeBtn, OrangeBtn } from "../../Components/OrangeBtn";
import { IoMdArrowDropright } from "react-icons/io";

export default function PriceSection() {
  return (
    <section className="py-40">
      <div className="container">
        {/* Title */}
        <div className="w-8/12 lg:w-6/12 mx-auto">
          <div className="text-white text-center">
            <h2 className="text-4xl lg:text-6xl">Choose Our Price</h2>
            <p className="text-xl mt-2 mb-5">Friendly Price</p>
            <p className="text-lg mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        {/* Price Cards Container */}
        <div className="md:flex justify-center items-start gap-5">
          {/* Card */}
          <div className="md:w-4/12 bg-[#f24c00] text-center rounded-md py-8 px-4 lg:px-12 md:pr-12 lg:pr-28">
            {/* Card Header */}
            <div className="text-white">
              <h6 className="text-xl">Expert</h6>
              <p className="text-6xl my-6">$99</p>
              <p>/month</p>
              <div className="my-12">
                <CoffeeBtn txt="Get Now" />
              </div>
            </div>
            {/* Card List */}
            <ul className="text-white">
              <li className="flex items-center justify-center gap-1 text-lg">
                <IoMdArrowDropright className="text-2xl" /> Easy to use
              </li>
              <li className="flex items-center justify-center gap-1 text-lg">
                <IoMdArrowDropright className="text-2xl" /> 10 Language
              </li>
              <li className="flex items-center justify-center gap-1 text-lg">
                <IoMdArrowDropright className="text-2xl" /> Free Update
              </li>
              <li className="flex items-center justify-center gap-1 text-lg">
                <IoMdArrowDropright className="text-2xl" /> 8GB Cloud
              </li>
              <li className="flex items-center justify-center gap-1 text-lg">
                <IoMdArrowDropright className="text-2xl" /> And More
              </li>
            </ul>
          </div>
          <div className="md:w-8/12 md:flex gap-5 bg-[#2a4445] border-[#2a4445] border-[8px] lg:border-[20px] mt-12 md:-ml-12 lg:-ml-32 rounded-lg">
            {/* Card */}
            <div className="md:w-6/12 bg-[#f4e2d9] text-center rounded-md py-8 px-3 lg:px-12">
              {/* Card Header */}
              <div className="text-black">
                <h6 className="text-xl">Medium</h6>
                <p className="text-6xl my-6">$99</p>
                <p>/month</p>
                <div className="my-12">
                  <OrangeBtn txt="Get Now" />
                </div>
              </div>
              {/* Card List */}
              <ul className="text-black">
                <li className="flex items-center justify-center gap-1 text-lg">
                  <IoMdArrowDropright className="text-2xl" /> Easy to use
                </li>
                <li className="flex items-center justify-center gap-1 text-lg">
                  <IoMdArrowDropright className="text-2xl" /> 10 Language
                </li>
                <li className="flex items-center justify-center gap-1 text-lg">
                  <IoMdArrowDropright className="text-2xl" /> Free Update
                </li>
                <li className="flex items-center justify-center gap-1 text-lg">
                  <IoMdArrowDropright className="text-2xl" /> 8GB Cloud
                </li>
                <li className="flex items-center justify-center gap-1 text-lg">
                  <IoMdArrowDropright className="text-2xl" /> And More
                </li>
              </ul>
            </div>
            {/* Card */}
            <div className="md:w-6/12 bg-[#f4e2d9] text-center rounded-md py-8 px-3 lg:px-12 mt-6 md:mt-0">
              {/* Card Header */}
              <div className="text-black">
                <h6 className="text-xl">Basic</h6>
                <p className="text-6xl my-6">$99</p>
                <p>/month</p>
                <div className="my-12">
                  <OrangeBtn txt="Get Now" />
                </div>
              </div>
              {/* Card List */}
              <ul className="text-black">
                <li className="flex items-center justify-center gap-1 text-lg">
                  <IoMdArrowDropright className="text-2xl" /> Easy to use
                </li>
                <li className="flex items-center justify-center gap-1 text-lg">
                  <IoMdArrowDropright className="text-2xl" /> 10 Language
                </li>
                <li className="flex items-center justify-center gap-1 text-lg">
                  <IoMdArrowDropright className="text-2xl" /> Free Update
                </li>
                <li className="flex items-center justify-center gap-1 text-lg">
                  <IoMdArrowDropright className="text-2xl" /> 8GB Cloud
                </li>
                <li className="flex items-center justify-center gap-1 text-lg">
                  <IoMdArrowDropright className="text-2xl" /> And More
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
