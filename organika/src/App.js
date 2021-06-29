import "./App.css";
import NavBar from "./components/navBar";
import FooterBar from "./components/footerBar";

import InfoBottomBar from "./components/infoBottomBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Item from "./components/item";
import Catalog from "./components/catalog";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Catalog></Catalog>

      <InfoBottomBar></InfoBottomBar>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
