import { FaRegCirclePlay } from "react-icons/fa6";

export default function VideoSection() {
  return (
    <section
      className="py-20 sm:py-32 md:py-44 lg:py-72 xl:py-80 2xl:py-96 bg-cover bg-[url('https://astylers.com/appiah-elementor/wp-content/uploads/2021/07/rect823-1.png')] rounded-br-[8vw]"
      data-aos="zoom-in"
    >
      <div className="container">
        <div className="flex justify-center">
          <button>
            <FaRegCirclePlay className="ml-32 sm:ml-44 md:ml-60 lg:ml-96 text-6xl text-orange-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
