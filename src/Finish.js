import { Link } from "react-router-dom";


export default function Finish({finish}){
    console.log(finish);
    return(
        <>
         <div className="header">
            <h1>Pedido Feito com sucesso!</h1>
        </div>
        <div className="content">
        <div className="finish">
            <div className="title">Filme e sessao</div>
            <div className="subtitle">
                <h4>Enola Holmes</h4>
                <h4>Enola Holmes</h4>
            </div>
        </div>

        <div className="finish">
            <div className="title">Ingressos</div>
            <div className="subtitle">
                <h4>Enola Holmes</h4>
                <h4>Enola Holmes</h4>
            </div>
        </div>


        <div className="finish">
            <div className="title">Comprador</div>
            <div className="subtitle">
                <h4>Enola Holmes</h4>
                <h4>Enola Holmes</h4>
            </div>
        </div>

       <Link to="/"><button className="reservar">Voltar para home</button > </Link>
        </div>
        </>
    )
}