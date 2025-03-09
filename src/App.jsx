import React from "react";
import "./App.css"; // Import styles separately
import Navigation from "./Components/Navigation/Navigation";
import HeroHeader from "./Components/HeroHeader/HeroHeader";
import ContactForm from "./Components/Contact/ContactForm";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <HeroHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
