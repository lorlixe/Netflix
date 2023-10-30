import "./App.scss";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import Row from "./component/Row";
import requests from "./config/Request";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Programe Originaux Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isPoster={true}
      />
      <Row title="Tendance" fetchUrl={requests.fetchTrending} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Romances" fetchUrl={requests.fetchRomanceMovies} />

      <Footer />
    </div>
  );
}

export default App;
