import "./App.css";
import About from "./layout/About";
import Footer from "./layout/Footer";
import Products from "./layout/Products";
import Service from "./layout/Service";
// import Header from "./layout/Header";
import Viewport from "./layout/Viewport";

function App() {
  return (
    <div className="App">
      <Viewport />
      <About />
      <Service />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
