import config from "../config.js";
const p17 = /*html*/`
<h1>Parcial 1: Ejercicio 7</h1>
<p>Una versión mejorada del índice de masa corporal es la variación del peso cuando una mujer se encuentra en estado de gestación, ésta viene dada por algunas alteraciones en el programa anterior.</p>
<img src="./../imgs/p1ej7.png" id="img_res">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p1ej7.png" id="img_res"> -->
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
          int cb;
          double imc;
          double pp;
          double pa;
          double se;
          double ppsmin;
          double ppsmax;
          double pprmin;
          double pprmax;
          string salida;
      
          // Asignación de variables
          cout << "Seleccione la cantidad de bebés (1 o 2): ";
          cin >> cb;
      
          while (cb != 1 && cb != 2) {
              cout << "Valor incorrecto, por favor seleccione la cantidad de bebés (1 o 2): ";
              cin >> cb;
          }
        
          cout << "Ingrese el peso antes del embarazo en kilogramos: ";
          cin >> pp;
        
          while (pp < 0) {
              cout << "Valor incorrecto, por favor ingrese el peso antes del embarazo en kilogramos: ";
              cin >> pp;
          }
        
          cout << "Ingrese el peso actual: ";
          cin >> pa;
        
          while (pa < 0) {
              cout << "Valor incorrecto, por favor ingrese el peso actual: ";
              cin >> pa;
          }
        
          cout << "Ingrese su IMC: ";
          cin >> imc;
        
          while (imc < 0) {
              cout << "Valor incorrecto, por favor ingrese su IMC: ";
              cin >> imc;
          }
        
          cout << "Ingrese las semanas de embarazo: ";
          cin >> se;
        
          while (se < 0) {
              cout << "Valor incorrecto, por favor ingrese las semanas de embarazo: ";
              cin >> se;
          }
        
          double pg = pa - pp;
        
          if (cb == 1) {
              if (imc < 18.5) {
                  ppsmin = 12.5 / 39;
                  ppsmax = 18 / 39;
              } else if (imc >= 18.5 && imc < 25) {
                  ppsmin = 11.5 / 39;
                  ppsmax = 16 / 39;
              } else if (imc >= 25 && imc < 30) {
                  ppsmin = 7 / 39;
                  ppsmax = 11.5 / 39;
              } else if (imc >= 30) {
                  ppsmin = 5 / 39;
                  ppsmax = 9 / 39;
              }
          } else {
              if (imc < 18.5) {
                  salida = "No existen datos suficientes para realizar el cálculo";
              } else if (imc >= 18.5 && imc < 25) {
                  ppsmin = 16.8 / 39;
                  ppsmax = 24.5 / 39;
              } else if (imc >= 25 && imc < 30) {
                  ppsmin = 14.1 / 39;
                  ppsmax = 22.7 / 39;
              } else if (imc >= 30) {
                  ppsmin = 11 / 39;
                  ppsmax = 19.1 / 39;
              }
          }
        
          if (cb != 2 || imc >= 18.5) {
              pprmin = ppsmin * se;
              pprmax = ppsmax * se;
          
              if (pg < pprmin) {
                  salida = "El peso ganado por el paciente es menor que el recomendado";
              } else if (pprmin >= pg && pg <= pprmax) {
                  salida = "El peso ganado está dentro del rango de lo esperado";
              } else {
                  salida = "El peso ganado es superior a lo recomendado";
              }
          }
        
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
    <img src="./../imgs/p17.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p17.png" id="img_res"> -->
</div>

`;
export default p17