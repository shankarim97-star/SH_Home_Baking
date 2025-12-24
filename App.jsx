import "./App.css";
import Logo from "./assets/SH-Icons.png";
import React from "react";
import WA from "./assets/WA Icon.jpg";
import IG from "./assets/IG icon.png";

function App() {
  return (
    <div>
      <div className="Top">
        <a><img src={WA} alt="WhatsappIcon" className="Whatsapp" onClick={WAIcon}/></a>
        <a><img src={IG} alt="Instagram" className="Instagram" onClick={IGIcon} /></a>
      </div>
      <nav className="nav">
        <img src={Logo} alt="Logo" className="Logo" />
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Menu</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </nav>

      <header className="hero">
        <h2>Fresh Bakery Items</h2>
        <p>Baked fresh every morning</p>
        <button onClick={() => alert("Order placed!")}>
          Order Now
        </button>
      </header>

      <section className="menu">
        <Product name="Fudgy Brownie" price="₹50/Piece" />
        <Product name="Blondie" price="₹55/Piece" />
        <Product name="Cookies" price="₹70/100g" />
      </section>
    </div>
  );
}

function Product({ name, price }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}
function WAIcon() {
    window.open("https://api.whatsapp.com/message/7AM77UCHMQBBN1?autoload=1&app_absent=0"
  );
}
function IGIcon() {
    window.open("https://www.instagram.com/sh_home_baking7?igsh=NW1ib2N6M2VqZzNu");
}
export default App;
