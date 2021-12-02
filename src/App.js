import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Choose from "./Choose";
import Enkripsi from "./Enkripsi";
import Dekripsi from "./Dekripsi";
import Artikel from "./Artikel";
import Tools from "./Tools";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/enkripsi" element={<Enkripsi />} />
        <Route path="/dekripsi" element={<Dekripsi />} />
        <Route path="/article" element={<Artikel />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </Router>
  );
}

export default App;
