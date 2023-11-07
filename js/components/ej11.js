import config from "../config.js";
const ej11 = /*html*/`
<h1>Ejercicio 11</h1>
<p>Desarrollar un programa que reciba la edad y devuelva si es mayor o menor de edad </p>
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
        int edad;
      
        // Asignacion de variables
        cout << "Ingrese la edad de la persona: ";
        cin >> edad;
      
        if(edad>=0 && edad<=118){
          if(edad>=18){
            cout << "La persona es mayor de edad";
          }else{
            cout << "La persona es menor de edad";
          }
        }else{  
        cout << "Edad ingresada invalida";
        }
      
      
        return 0;
      }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej11.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej11.png" id="img_res"> -->
</div>

`;
export default ej11