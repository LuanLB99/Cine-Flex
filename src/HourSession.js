import { Link } from "react-router-dom";


export default function HourSession({name, idShowtime}){
    return(
       
        <Link to={`/assentos/${idShowtime}`}><div className="sessao">
            {name}
        </div>
        </Link>

    )
}