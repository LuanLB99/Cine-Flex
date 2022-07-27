import "./assets/Css/reset.css";
import "./assets/Css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Top from "./Top";
import Film from "./Film";
import Sessions from "./Sessions";
import Seats from "./Seats";

export default function App(){
  const [id, setId] = useState('')
    return(
    <div className="App">
      <Top />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Film setId={setId}/>} />
        <Route path={`/sessoes/`+id}  element={<Sessions id={id}/>} />
        <Route path='/assentos/' element={<Seats />} />
      </Routes>
      </BrowserRouter>
    </div>
    )
}

