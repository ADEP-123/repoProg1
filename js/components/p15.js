import config from "../config.js";
const p15 = /*html*/`
<h1>Parcial 1: Ejercicio 5</h1>
<p>Diseña un programa que solicite a un usuario su peso, altura, edad y nivel de actividad física. Luego, calcula y muestra el consumo calórico diario recomendado para mantener su peso actual teniendo en cuenta el siguiente gráfico:</p>
<img src="./../imgs/p1ej5.png" id="img_res">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p1ej5.png" id="img_res"> -->
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
        int s;
        int e;
        double p;
        int h;
        double iHarris;
        double iOMS;
        string salida;
      
        // Asignación de variables
        cout << "Seleccione su sexo de nacimiento ingresando el número entre las "
                "siguientes opciones:"
             << endl;
        cout << "1. Hombre" << endl;
        cout << "2. Mujer" << endl;
        cin >> s;
      
        while (s != 1 && s != 2) {
          cout << "Valor incorrecto, por favor seleccione su sexo de nacimiento "
                  "ingresando el número entre las siguientes opciones:"
               << endl;
          cout << "1. Hombre" << endl;
          cout << "2. Mujer" << endl;
          cin >> s;
        }
      
        cout << "Ingrese su edad en años: ";
        cin >> e;
      
        while (e < 0) {
          cout << "Valor incorrecto, por favor ingrese su edad en años: ";
          cin >> e;
        }
      
        cout << "Ingrese su peso en kilogramos: ";
        cin >> p;
      
        while (p < 0) {
          cout << "Valor incorrecto, por favor ingrese su peso en kilogramos: ";
          cin >> p;
        }
      
        cout << "Ingrese su altura en centímetros: ";
        cin >> h;
      
        while (h < 0) {
          cout << "Valor incorrecto, por favor ingrese su altura en centímetros: ";
          cin >> h;
        }
      
        // Cálculo de datos
        if (s == 1) {
          iHarris = 66 + (13.7 * p) + (5 * h) - (6.8 * e);
        
          if (e <= 3) {
            iOMS = 60.9 * p - 54;
          } else if (e > 3 && e <= 10) {
            iOMS = 22.7 * p + 495;
          } else if (e > 10 && e <= 18) {
            iOMS = 17.5 * p + 651;
          } else if (e > 18 && e <= 30) {
            iOMS = 15.3 * p + 679;
          } else if (e > 30 && e <= 60) {
            iOMS = 11.6 * p + 879;
          } else {
            iOMS = 13.5 * p + 487;
          }
        } else {
          iHarris = 655 + (9.6 * p) + (1.85 * h) - (4.7 * e);
        
          if (e <= 3) {
            iOMS = 51 * p - 51;
          } else if (e > 3 && e <= 10) {
            iOMS = 22.5 * p + 499;
          } else if (e > 10 && e <= 18) {
            iOMS = 12.2 * p + 746;
          } else if (e > 18 && e <= 30) {
            iOMS = 14.7 * p + 496;
          } else if (e > 30 && e <= 60) {
            iOMS = 8.7 * p + 829;
          } else {
            iOMS = 10.5 * p + 596;
          }
        }
      
        salida = "El índice de Harris Benedict es: " + to_string(iHarris) +
                 " y el índice de la OMS es: " + to_string(iOMS);
      
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
    <img src="./../imgs/p15.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p15.png" id="img_res"> -->
</div>

`;
export default p15