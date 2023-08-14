// import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Portfolio2 from "./components/Portfolio2";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Portfolio />
      <Portfolio2 />
      <Testimonials/>
    </div>
  );
}

export default App;
