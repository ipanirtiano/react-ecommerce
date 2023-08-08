import { SidebarContext } from "../contexts/SidebarContext";
import { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemsAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md" : "bg-transparent"
      } flex items-center justify-between px-6 md:px-12 py-4 fixed top-0 left-0 right-0 z-20 transition-all duration-200`}
    >
      <Link to={"/"} className="text-2xl font-semibold">
        iStore
      </Link>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="text-2xl" />
        <div className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center absolute right-[-15px] top-[-8px] text-sm">
          {itemsAmount}
        </div>
      </div>
    </header>
  );
};

export default Header;
