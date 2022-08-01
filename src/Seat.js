import { useState } from "react";

export default function Seat({seat, name, available, setArr, arr}){

    const [status, setStatus] = useState(available);
    const [div, setDiv] = useState(true);
    const [nameclass, setNameclass] = useState('disponivel');

    function removeItem(newarr, value){
        return newarr.filter((i) => i != value);
    }

    function statusdiv(){
        if(div === true && status === true) {
            if(!arr.includes(name)) {
                arr.push(name);
            }
                setDiv(false);
                setNameclass('selecionado');
           
        } else {
                setDiv(true);
                setNameclass('disponivel');
                setArr(removeItem(arr, name));
        }
        
    }



    return(
        <>

       { (status === true ) ? <div className={nameclass} onClick={statusdiv} ><h4>{name}</h4></div> : 
                              <div className="indisponivel"><h4>{name}</h4></div>
       }

       

        </>
    )
}