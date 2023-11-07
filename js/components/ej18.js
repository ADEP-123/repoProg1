import config from "../config.js";
const ej18 = /*html*/`
<h1>Ejercicio 18</h1>
<p>Desarrollar el programa para que al ingresar un numero me devuelva el día de la semana</p>
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
        int num; 
        string dia; 
      
        // Asignacion de variables 
        cout << "Ingrese el numero del dia: "; 
        cin >> num; 
      
        switch (num) { 
        case 1: 
          dia = "lunes"; 
          break; 

        case 2: 
          dia = "martes"; 
          break; 
        
        case 3: 
          dia = "miercoles"; 
          break; 
        
        case 4: 
          dia = "jueves"; 
          break; 
        
        case 5: 
          dia = "viernes"; 
          break; 
        
        case 6: 
          dia = "sabado"; 
          break; 
        
        case 7: 
          dia = "domingo"; 
          break; 
        
        default: 
          cout << "numero invalido"; 
        } 
      
        if (num > 0 & num <= 7) { 
          cout << "El dia es: " << dia; 
        } else{
          cout << "numero invalido";
        }
      
        return 0; 
      } 
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej18.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej18.png" id="img_res"> -->
</div>

`;
export default ej18