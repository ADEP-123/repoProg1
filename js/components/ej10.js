import config from "../config.js";
const ej10 = /*html*/`
<h1>Ejercicio 10</h1>
<p>Desarrolle un programa que me permita generar una factura de un producto con el 19% de iva </p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
      #include <cmath>
      #include <iostream>
      
      using namespace std;
      
      int main() {
        // Declaración de variables
        string n;
        double p;
      
        // Asignación de variables
        cout << "Ingrese el nombre del producto: ";
        cin >> n;
      
        cout << "Ingrese el precio del producto sin IVA: $";
        cin >> p;
      
        if (p < 0) {
          cout << "El precio del producto debe ser mayor a 0";
        } else {
          cout << "Factura:" << endl
               << "Producto: " << n << endl
               << "Precio sin IVA: " << p << endl
               << "Precio con IVA(19%): $" << p * 1.19;
        }
        return 0;
      }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej10.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej10.png" id="img_res"> -->
</div>

`;
export default ej10