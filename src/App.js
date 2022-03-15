import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      {/* Navigation bar */}
      <Navigation />
      {/* Header content of page */}
      <Header />
      {/* Content for the page */}
      <Section />
      {/* Footer to the page */}
      <Footer />
    </div>
  );
}

export default App;
