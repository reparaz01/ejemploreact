function SumarNumeros(){

var inicio = 0;
const sumar = (numero) => {
    var suma = numero+inicio;
    inicio = suma;
    console.log(suma);
}

return <div>
    <h1> Ejemplo Sumas</h1>
    <hr/>
    <button onClick ={() => sumar(7)}> 7</button>
    <button onClick ={() => sumar(3)}> 3</button>

</div>

}

export default SumarNumeros;