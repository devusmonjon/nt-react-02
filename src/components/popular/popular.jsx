import Product from "../product/product";
import SectionTitle from "../section-title/section-title";
import PropTypes from "prop-types";

const Popular = ({ data }) => {
  return (
    <section className="pt-[90px] pb-[125px]">
      <div className="container">
        <SectionTitle
          title="Popular"
          subtitle="Our top selling product that you may like"
          className="mb-[50px]"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {data.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Popular.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Popular;
