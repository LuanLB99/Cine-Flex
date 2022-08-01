import axios from "axios";
import Seat from "./Seat";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";




export default function Seats(){
        
        const {idSessao} = useParams({});
        const [assentos,setAssentos] = useState([]);

        const [footerhour,setFooterhour] = useState('');
        const [footermovie, setFootermovie] = useState('');
        const [footerday, setFooterday] = useState('');
        const [nome, setNome] = useState('');
        const [cpf, setCpf] = useState('');
        const [arr, setArr] = useState([]);

        useEffect(() => {
            const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
            promise.then(resposta => {
                
                setAssentos(resposta.data.seats);
                setFooterhour(resposta.data);
                setFootermovie(resposta.data.movie);
                setFooterday(resposta.data.day);
            })
        }, []);

    

        function mergeValues(){
            
            return {
                filme:footermovie.title,
                dia: footerday.weekday,
                data: footerday.date,
                hora:footerhour.name,
                vagas:arr,
                nome: nome,
                cpf: cpf
            }
        }

        function reserve(e){
            e.preventDefault();
            const body = {
                ids:arr,
                name:nome,
                cpf:cpf
            }


            
            
            const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', body)
            promise.then();
        }

    return(
        <>
        
        <form onSubmit={reserve} >
        <div className="header">
            <h1>Selecione o(s) assento(s)</h1>
        </div>
        <div className="seats">

          { assentos.map((assento, index) =>
                <Seat
                key={index} 
                seat={assento.id}
                name={assento.name}
                available={assento.isAvailable}
                setArr={setArr}
                arr={arr}
                /> 
            )}
            
        </div>

        <div className="legenda">
            <div className="sub">
                <div className="selecionado"></div>
                <h4>Selecionado</h4>
            </div>
            <div className="sub">
                <div className="disponivel"></div>
                <h4>Disponível</h4>
            </div>
            <div className="sub">
                <div className="indisponivel"></div>
                <h4>Indisponível</h4>
            </div> 
        </div>


        <div className="dados">
            <div className="identidade">
                <h4>Nome do comprador:</h4>
                <input placeholder="Digite seu nome" type="text" name={nome} onChange= {e => setNome(e.target.value)} required/>
            </div>
            <div className="cpf">
                <h4>CPF do comprador:</h4>
                <input placeholder="Digite seu CPF" type="text" name={cpf}  onChange= {e => setCpf(e.target.value)} required/>
            </div>
        </div>

      <Link state={mergeValues()}  to={"/sucesso"}  ><button type="submit" className="reservar">Reservar assento(s)</button ></Link>
        </form>

        <div className="footer">
            <div className="sessionchoosed">
                <div className="img"><img src={footermovie.posterURL} /></div>
                <div>
                <h5>{footermovie.title}</h5>
                <h4>{footerday.weekday} - {footerhour.name}</h4>
                </div>
            </div>
        </div>
        </>
    )
}