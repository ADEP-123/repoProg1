const tablMul = /*html*/`
<h1>Tablas de multiplicar</h1>
<div id=div_info>
<img src="imgs/tablasmult.png" id="img_imc">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/tablasmult.png" id="img_imc"> -->
<p>Calculadora de tablas de multiplicar</p>
</div>

<div id=calculadora>
    <form id="tablMulForm">
        <h4>Inserte un numero para saber su tabla de multiplicar</h4>
        <span>Numero: </span>
        <input type="number" id="number" name="number"><br>
        <button type="submit" id="submit_form">Calcular</button>
    </form>
    <br>
</div>
<div id="result_div">
<h1>Tabla de multiplicar</h1>
<img src="imgs/loading.gif" id="loading">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/loading.gif" id="loading"> -->
</div>



`;
export default tablMul