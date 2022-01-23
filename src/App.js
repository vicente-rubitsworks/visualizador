import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import ClientLayout from "./Layouts";
import Home from "./Pages";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Home></Home>
      <Footer />
    </div>
  );
}

export default App;
