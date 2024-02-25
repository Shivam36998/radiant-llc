import React from "react";
import "./styles/mystyles.scss";
import Home from "./pages/Home";
import Nav from "./pages/Navbar";
import Footer from "./pages/Footer";

function App() {
  return (
    <main>
      <div className="navbar">
        <Nav />
      </div>
      <Home />
      <Footer />
    </main>
  );
}

export default App;
