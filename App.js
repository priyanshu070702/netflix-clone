
import "./App.css";
import Banner from "./Banner";
import Header from "./Header";
import requests from "./request";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Row
        isLargeRow={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        />
    </div>
  );
}

export default App;
