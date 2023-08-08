import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const Sidebar = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "right-[-1000px]"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex w-full justify-between items-center py-4  border-b">
        <div className="text-sm uppercase font-semibold">Shopping Bag (0)</div>
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="h-[70vh] overflow-y-auto ">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className="w-full py-4 border-t space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm uppercase font-semibold">
            Total : $ {parseFloat(totalPrice).toFixed(2)}
          </div>
          <div
            className="cursor-pointer py-2 flex items-center justify-center w-10 h-10"
            onClick={clearCart}
          >
            <FiTrash2 className="text-xl" />
          </div>
        </div>
        <div
          className="w-full py-2 px-4 bg-primary text-white cursor-pointer flex items-center
        justify-center uppercase font-semibold text-sm"
        >
          Check Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
