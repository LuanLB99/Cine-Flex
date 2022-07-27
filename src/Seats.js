export default function Seats(){
    return(
        <>
        <div className="header">
            <h1>Selecione o(s) assento(s)</h1>
        </div>
        <div className="seats">
            <div className="seat"><h4>01</h4></div>
            <div className="seat"><h4>01</h4></div>
            <div className="seat"><h4>01</h4></div>
            <div className="seat"><h4>01</h4></div>
            <div className="seat"><h4>01</h4></div>
            <div className="seat"><h4>01</h4></div>
            <div className="seat"><h4>01</h4></div>
            <div className="seat"><h4>01</h4></div>
            <div className="seat"><h4>01</h4></div>
            <div className="seat"><h4>01</h4></div>
            <div className="seat"><h4>01</h4></div>
            <div className="seat"><h4>01</h4></div>
        </div>

        <div className="subtitles">
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
                <input placeholder="Digite seu nome" />
            </div>
            <div className="cpf">
                <h4>CPF do comprador:</h4>
                <input placeholder="Digite seu CPF" />
            </div>
        </div>


        <div className="footer">
            <div className="sessionchoosed">
                <div className="img">foto</div>
                <div>
                <h5>Enola Holmes</h5>
                <h4>Quinta-feira - 15:00</h4>
                </div>
            </div>
        </div>
        </>
    )
}