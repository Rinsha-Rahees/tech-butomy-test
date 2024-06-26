import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
