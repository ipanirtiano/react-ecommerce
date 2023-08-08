import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
import Product from "../components/Product";

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <section className="py-20">
        <div className="mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:max-w-none md:mx-0 mx-auto">
            {products.map((product, i) => {
              return (
                <>
                  <Product key={i} product={product} />
                </>
              );
            })}

            {products.map((product, i) => {
              return (
                <>
                  <Product key={i} product={product} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
