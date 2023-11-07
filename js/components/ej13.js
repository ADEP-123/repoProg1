import config from "../config.js";
const ej13 = /*html*/`
<h1>Ejercicio 13</h1>
<p>Programa que reciba ambos lados de un triangulo y calcule la hipotenusa </p>
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
          double lado1, lado2, hipotenusa;
      
          // Entrada de datos
          cout << "Ingrese la longitud del primer lado: ";
          cin >> lado1;
      
          cout << "Ingrese la longitud del segundo lado: ";
          cin >> lado2;
      
          // Cálculo de la hipotenusa usando el teorema de Pitágoras
          hipotenusa = sqrt(pow(lado1, 2) + pow(lado2, 2));
      
          // Salida del resultado
          cout << "La longitud de la hipotenusa es: " << hipotenusa << endl;
      
          return 0;
      }

    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej13.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej13.png" id="img_res"> -->
</div>

`;
export default ej13