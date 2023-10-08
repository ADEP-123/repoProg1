const compPass = /*html*/`
<h1>Comprobar Contraseña</h1>
<div id=div_info>
<img src="./../imgs/contr.png" id="img_imc">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/contr.png" id="img_imc"> -->
<p>Ingrese la contraseña de la cuenta en el apartado inferior <br><i>Nota: Para efectos del ejercicio la contraseña es la que se muestra en el input</i></p>
</div>

<div id=calculadora>
    <form id="contrForm">
        <table style="width:100%">
            <tr>
                <td>
                    <span>Usuario:</span>
                </td>
                <td colspan="2">
                    <input type="text" id="user" value="userTest" readOnly>
                </td>
            </tr>
            <tr>
                <td>
                    <span>Contraseña:</span>
                </td>
                <td colspan="2">
                    <input type="text" id="pass" placeholder="testing123">
                    <button id="changeVis">&#128065;</button>
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <button type="submit" id="submit_form">Log In</button>
                </td>
            </tr>
        </table>       
    </form>
    <br>
    <h2 id="result"></h2>
</div>

`;
export default compPass