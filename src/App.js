import React from 'react';
import { useState } from 'react';
import './App.css';
import { ListOfCharacters } from './components/ListOfCharacter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  } from "react-router-dom";
import { DetailCharacter } from "./components/DetailCharacter"

function App() {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage( page + 1);
  }

  const prevPage = () => {
    setPage( page - 1);
  }

  return (
    <div>
        <Router>
        <Link to="/">
          <h1 className="center">Personajes de Rick & Morty</h1>
        </Link>
      
      <div className='pagination'>
        <button onClick={prevPage} className={page === 1 ? 'disable' : null}> - </button>
          <span>{page}</span>
        <button onClick={nextPage} className={page === 42 ? 'disable' : null}> + </button>
      </div>
      <div className="App">
        
          <Routes>
            <Route path="/" element={<ListOfCharacters page={page}/>}></Route>
            <Route path="/character/:charId" element={<DetailCharacter page={page}/>}></Route>
          </Routes>
        
      </div>
      <div className='pagination'>
        <button onClick={prevPage} className={page === 1 ? 'disable' : null}> - </button>
          <span>{page}</span>
        <button onClick={nextPage} className={page === 42 ? 'disable' : null}> + </button>
      </div>
      </Router>
    </div>
  );
}

export default App;
