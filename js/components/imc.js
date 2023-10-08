const imc = /*html*/`
<h1>Calculadora de Indice de Masa Corporal (IMC)</h1>
<div id=div_info>
<img src="./../imgs/imc.png" id="img_imc">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/imc.png" id="img_imc"> -->
<p>Una medida de la obesidad se determina mediante el índice de masa corporal (IMC), que se calcula dividiendo los kilogramos de peso por el cuadrado de la estatura en metros (IMC = peso (kg)/ [estatura (m)]2. Según el Instituto Nacional del Corazón, los Pulmones y la Sangre de los Estados Unidos (NHLBI), el sobrepeso se define como un IMC de más de 25. Se considera que una persona es obesa si su IMC es superior a 30. Usted puede determinar su IMC con la calculadora que se encuentra a continuación. Con la cifra del IMC puede averiguar su composición corporal en la tabla que aparece debajo de la calculadora.</p>
</div>

<div id=calculadora>
    <form id="formularioIMC">
        <h4>Calculadora</h4>
        <span>Estatura: </span>
        <input type="text" id="estatura" name="estatura" placeholder="metros">
        <span>Peso: </span>
        <input type="text" id="peso" name="peso" placeholder="kilogramos"><br>
        <button type="submit" id="submit_form">Calcular</button>
    </form>
    <br>
    <spam>IMC: </spam>
    <input type="number" id="result" placeholder="resultado" readOnly><br>
</div>



`;
export default imc