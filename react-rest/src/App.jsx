import "./App.css";

import Navbar from "./components/layouts/Navbar";

import Body from "./components/layouts/Body";

import "./App.css";
import Footer from "./components/layouts/Footer";

function App() {


  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Body />
      </div>
      <div className="max-w-7xl mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
