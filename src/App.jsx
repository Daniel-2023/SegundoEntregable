import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CardCharacter from "./Components/CardCharacter";
import AllCharacters from "./Components/AllCharacters";
import Header from "./Components/Header";
import FilterBySpecies from "./Components/FilterBySpecies";
import Home from "./Components/Home";
import Searcharacter from "./Components/SearchCharacter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="inicio" element={<Home />} /> 
        <Route path="personajes" element={<AllCharacters />} />
        <Route path="especies" element={<FilterBySpecies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
