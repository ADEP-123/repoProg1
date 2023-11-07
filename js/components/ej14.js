import config from "../config.js";
const ej14 = /*html*/`
<h1>Ejercicio 14</h1>
<p>Programa que reciba un lado de un triangulo y su hipotenusa y calcule el otro lado</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
        #include <iostream>
        #include <cmath>

        using namespace std;

        int main() {
            // Declaración de variables
            double lado1, hipotenusa, lado2;
        
            // Entrada de datos
            cout << "Ingrese la longitud de un lado del triángulo: ";
            cin >> lado1;
        
            cout << "Ingrese la longitud de la hipotenusa: ";
            cin >> hipotenusa;
        
            // Cálculo del segundo lado utilizando el teorema de Pitágoras
            lado2 = sqrt(pow(hipotenusa, 2) - pow(lado1, 2));
        
            // Salida del resultado
            cout << "El valor del segundo lado del triángulo es: " << lado2 << endl;
        
            return 0;
        }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej14.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej14.png" id="img_res"> -->
</div>

`;
export default ej14