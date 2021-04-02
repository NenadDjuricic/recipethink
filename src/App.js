import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import "./css/navbar.css";

import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import ShowCatMain from './components/ShowCatMain'
import Contact from './components/Contact'
import { withRouter } from 'react-router-dom';
class App extends React.Component {


 
  render() {
    return (
      <div>
        <Header showSearch={'yes'}/>
        <MainSection />
        <ShowCatMain />
        <AboutUs />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);
