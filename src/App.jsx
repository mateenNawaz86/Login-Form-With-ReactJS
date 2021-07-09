import React from "react";
import Form from "./components/Form/Form";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Router>
      <section id="form">
        <Form />
      </section>
    </Router>
  );
};

export default App;
