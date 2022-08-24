import Header from "./Header";
import Hero from "./Hero";
import Articles from "./Articles";
import Prop-types from 'prop-types';
import Footer from "./Footer";

function App(props) {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Articles />
      </main>
      <Footer className="container" />
    </>
  );
}

export default App;
