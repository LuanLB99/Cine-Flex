import { Link, useLocation } from "react-router-dom";



export default function Finish(){
    const location = useLocation();
    let list = location.state.vagas;


    return(
        <>
         <div className="header">
            <h1 className="done">Pedido Feito com sucesso!</h1>
        </div>
        <div className="content">
        <div className="finish">
            <div className="title">Filme e sessao</div>
            <div className="subtitle">
                <h4>{location.state.filme}</h4>
                <h4>{location.state.data} - {location.state.hora}</h4>
            </div>
        </div>

        <div className="finish">
            <div className="title">Ingressos</div>
            <div className="subtitle">
               { list.map((vaga) => <h4> Assento {vaga}</h4>)}
                
            </div>
        </div>


        <div className="finish">
            <div className="title">Comprador</div>
            <div className="subtitle">
                <h4>Nome: {location.state.nome}</h4>
                <h4>CPF: {location.state.cpf}</h4>
            </div>
        </div>

       <Link to="/"><button className="reservar">Voltar para home</button > </Link>
        </div>
        </>
    )
}