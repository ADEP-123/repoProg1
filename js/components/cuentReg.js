const cuentReg = /*html*/`
<h1>Cuenta Regresiva de despegue</h1>
<div id=div_info>
<img src="./../imgs/coete.png" id="cohete">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/coete.png" id="cohete"> -->
<p>Ingresa un numero para el conteo regresivo del cohete</p>
</div>

<div id=calculadora>
    <form id="coheteForm">
        <input type="number" id="numero"><br>
        <button type="submit" id="submit_form">Empezar</button>
    </form>
    <br>
    <h2 id="result"></h2>
</div>

`;
export default cuentReg