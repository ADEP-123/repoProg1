import config from "../config.js";
const ej15 = /*html*/`
<h1>Ejercicio 15</h1>
<p>Programa que calcule la nota final del curso de programación 1 </p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
        #include <cmath>;
        #include <iostream>;
        using namespace std;
        int main() {
          // Declaracion de variables
          float nota1;
          float nota2;
          float nota3;
          // Asignacion de variables
          cout << "Ingrese la primera nota: ";
          cin >> nota1;
          if (nota1 < 0 || nota1 > 5) {
            cout << "la nota 1 debe estar entre 0 y 5";
          } else {
            cout << "Ingrese la segunda nota: ";
            cin >> nota2;
            if (nota2 < 0 || nota2 > 5) {
              cout << "la nota 2 debe estar entre 0 y 5";
            } else {
              cout << "Ingrese la tercera nota: ";
              cin >> nota3;
              if (nota3 < 0 || nota3 > 5) {
                cout << "la nota 3 debe estar entre y 5";
              } else {
                cout << "la nota final es: "
                     << (nota1 * 0.3 + nota2 * 0.3 + nota3 * 0.4);
              }
            }
          }
          return 0;
        }

    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej15.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej15.png" id="img_res"> -->
</div>

`;
export default ej15