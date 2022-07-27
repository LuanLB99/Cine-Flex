import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Film({setId}) {
  const [cartaz, setCartaz] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((resposta) => {
      setCartaz(resposta.data);
      console.log(resposta.data);
    });
  }, []);

  return (
    <>
    <div className="header">
        <h1>Selecione o Filme</h1>
      </div>
    <div className="films">
     {cartaz.map((value) => <Link to={`/sessoes/`+value.id}>
     <img src={value.posterURL} alt="filme" onClick={() => setId(value.id)}></img>
     </Link>
      )}
    </div>
    </>
  );
}
