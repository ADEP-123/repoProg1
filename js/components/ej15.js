import config from "../config.js";
const ej14 = /*html*/`
<h1>Ejercicio 14</h1>
<p>Diseñar un algoritmo que identifique si un año es bisiesto <br>
Basados en la información en línea un año bisiesto es aquel que es divisible por 4 pero no por 100 o es divisible por 4, por 100 y por 400. </p>
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
        int n; 
      
        // Asignacion de variables 
        cout << "Ingrese el año de interes\n "; 
        cin >> n; 
      
        if (n % 4 == 0) { 
          if (n % 100 != 0) { 
            cout << "El año " << n << " SI es bisiesto"; 
          } else { 
            if (n % 400 == 0) { 
              cout << "El año " << n << " SI es bisiesto"; 
            } else { 
              cout << "El año " << n << " NO es bisiesto"; 
            } 
          } 
        } else { 
          cout << "El año " << n << " NO es bisiesto"; 
        } 
      
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