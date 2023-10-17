import { useState } from "react";
function Car(props){
    //variavle para visualizar el estado del coche
    const [estado, setEstado] = useState(false);
    //variavle para visualizar velocidad actual del coche
    const [velocidad, setVelocidad] = useState(0);
    //objeto coche co las caracteristicas como props

    var coche = {
        marca : props.marca,
        modelo : props.modelo,
        aceleracion : parseInt(props.aceleracion),
        velocidadMaxima : parseInt(props.velocidadmaxima)
    }

    const comprobarEstado = () =>{
        if (estado == true){
            return (<h1 style ={{color :"green"}}> Arrancado</h1>);
        } else{
            return (<h1 style ={{color :"red"}}> Detenido</h1>);
        }


    } 

    const acelerarCoche = () => {
            if (estado == false){
                alert("el coche esta detenido");
                setVelocidad(0);
            } else {
                if(velocidad >= coche.velocidadMaxima){
                    setVelocidad(coche.velocidadMaxima);
                } else {
                    setVelocidad(velocidad + coche.aceleracion);
                }

            }

            console.log(coche.velocidadMaxima);
    }


    return(<div> 
        <h1> Component Car {coche.marca},{coche.modelo}</h1>
        <h1 style = {{color: "blue"}}> Velocidad Actual : {velocidad} km/h</h1>

        <div>
         {comprobarEstado()}   
        </div>

        <button onClick = { () => {
            setEstado(!estado);
            console.log("Cambiado estado: "+estado);
        }}> Arrancar / Detener </button>

        <button onClick = { () => {
            acelerarCoche();
            console.log("acelerando");
        }}> Acelerar </button>
    </div>)
}

export default Car;