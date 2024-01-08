import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <nav className="w-full p-10 h-20 flex items-center mx-auto justify-between bg-[#334B35] text-white">
      <div className="flex justify-between items-center">
        <span className="  text-2xl p-2 lg:hidden  ">
          <RxHamburgerMenu />
        </span>
        <h1 className="text-[#fff] font-bold text-3xl ml-8">Smart Agro</h1>
        <ul className="flex space-x-4  md:grid-row-3 ">
          <li>Home</li>
          <li>About Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
