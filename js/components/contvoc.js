const contvoc = /*html*/`
<h1>Conteo de vocales</h1>
<div id=div_info>
<img src="imgs/vocales.png" id="img_imc">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/vocales.png" id="img_imc"> -->
<p>Contemos las vocales de una frase!, escriba la frase en el apartado inferior</p>
</div>

<div id=calculadora>
    <form id="contVocForm">
        <textarea id="frase" cols="60" rows="5" placeholder="Escribe la frase aqui"></textarea>
        <button type="submit" id="submit_form">Calcular</button>
    </form>
    <br>
</div>
<div id="result_div">
    <table>
        <tr>
            <th>a</th>
            <th>e</th>
            <th>i</th>
            <th>o</th>
            <th>u</th>
        </tr>
        <tr>
            <td>Esperando</td>
            <td>Esperando</td>
            <td>Esperando</td>
            <td>Esperando</td>
            <td>Esperando</td>
        </tr>
    </table>
</div>



`;
export default contvoc