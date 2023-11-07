import config from "../config.js";
const ej16 = /*html*/`
<h1>Ejercicio 16</h1>
<p>Programa que al ingresar 3 números los ordene y los imprima preguntando de mayor a menor o de menor a mayor</p>
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
        float num1;
        float num2;
        float num3;
        int orden;
      
        // Asignacion de variables
        cout << "Ingrese el primer numero" << endl;
        cin >> num1;
      
        cout << "Ingrese el segundo numero" << endl;
        cin >> num2;
      
        cout << "Ingrese el tercer numero" << endl;
        cin >> num3;
      
        cout << "Ingrese como desea ordenarlo" << endl
             << "1. Si de mayor a menor" << endl
             << "2. Si de menor a mayor" << endl;
        cin >> orden;
      
        while (orden != 1 && orden != 2) {
          cout << "El orden es incorrecto, ingrese el orden segun las indicaciones:"
               << endl
               << "1. Si de mayor a menor" << endl
               << "2. Si de menor a mayor" << endl;
          cin >> orden;
        }
      
        if (orden == 1) {
          if (num1 > num2) {
            if (num2 > num3) {
              cout << "Los numeros ordenados son " << num1 << " " << num2 << " "
                   << num3;
            } else {
              if (num3 > num1) {
                cout << "Los numeros ordenados son " << num3 << " " << num1 << ""
                     << num2;
              } else {
                cout << "Los numeros ordenados son " << num1 << " " << num3 << " "
                     << num2;
              }
            }
          
          } else {
            if (num1 > num3) {
              cout << "Los numeros ordenados son " << num2 << " " << num1 << " "
                   << num3;
            } else {
              if (num3 > num2) {
                cout << "Los numeros ordenados son " << num3 << " " << num2 << " "
                     << num1;
              } else {
                cout << "Los numeros ordenados son " << num2 << " " << num3 << " "
                     << num1;
              }
            }
          }
        
        } else {
          if (num1 < num2) {
            if (num2 < num3) {
              cout << "Los numeros ordenados son " << num1 << " " << num2 << " "
                   << num3;
            } else {
              if (num3 < num1) {
                cout << "Los numeros ordenados son " << num3 << " " << num1 << ""
                     << num2;
              } else {
                cout << "Los numeros ordenados son " << num1 << " " << num3 << " "
                     << num2;
              }
            }
          
          } else {
            if (num1 < num3) {
              cout << "Los numeros ordenados son " << num2 << " " << num1 << " "
                   << num3;
            } else {
              if (num3 < num2) {
                cout << "Los numeros ordenados son " << num3 << " " << num2 << " "
                     << num1;
              } else {
                cout << "Los numeros ordenados son " << num2 << " " << num3 << " "
                     << num1;
              }
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
    <img src="./../imgs/ej16.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej16.png" id="img_res"> -->
</div>

`;
export default ej16