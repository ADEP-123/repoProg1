const areapem = /*html*/`
<h1>Area y perimetro de un triangulo rectangulo</h1>
<div id=div_info>
<img src="imgs/triangulo.png" id="img_imc">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/triangulo.png" id="img_imc"> -->
<p>En matemáticas, el teorema de Pitágoras es una relación en geometría euclidiana entre los tres lados de un triángulo rectángulo. Afirma que el área del cuadrado cuyo lado es la hipotenusa (el lado opuesto al ángulo recto) es igual a la suma de las áreas de los cuadrados cuyos lados son los catetos (los otros dos lados que no son la hipotenusa).</p>
</div>

<div id=calculadora>
    <form id="formularioTriang">
        <h4>Calculadora</h4>
        <span>Cateto 1: </span>
        <input type="number" id="cat1" name="cat1" step="any">
        <span>Cateto 2: </span>
        <input type="number" id="cat2" name="cat2" step="any"><br>
        <button type="submit" id="submit_form">Calcular</button>
    </form>
    <br>
    <spam>Area: </spam>
    <input type="number" id="area" placeholder="area" readOnly><br>
    <spam>Perimetro: </spam>
    <input type="number" id="perimetro" placeholder="perimetro" readOnly><br>
</div>



`;
export default areapem