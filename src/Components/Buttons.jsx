import { Link } from "react-router-dom";

export function OrangeBtn({ txt, link, icon }) {
  return (
    <button
      className="bg-[#f24c00] py-2 px-8 text-white hover:bg-black"
      style={{ borderRadius: "0px 20px 20px 20px" }}
    >
      <Link to={link} className="flex gap-2 items-center">
        {icon} {txt}
      </Link>
    </button>
  );
}

export function CoffeeBtn({ txt, link, icon }) {
  return (
    <button
      className="bg-[#f4e2d9] py-2 px-8 text-black hover:bg-black hover:text-white"
      style={{ borderRadius: "0px 20px 20px 20px" }}
    >
      <Link to={link} className="flex gap-2 items-center">
        {icon} {txt}
      </Link>
    </button>
  );
}

export function BlackBtn({ txt, link, icon }) {
  return (
    <button
      className="bg-black py-2 px-8 text-white hover:bg-gray-700"
      style={{ borderRadius: "0px 20px 20px 20px" }}
    >
      <Link to={link} className="flex gap-2 items-center">
        {icon} {txt}
      </Link>
    </button>
  );
}
