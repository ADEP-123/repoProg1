import config from "../config.js";
const p16 = /*html*/`
<h1>Parcial 1: Ejercicio 6</h1>
<p>Una entidad de salud lo ha contratado para que usted desarrolle un programa que permita al médico calcular y al usuario llevar control de su índice de masa corporal, el cuál es un indicador confiable de la gordura y se usa para identificar las categorías de peso que pueden llevar asociados problemas de salud, el cálculo viene dado a partir del peso y la estatura de la siguiente manera:</p>
<img src="imgs/p1ej6.png" id="img_res">
<!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p1ej6.png" id="img_res"> -->
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
        int u;
        double p;
        double h;
        double imc;
        string salida;
      
        // Asignación de variables
        cout << "Seleccione el tipo de usuario:" << endl;
        cout << "1. Medico" << endl;
        cout << "2. Usuario" << endl;
        cin >> u;
      
        while (u != 1 && u != 2) {
          cout << "Valor incorrecto, por favor seleccione el tipo de usuario:"
               << endl;
          cout << "1. Medico" << endl;
          cout << "2. Usuario" << endl;
          cin >> u;
        }
      
        if (u == 1) {
          cout << "Ingrese el peso del paciente en kilogramos: ";
          cin >> p;
        
          while (p < 0) {
            cout << "Valor incorrecto, por favor ingrese el peso del paciente en "
                    "kilogramos: ";
            cin >> p;
          }
        
          cout << "Ingrese la estatura del paciente en metros: ";
          cin >> h;
        
          while (h < 0) {
            cout << "Valor incorrecto, por favor ingrese la estatura del paciente en "
                    "metros: ";
            cin >> h;
          }
        
          imc = p / (h * h);
          salida = "El IMC del paciente es: " + to_string(imc) + ". El paciente ";
        } else {
          cout << "Ingrese su IMC: ";
          cin >> imc;
        
          while (imc < 0) {
            cout << "Valor incorrecto, por favor ingrese su IMC: ";
            cin >> imc;
          }
        
          cout << "+----------------------------------------------------------+" << endl;
          cout << "|                  Categorización IMC                      |" << endl;
          cout << "|----------------------------------------------------------|" << endl;
          cout << "| Bajo peso | Normal  | Sobrepeso | Obesidad | Obesidad 2  |"
               << endl;
          cout << "|----------------------------------------------------------|" << endl;
          cout << "|   <18.5   | 18.5-24.9 | 25.0-29.9 | 30-34.9 |     >35    |"
               << endl;
          cout << "+----------------------------------------------------------+" << endl;
        }
      
        if (imc < 18.5) {
          salida += "se encuentra en la categoría 'bajo peso'";
        } else if (imc >= 18.5 && imc < 25) {
          salida += "se encuentra en la categoría 'normal'";
        } else if (imc >= 25 && imc < 30) {
          salida += "se encuentra en la categoría 'sobrepeso'";
        } else if (imc >= 30 && imc < 35) {
          salida += "se encuentra en la categoría 'obesidad'";
        } else if (imc >= 35) {
          salida += "se encuentra en la categoría 'obesidad 2'";
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
    <img src="imgs/p16.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/p16.png" id="img_res"> -->
</div>

`;
export default p16