import "./styles/index.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./components/Details";
import Benefits from "./components/Benefits"
import Build from "./components/Build";
import Brands from "./components/Brands";
import Products from "./components/Products"
import Footer from "./components/Footer";
import Shop from "./components/Shop";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Details />
      <Shop />
      <Benefits />
      <Build />
      <Products />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
