import config from "../config.js";
const p14 = /*html*/`
<h1>Parcial 1: Ejercicio 4</h1>
<p>Construya un programa que me calcule teniendo en cuenta dos cajas de 10 y 15 kg de masa respectivamente que se encuentran apoyadas sobre una superficie horizontal sin rozamiento, una apoyada en la otra. 
Si se empuja el conjunto con una fuerza de 55 N. 
</p>
<img src="./../imgs/p1ej4.png" id="img_res">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p1ej4.png" id="img_res"> -->
<p>¿Cuál es la aceleración de cada masa?
<br> ¿Qué fuerza ejercerá cada caja sobre la otra?
</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
      #include <iostream>
      #include <string>
      
      using namespace std;
      
      // Función para imprimir una fila de la tabla con caracteres ASCII
      void imprimirFila(char caracter, int longitud) {
        for (int i = 0; i < longitud; i++) {
          cout << caracter;
        }
        cout << "+" << endl;
      }
      
      int main() {
        // Declaración de variables
        double m1;
        double m2;
        double f;
        string salida;
      
        // Asignación de variables
        cout << "Ingrese la magnitud de la masa del cuerpo 1 en kilogramos: ";
        cin >> m1;
        while (m1 < 0) {
          cout << "La masa debe ser un valor positivo. Ingrese la magnitud de la "
                  "masa del cuerpo 1 en kilogramos: ";
          cin >> m1;
        }
      
        cout << "Ingrese la magnitud de la masa del cuerpo 2 en kilogramos: ";
        cin >> m2;
        while (m2 < 0) {
          cout << "La masa debe ser un valor positivo. Ingrese la magnitud de la "
                  "masa del cuerpo 2 en kilogramos: ";
          cin >> m2;
        }
      
        cout << "Ingrese la magnitud de la fuerza en newtons: ";
        cin >> f;
        while (f < 0) {
          cout << "La fuerza debe ser un valor positivo. Ingrese la magnitud de la "
                  "fuerza en newtons: ";
          cin >> f;
        }
      
        // Cálculo de datos
        double a = f / (m1 + m2);
      
        salida = "La aceleración que padecen las masas es " + to_string(a) +
                 ". Y la fuerza entre estas es " + to_string(f);
      
        // Imprimir una tabla
        cout << "+";
        imprimirFila('-', salida.length() + 2);
        cout << "| " << salida << " |" << endl;
        cout << "+";
        imprimirFila('-', salida.length() + 2);
        cout << endl;
      
        return 0;
      }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/p14.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p14.png" id="img_res"> -->
</div>

`;
export default p14