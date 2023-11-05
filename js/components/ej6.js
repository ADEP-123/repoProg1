import config from "../config.js";
const ej6 = /*html*/`
<h1>Ejercicio 6</h1>
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
        // Declaracion de variables
        double k;
      
        // Asignacion de variables
        cout << "Ingrese la temperatura en grados kelvin: ";
        cin >> k;
      
        if(k<0){
          cout<<"Los grados Kelvin no pueden ser negativos";
        }else{  
        cout << "Los grados Centigrados son: " << (k - 273.15);
        }
      
      
        return 0;
      }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej6.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej6.png" id="img_res"> -->
</div>

`;
export default ej6