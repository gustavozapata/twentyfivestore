import About from "../layout/About";
import Footer from "../layout/Footer";
import Products from "../layout/Products";
import Service from "../layout/Service";
// import Header from "../layout/Header";
import Viewport from "../layout/Viewport";
import "./styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <Viewport />
      <About />
      <Service />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
