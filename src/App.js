import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Quote
          destination="Narita"
          country="Japon"
          photo="https://images.unsplash.com/photo-1525316166484-aeef34af3ec3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b387ad58b209f1305e05a892abc135f8&auto=format&fit=crop&w=750&q=80"
          distance="9.454,26 km"
        />
        <Quote
          destination="Séoul"
          country="Corée du Sud"
          photo="https://images.unsplash.com/photo-1536315238512-4c8cebdaaf93?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ebac9881c49e3bfd8ddaa83e2bb271a&auto=format&fit=crop&w=456&q=80"
          distance="8.708,20 km"
        />
      </div>
    );
  }
}

export default App;
