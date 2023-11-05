import config from "../config.js";
const p11 = /*html*/`
<h1>Parcial 1: Ejercicio 1</h1>
<p>A partir de los siguientes datos ingresados por teclado construya un programa para calcular:</p>
<img src="./../imgs/p1ej1.png" id="img_res">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p1ej1.png" id="img_res"> -->
<p>Con los siguientes valores de prueba:<br>
r = 5  h = 7 <br>
Y adicional a ello, calcule cual es el mayor volumen y área del sólido, es decir valores de r y h para v max y A max. </p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
      #include <cmath>
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
      
        // Declaracion de variables
        double r;
        double h;
        double areaS;
        double volumen;
        string salArVol;
        double rmax;
        double hmax;
        string salRmaxHmax;
      
        // Asignacion de variables
        cout << "Ingrese el radio del cilindro: ";
        cin >> r;
      
        while (r < 0) {
          cout << "El radio del diclindro es menor que 0, porfavor ingrese un dato "
                  "numerico positivo:";
          cin >> r;
        }
      
        cout << "Ingrese la altura del cilindro: ";
        cin >> h;
      
        while (h < 0) {
          cout << "La altura del cilindro es menor que 0, porfavor ingrese un dato "
                  "numerico positivo: ";
          cin >> h;
        }
      
        // Calculo de datos
        areaS = 2 * M_PI * r * (r + h);
        volumen = M_PI * r * r * h;
      
        // Generar el texto
        salArVol = "El area superficial del cilindro es " + to_string(areaS) +
                   " y el volumen es " + to_string(volumen);
      
        // Calcular rmax y hmax conociendo el area
        rmax = sqrt(areaS / (6 * M_PI));
        hmax = (areaS - 2 * M_PI * (areaS / (6 * M_PI))) /
               (2 * M_PI * sqrt(areaS / (6 * M_PI)));
        salRmaxHmax = "El radio maximo es " + to_string(rmax) +
                      " y la altura maxima es  " + to_string(hmax);
      
        // Imprimir una tabla
        cout << "+";
        imprimirFila('-', salArVol.length() + 2);
        cout << "| " << salArVol << " |" << endl;
        cout << "+";
        imprimirFila('-', salArVol.length() + 2);
        cout << endl;
      
        cout << "+";
        imprimirFila('-', salRmaxHmax.length() + 2);
        cout << "| " << salRmaxHmax << " |" << endl;
        cout << "+";
        imprimirFila('-', salRmaxHmax.length() + 2);
      
        return 0;
      }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/p11.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p11.png" id="img_res"> -->
</div>

`;
export default p11