const adNum = /*html*/`
<h1>Adivina el numero!</h1>
<div id=div_info>
<img src="./../imgs/adivina.png" id="img_imc">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/adivina.png" id="img_imc"> -->
<p>Juguemos a adivina el numero, ingresa en el apartado inferior un numero entre 1 y 100</p>
</div>

<div id=calculadora>
    <form id="adivForm">
        <input type="number" id="numero"><br>
        <button type="submit" id="submit_form">Adivinar</button>
        <button id="camb_num">Cambiar numero</button>
    </form>
    <br>
    <h2 id="result"></h2>
</div>

`;
export default adNum