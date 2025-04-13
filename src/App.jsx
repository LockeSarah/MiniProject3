import './App.css';
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { movies } from "./Model/Movies.json";
import Movies from "./Components/Movies";
import NavBar from './Components/NavBar';
import ContactUs from './Components/ContactUs';
import Register from './Components/Register';
import MovieAdmin from './Components/MovieAdmin';

export const DataContext = createContext("");
export default function App() {
  if(sessionStorage.getItem("admin") == null) {
    sessionStorage.setItem("admin", 0);
  }
  var login=0;
  if(sessionStorage.getItem("logged") != null) {
    login = sessionStorage.getItem("logged");
  }
  const [logStatus, setLogStatus] = useState(0);
  const [movieList, setMovieList] = useState(movies);

  return (
    <div>
      <DataContext.Provider value={{ logStatus:logStatus, setLogStatus:setLogStatus, movieList:movieList, setMovieList:setMovieList }}> 
        <div className='w-[100vw] h-[100vh] bg-amber-100'>
          <NavBar />
          <div className="text-center text-3xl">
            <BrowserRouter>
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/MovieAdmin" element={<MovieAdmin />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </DataContext.Provider>
    </div>
  );
}

