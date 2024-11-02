import "./App.css";
import Navbar from "./Navbar";
import AddFilm from "./pages/AddFilm";
import FilmDetails from "./pages/FilmDetails";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateMovie from "./pages/UpdateMovie";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addfilm" element={<AddFilm />} />
        <Route path="/film/:id" element={<FilmDetails/>} />
        <Route path="/update/:id" element={<UpdateMovie/>} />

      </Routes>
    </div>
  );
}

export default App;
