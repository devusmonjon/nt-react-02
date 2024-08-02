import { Hero, Popular, Products } from "./components";

const App = () => {
  const products = [
    {
      id: 1,
      title: "Spiced Mint",
      price: "$9.99",
      img: "/product-1.png",
    },
    {
      id: 2,
      title: "Spiced Mint",
      price: "$9.99",
      img: "/product-2.png",
    },
    {
      id: 3,
      title: "Cool Blueberries",
      price: "$9.99",
      img: "/product-3.png",
    },
    {
      id: 4,
      title: "Juicy Lemon",
      price: "$9.99",
      img: "/product-4.png",
    },
    {
      id: 5,
      title: "Product name",
      price: "$9.99",
      img: "/product-5.png",
    },
    {
      id: 6,
      title: "Fragrant Cinnamon",
      price: "$9.99",
      img: "/product-6.png",
    },
    {
      id: 7,
      title: "Summer Cherries",
      price: "$9.99",
      img: "/product-7.png",
    },
    {
      id: 8,
      title: "Clean Lavander",
      price: "$9.99",
      img: "/product-8.png",
    },
  ];
  return (
    <main>
      <Hero />
      <Products data={products} />
      {/* <Benefits /> */}
      {/* <Testimonials /> */}
      <Popular data={products.slice(0, 4)} />
    </main>
  );
};

export default App;
