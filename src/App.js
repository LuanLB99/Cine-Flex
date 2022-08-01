import "./assets/Css/reset.css";
import "./assets/Css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Top from "./Top";
import Film from "./Film";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Finish from "./Finish";

export default function App(){
  const [id, setId] = useState('');
    return(
    <div className="App">
      <Top />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Film setId={setId}/>} />
        <Route path={`/sessoes/:idFilme`}  element={<Sessions id={id}/>} />
        <Route path={`/assentos/:idSessao`} element={<Seats />} />
        <Route path={`/sucesso`} element={<Finish />} />
      </Routes>
      </BrowserRouter>
    </div>
    )
}

