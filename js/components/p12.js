import config from "../config.js";
const p12 = /*html*/`
<h1>Parcial 1: Ejercicio 2</h1>
<p>A partir de los siguientes datos ingresados en código construya un programa para calcular el área y el volumen total de un cono circular truncado o tronco de cono circular recto: </p>
<img src="./../imgs/p1ej2.png" id="img_res">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p1ej2.png" id="img_res"> -->
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
      #include <iostream>
      #include <string>
      #include <cmath> 
      using namespace std;
      
      // Función para imprimir una fila de la tabla con caracteres ASCII
      void imprimirFila(char caracter, int longitud) {
        for (int i = 0; i < longitud; i++) {
          cout << caracter;
        }
        cout << "+" << endl;
      }
      
      int main() {
        // Declaracion de variables
        double r1;
        double r2;
        double h;
        string salida;
        // Asignacion de variables
      
        cout << "Ingrese el radio de la base(r1): ";
        cin >> r1;
      
        while (r1 < 0) {
          cout << "Valor incorrecto";
          cout << "Ingrese el radio de la base(r1), debe ser mayor que 0: ";
          cin >> r1;
        }
      
        cout << "Ingrese el radio del tope(r2): ";
        cin >> r2;
      
        while (r2 > r1 || r2 < 0) {
          cout << "Valor incorrecto" << endl;
          cout << "Ingrese el radio del tope(r2), r2 debe ser menor que r1 y mayor "
                  "que 0: ";
          cin >> r2;
        }
      
        cout << "Ingrese altura: ";
        cin >> h;
      
        while (h < 0) {
          cout << "Valor incorrecto" << endl;
          cout << "Ingrese la altura, recuerde que debe ser mayor que 0: ";
          cin >> h;
        }
      
        // Calculo de datos
        double a = sqrt((h * h) + (r1 - r2) * (r1 - r2));
        double ar = M_PI * ((r1 * r1) + (r2 * r2) + a * (r1 + r2));
        double v = (h * M_PI / 3) * ((r1 * r1) + (r2 * r2) + (r1 * r2));
        salida = "El volumen del cono circular truncado es de: " + to_string(v) +
                 " y el area es: " + to_string(ar);
      
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
    <img src="./../imgs/p12.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p12.png" id="img_res"> -->
</div>

`;
export default p12