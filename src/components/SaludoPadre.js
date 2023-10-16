import SaludoHijo from "./SaludoHijo";

function saludoPadre(){

const metodoPadre = (nombre) =>{
    console.log(" ejecutando metodo padre" + nombre);
}

return(<div> 
    <h1 style ={{color:"red"}}> Saludo PADRE</h1>
    <SaludoHijo metodoPadre ={metodoPadre}></SaludoHijo>
</div>)


}
export default saludoPadre;