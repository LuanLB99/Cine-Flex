import axios from "axios";
import { useState, useEffect } from "react";
import Session from "./Session";



export default function Sessions({id}){
    const [horario, setHorario] = useState([]);

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/`+6+`/showtimes`)
        promise.then(resposta => {
            setHorario(resposta.data.days)
            console.log(resposta.data.days)
        })
    }, [])



    return(
        <>
        <div className="header">
            <h1>Selecione o horário</h1>
        </div>
           {horario.map((value, index) => <Session date={value.date}
                                            weekday={value.weekday}
                                            showtimes={value.showtimes}
                                            idSession={value.id}
                                            key={index}
           /> ) } 
        </>
    )
}