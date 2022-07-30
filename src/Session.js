import HourSession from "./HourSession"

export default function Session({date, weekday, showtimes, idSession}){
    return(
       
        <div className="horário">
        <h4>{weekday} - {date} - {idSession} </h4>
        <div className="sessoes">
            {showtimes.map ((value, index) => 
            <HourSession key={index} 
            name={value.name}
            idShowtime={value.id}
                                /> )}
        </div>
    </div>
    
   



    )
}