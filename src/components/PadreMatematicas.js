import Matematicas from "./Matematicas";

function PadreMatematicas(){

const mostrarTriple = (num) => {
    var triple = num *3;
    console.log("triple: "+num);
}

return <div>
    <h1> PADRE</h1>
    <hr/>
<Matematicas numero ="14"mostrarTriple={mostrarTriple} /> 

</div>

}

export default PadreMatematicas;