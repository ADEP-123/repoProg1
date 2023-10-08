const areapem = /*html*/`
<h1>Calculadora de valor total para una heladeria</h1>
<div id=div_info>
    <img src="./../imgs/heladeria.png" id="img_imc">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/heladeria.png" id="img_imc"> -->
    <p>Una tienda de helado da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:</p>
    <ul>
        <li>Tipo A 10% de descuento</li>
        <li>Tipo B 15% de descuento</li>
        <li>Tipo C 20% de descuento</li>
    </ul>
</div>

<div id=calculadora>
    <form id="formularioHel">
        <h4>Calculadora</h4>
        <span>Tipo de cliente </span>
        <select id="tipClient">
            <option value=0.10>Cliente tipo 1</option>
            <option value=0.15>Cliente tipo 2</option>
            <option value=0.20>Cliente tipo 3</option>
        </select>
        <span>Total venta: </span>
        <input type="number" id="totVent" step="any" placeholder="0$"><br>
        <button type="submit" id="submit_form">Calcular</button>
    </form>
    <br>
    <spam>Total con descuento: </spam>
    <input type="number" id="totVentDesc" readOnly placeholder="0$"><br>
</div>



`;
export default areapem