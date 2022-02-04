import "normalize.css";
import "./css/main.min.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { useGlobalContext } from "./Context";

const App = () => {
  const { isContactFormOpen } = useGlobalContext();
  return (
    <div className="App">
      {isContactFormOpen && <ContactForm />}
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
