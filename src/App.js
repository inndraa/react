import "./styles/main.min.css";


import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./components/Details";
import Benefits from "./components/Benefits"
import Build from "./components/Build";
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Details/>
      <Benefits/>
      <Build/>
    </div>
  );
}

export default App;
