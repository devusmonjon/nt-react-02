import Product from "../product/product";
import SectionTitle from "../section-title/section-title";

const Products = ({ data }) => {
  return (
    <section className="pt-[90px] pb-[125px]">
      <div className="container">
        <SectionTitle
          title="Products"
          subtitle="Order it for you or for your beloved ones"
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

export default Products;
