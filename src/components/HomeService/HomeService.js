import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NotFound from "../../components/NotFound/NotFound";
import Services from "../../components/Services/Services";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route path="/service/:id/:title">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
