import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-200 w-full h-screen bg-hero bg-no-repeat bg-cover bg-center py-24 overflow-hidden">
      <div className="container mx-auto flex justify-start h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-300 mr-3"></div>New Trend
          </div>
          <h1 className="text-[60px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="flex justify-center items-center text-white uppercase py-2 bg-red-400 w-[150px]"
          >
            Discover More
          </Link>
        </div>
        {/* <div className="hidden lg:block">
          <img src={womenImg} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
