import axios from "axios";
import { useState, useEffect } from "react";
import Session from "./Session";
import { useParams } from "react-router-dom";




export default function Sessions({id}){
    const {idFilme} = useParams({});
    const [horario, setHorario] = useState([]);
    const [footerhour,setFooterhour] = useState('');
    

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`)
        promise.then((resposta) => {
            setHorario(resposta.data.days);
            setFooterhour(resposta.data);     
        })
    }, [])



    return(
    <>
        <div className="header">
            <h1>Selecione o horário</h1>
        </div>
        <div className="section">
           {horario.map((session, index) => <Session date={session.date}
                                            weekday={session.weekday}
                                            showtimes={session.showtimes}
                                            idSession={session.id}
                                            key={index}
           /> ) }
           </div> 
           
           <div className="footer">
            <div className="sessionchoosed">
                <div className="img"><img src={footerhour.posterURL} /></div>
                <div>
                <h5>{footerhour.title}</h5>
                <h4>{horario.weekday}</h4>
                </div>
                </div>
            </div>
        </>
    ) 
}