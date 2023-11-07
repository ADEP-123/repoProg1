const calif = /*html*/`
<h1>Calculadora de promedio</h1>
<div id=div_info>
<img src="imgs/promedio.png" id="img_imc">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/promedio.png" id="img_imc"> -->
<p>Calculadora de promedio de 5 calificaciones, rellene los valores del apartado de abajo</p>
</div>

<div id=calculadora>
    <form id="promForm">
        <table id="question_form">
            <tr>
                <td>
                    <span>Nota minima posible: </span>
                    <input type="number" id="notMin" step="any"><br>
                </td>
                <td>
                    <span>Nota maxima posible: </span>
                    <input type="number" id="notMax" step="any"><br>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Nota 1: </span>
                    <input type="number" id="not1" step="any"><br>
                </td>
                <td>
                    <span>Nota 2: </span>
                    <input type="number" id="not2" step="any"><br>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Nota 3: </span>
                    <input type="number" id="not3" step="any"><br>
                </td>
                <td>
                    <span>Nota 4: </span>
                    <input type="number" id="not4" step="any"><br>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <span>Nota 5: </span>
                    <input type="number" id="not5" step="any"><br>
                </td>
            </tr>
            
        </table> 
        <button type="submit" id="submit_form">Calcular</button>
    </form>
    <br>
    <h2 id="result"></h2>
</div>



`;
export default calif