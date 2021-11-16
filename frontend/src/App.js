import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./component/layout/Header/Header";
import webFont from "webfontloader"
import Footer from './component/layout/Footer/Footer';

function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  });
  return (
    <Router>
      <Header />
      
      <Footer />
    </Router>
  );
}

export default App;
