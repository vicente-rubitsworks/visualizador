import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import ClientLayout from "./Layouts";
import Home from "./Pages";
import Directorio from "./Pages/Directorio/Directorio";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Directorio></Directorio>
      <Footer />
    </div>
  );
}

export default App;
