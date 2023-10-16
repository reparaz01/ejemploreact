function SaludoHijo(props){
    var ejecutarPadre = props.metodoPadre;
return (<div> 
    <h1 style = {{color:"blue"}}> Saludo HIJO</h1>
    <button onClick = {  () => ejecutarPadre(" DAVID") }> LLamar Padre </button>
</div>)
}

export default SaludoHijo;