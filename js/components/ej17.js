import config from "../config.js";
const ej17 = /*html*/`
<h1>Ejercicio 17</h1>
<p>Desarrollar un programa para hallar el valor absoluto de un numero x </p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
      #include <cmath>
      #include <iostream>
      
      using namespace std;
      int main() {
      
        // Declaracion de variables
        float x;
        float num;
      
        // Asignacion de variables
        cout << "Ingrese el numero a calcular el valor absoluto: ";
        cin >> x;
      
        if (x < 0) {
          num = -x;
        } else {
          num = x;
        }
      
        cout << "El valor absoluto de " << x << " es " << num;
      
        return 0;
      }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej17.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej17.png" id="img_res"> -->
</div>

`;
export default ej17