import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="hidden md:block fixed top-0 left-0 w-full">
      <div className="container">
        <div className="flex justify-between py-3">
          <div>
            <h2 className="text-6xl font-bold mt-4">BTECH</h2>
          </div>
          <div>
            <ul className="flex gap-5 text-white text-xl">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
