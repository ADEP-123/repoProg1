import config from "../config.js";
const p12 = /*html*/`
<h1>Parcial 1: Ejercicio 3</h1>
<p>El efecto doppler es una variación aparente del efecto ondulatorio debido al movimiento entre el observador y el emisor:   </p>
<img src="./../imgs/p1ej3.png" id="img_res">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p1ej3.png" id="img_res"> -->
<p>De acuerdo a la siguiente ilustración, simule el escenario en el que:
<br> El emisor se acerca al receptor
<br> El emisor se aleja del receptor
<br> Los dos se mueven hacia el mismo lado
<br> Los dos se mueven en sentido contrario
</p>
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
        // Declaración de variables
        double vap;
        double vr;
        double ve;
        double fe;
        int tipo;
        string salida;
        double fr;
      
        // Asignación de variables
        cout << "Ingrese el número del tipo de caso a tratar según la siguiente "
                "lista:";
        cout << endl << " 1. El emisor se acerca al receptor";
        cout << endl << " 2. El emisor se aleja del receptor";
        cout << endl << " 3. Ambos se mueven en la misma dirección";
        cout << endl << " 4. Ambos se mueven en direcciones opuestas" << endl;
        cin >> tipo;
      
        while (tipo > 4 || tipo < 1 || tipo != floor(tipo)) {
          cout << "Opción incorrecta" << endl;
          cout << "Ingrese el número del tipo de caso a tratar según la siguiente "
                  "lista:";
          cout << endl << " 1. El emisor se acerca al receptor";
          cout << endl << " 2. El emisor se aleja del receptor";
          cout << endl << " 3. Ambos se mueven en la misma dirección";
          cout << endl << " 4. Ambos se mueven en direcciones opuestas" << endl;
          cin >> tipo;
        }
      
        // Cálculo de datos
        switch (tipo) {
        case 1:
          cout << "Ingrese el valor de la velocidad del emisor hacia el receptor: ";
          cin >> ve;
          while (ve < 0) {
            cout << "El valor de la velocidad debe ser positivo. Ingrese el valor de "
                    "la velocidad del emisor hacia el receptor: ";
            cin >> ve;
          }
        
          cout << "Ingrese el valor de la frecuencia del emisor: ";
          cin >> fe;
          while (fe < 0) {
            cout << "El valor de la frecuencia debe ser positivo. Ingrese el valor "
                    "de la frecuencia del emisor: ";
            cin >> fe;
          }
          fr = fe * ((343 + 0) / (347 - ve));
          salida =
              "El valor de la frecuencia que percibe el receptor es " + to_string(fr);
          break;
        
        case 2:
          cout << "Ingrese el valor de la velocidad del emisor en dirección opuesta "
                  "al receptor: ";
          cin >> ve;
          while (ve < 0) {
            cout << "El valor de la velocidad debe ser positivo. Ingrese el valor de "
                    "la velocidad del emisor en dirección opuesta al receptor: ";
            cin >> ve;
          }
        
          cout << "Ingrese el valor de la frecuencia del emisor: ";
          cin >> fe;
          while (fe < 0) {
            cout << "El valor de la frecuencia debe ser positivo. Ingrese el valor "
                    "de la frecuencia del emisor: ";
            cin >> fe;
          }
          fr = fe * ((343 + 0) / (347 + ve));
          salida =
              "El valor de la frecuencia que percibe el receptor es " + to_string(fr);
          break;
        
        case 3:
          cout << "Ingrese el valor de la velocidad del emisor: ";
          cin >> ve;
          while (ve < 0) {
            cout << "El valor de la velocidad del emisor debe ser positivo. Ingrese "
                    "el valor de la velocidad del emisor: ";
            cin >> ve;
          }
        
          cout << "Ingrese el valor de la velocidad del receptor: ";
          cin >> vr;
          while (vr < 0) {
            cout << "El valor de la velocidad del receptor debe ser positivo. "
                    "Ingrese el valor de la velocidad del receptor: ";
            cin >> vr;
          }
        
          cout << "Ingrese el valor de la frecuencia del emisor: ";
          cin >> fe;
          while (fe < 0) {
            cout << "El valor de la frecuencia debe ser positivo. Ingrese el valor "
                    "de la frecuencia del emisor: ";
            cin >> fe;
          }
          fr = fe * ((343 - vr) / (347 - ve));
          salida =
              "El valor de la frecuencia que percibe el receptor es " + to_string(fr);
          break;
        
        case 4:
          cout << "Ingrese el valor de la velocidad del emisor: ";
          cin >> ve;
          while (ve < 0) {
            cout << "El valor de la velocidad del emisor debe ser positivo. Ingrese "
                    "el valor de la velocidad del emisor: ";
            cin >> ve;
          }
        
          cout << "Ingrese el valor de la velocidad del receptor: ";
          cin >> vr;
          while (vr < 0) {
            cout << "El valor de la velocidad del receptor debe ser positivo. "
                    "Ingrese el valor de la velocidad del receptor: ";
            cin >> vr;
          }
        
          cout << "Ingrese el valor de la frecuencia del emisor: ";
          cin >> fe;
          while (fe < 0) {
            cout << "El valor de la frecuencia debe ser positivo. Ingrese el valor "
                    "de la frecuencia del emisor: ";
            cin >> fe;
          }
          fr = fe * ((343 - vr) / (347 + ve));
          salida =
              "El valor de la frecuencia que percibe el receptor es " + to_string(fr);
          break;
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
    <img src="./../imgs/p12.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p12.png" id="img_res"> -->
</div>

`;
export default p12