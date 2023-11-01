import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import Row from "./component/Row";
import requests from "./config/Request";
import Video from "./component/Video";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/video/:id" element={<Video />} />
          <Route path="/" element={<HomeComponent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function HomeComponent() {
  return (
    <div>
      <Banner />
      <Row
        title="Programes Originaux Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isPoster={true}
      />
      <Row title="Tendance" fetchUrl={requests.fetchTrending} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Romances" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
