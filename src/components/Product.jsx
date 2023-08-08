/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const { id, image, category, title, price } = product;
  return (
    <div className="mb-4">
      <div className="border border-[#e4e4e4] h-[250px] mb-2 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition-all ease-in-out duration-500"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 group-hover:right-2 p-2 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <button
            className="cursor-pointer"
            onClick={() => addToCart(product, id)}
          >
            <div className="flex text-white justify-center items-center w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 flex justify-center items-center text-primary drop-shadow-xl bg-white"
          >
            <BsEyeFill className="" />
          </Link>
        </div>
      </div>

      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1 line-clamp-1">{title}</h2>
        </Link>
        <div className="font-semibold w-full">
          <div className="flex items-center">
            <div className="text-base">$ {price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
