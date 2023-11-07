import config from "../config.js";
const ej12 = /*html*/`
<h1>Ejercicio 12</h1>
<p>Programa que reciba el año de nacimiento de una persona y calcule si es mayor o menor de edad</p>
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
        int añoNac;
        int edad;
      
        // Asignacion de variables
        cout << "Ingrese su año de nacimiento: ";
        cin >> añoNac;
      
        if(añoNac>=1905 && añoNac<=2023){
          edad = 2023 - añoNac;
          if(edad>=18){
            cout << "La persona es mayor de edad";
          }else{
            cout << "La persona es menor de edad";
          }
        }else{  
        cout << "Año ingresado invalido";
        }
      
      
        return 0;
      }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej12.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej12.png" id="img_res"> -->
</div>

`;
export default ej12