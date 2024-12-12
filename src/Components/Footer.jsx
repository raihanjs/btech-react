import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

export default function Footer() {
  return (
    <header className="py-20">
      <div className="container">
        {/* Footer Social Links */}
        <div className="md:w-8/12 mx-auto pb-5">
          <div className="text-white text-lg">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 my-5">
              <div className="flex items-center gap-3">
                <FaFacebookF />
                <span>Facebook</span>
              </div>
              <div className="flex items-center gap-3">
                <FaTwitter />
                <span>Twitter</span>
              </div>
              <div className="flex items-center gap-3">
                <FaInstagram />
                <span>Instagram</span>
              </div>
              <div className="flex items-center gap-3">
                <FaDribbble />
                <span>Dribble</span>
              </div>
              <div className="flex items-center gap-3">
                <FaBehance />
                <span>Behance</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-500" />
        {/* Footer Bottom */}
        <div className="py-5 text-white text-lg text-center">
          <p>Copyright &copy; All Right Reserved</p>
        </div>
      </div>
    </header>
  );
}
