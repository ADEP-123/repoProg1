const mayedad = /*html*/`
<h1>Saber si es mayor de edad</h1>
<div id=div_info>
<img src="./../imgs/crecer.gif" id="img_imc">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/crecer.gif" id="img_imc"> -->
<p>Calculadora para saber si usted es mayor de edad segun la legislacion colombiana. En colombia se es mayor a partir de los 18</p>
</div>

<div id=calculadora>
    <form id="mayEdadform">
        <h4>Calcule si usted es mayor de edad</h4>
        <span>Edad: </span>
        <input type="number" id="edad" name="eadad"><br>
        <button type="submit" id="submit_form">Calcular</button>
    </form>
    <br>
    <h2 id="result"></h2>
</div>



`;
export default mayedad