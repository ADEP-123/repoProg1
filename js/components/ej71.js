const ej71 = /*html*/`
<h1>Ejercicio 71: Ejercicio 14 Matrices</h1>
<p>Dadas dos matrices A y B de dimensiones (m x n) y (n x p), respectivamente, calcula el producto de matrices A * B. Proporciona el resultado en términos de una nueva matriz C. Asegúrate de que las dimensiones de las matrices sean adecuadas para la multiplicación y muestra el proceso paso a paso.</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <cstdlib>
          #include <ctime>
          #include <iostream>
          
          using namespace std;
          
          int main() {
          
            // Semilla aleatoria basada en la hora actual
            srand(static_cast<unsigned>(time(0)));
          
            int m = rand() % 5 + 1;
            int n = rand() % 5 + 1;
            int p = rand() % 5 + 1;
          
            int rango_minimo, rango_maximo;
          
            cout << "Ingrese el valor mínimo para llenar las matrices: ";
            cin >> rango_minimo;
          
            cout << "Ingrese el valor máximo para llenar las matrices: ";
            cin >> rango_maximo;
          
            int matrizA[m][n];
            int matrizB[n][p];
          
            // Generar números aleatorios y asignarlos a las matrices A y B
            for (int i = 0; i < m; i++) {
              for (int j = 0; j < n; j++) {
                matrizA[i][j] = rand() % (rango_maximo - rango_minimo + 1) + rango_minimo;
                for (int k = 0; k < p; k++) {
                  matrizB[j][k] =
                      rand() % (rango_maximo - rango_minimo + 1) + rango_minimo;
                }
              }
            }
            // Mostrar matrices originales
            cout << "Matriz A: " << endl;
            for (int i = 0; i < m; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                cout << matrizA[i][j] << " ";
              }
              cout << "|" << endl;
            }
          
            cout << endl << "Matriz B: " << endl;
            for (int i = 0; i < n; i++) {
              cout << "| ";
              for (int j = 0; j < p; j++) {
                cout << matrizB[i][j] << " ";
              }
              cout << "|" << endl;
            }
          
            // Declaración de la matriz resultado para la resta
            int matrizResultado[m][p];
          
            // Realizar la multiplicacion paso a paso para mostrarlo en pantalla
            cout << endl
                 << "Proceso:" << endl
                 << "Primero se operan filas por columnas así:" << endl;

            for (int i = 0; i < m; i++) {
              cout << "| ";
              for (int j = 0; j < p; j++) {
                for (int k = 0; k < n; k++) {
                  cout << matrizA[i][k] << " x " << matrizB[k][j];
                  if (k < n - 1) {
                    cout << " + ";
                  } else {
                    if (j < p - 1) {
                      cout << "   ";
                    }
                  }
                }
              }
              cout << " |" << endl;
            }
          
            cout << endl << "Multiplicamos:" << endl;
            for (int i = 0; i < m; i++) {
              cout << "| ";
              for (int j = 0; j < p; j++) {
                for (int k = 0; k < n; k++) {
                  cout << matrizA[i][k] * matrizB[k][j];
                  if (k < n - 1) {
                    cout << " + ";
                  } else {
                    if (j < p - 1) {
                      cout << "   ";
                    }
                  }
                }
              }
              cout << " |" << endl;
            }
          
            cout << endl << "Sumamos:" << endl;
            for (int i = 0; i < m; i++) {
              cout << "| ";
              for (int j = 0; j < p; j++) {
                matrizResultado[i][j] = 0;
                for (int k = 0; k < n; k++) {
                  matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
                }
                cout << matrizResultado[i][j] << " ";
              }
              cout << "|" << endl;
            }
          
            return 0;
          }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej71.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej71.png" id="img_res"> -->
</div>

`;
export default ej71