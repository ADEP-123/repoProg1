const ej73 = /*html*/`
<h1>Ejercicio 73: Ejercicio 16 Matrices</h1>
<p>Dada una matriz cuadrada A (n x n), calcula su determinante y encuentra el cofactor de un elemento específico de la matriz. Proporciona el valor del determinante y el cofactor.</p>
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
            double determinante = 1.0;
            // Semilla aleatoria basada en la hora actual
            srand(static_cast<unsigned>(time(0)));
          
            int n = rand() % 7 + 2; // Generar un valor aleatorio para el tamaño de la
                                    // matriz cuadrada (entre 2 y 6)
            int rango_minimo, rango_maximo;
          
            cout << "Ingrese el valor mínimo para los números aleatorios: ";
            cin >> rango_minimo;
          
            cout << "Ingrese el valor máximo para los números aleatorios: ";
            cin >> rango_maximo;
          
            // Generar y llenar la matriz aleatoriamente
            double matriz[n][n];
            double matrizTriang[n][n];
            for (int i = 0; i < n; i++) {
              for (int j = 0; j < n; j++) {
                matriz[i][j] = rand() % (rango_maximo - rango_minimo + 1) + rango_minimo;
              }
            }
          
            // Imprimir la matriz original
            cout << endl << "Matriz Original:" << endl;
            for (int i = 0; i < n; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                cout << matriz[i][j] << " ";
              }
              cout << "|" << endl;
            }
          
            // Realizar el cálculo del determinante
            cout << endl
                 << "Para poder calcular el determinante de una matriz nxn se hace uso "
                    "del teorema de matriz triangular"
                 << endl
                 << "Este teorema dice que si una matriz es triangular superior o "
                    "inferior el determinante sera el producto de los componentes de su "
                    "diagonal principal"
                 << endl;
            // Comprobar si la matriz es triangular superior
            bool esTriangularSuperior = true;
            for (int i = 0; i < n; i++) {
              for (int j = 0; j < i; j++) {
                if (matriz[i][j] != 0) {
                  esTriangularSuperior = false;
                  break;
                }
              }
              if (!esTriangularSuperior) {
                break;
              }
            }
            if (esTriangularSuperior) {
              cout << endl << "ESTA MATRIZ ES TRIANGULAR SUPERIOR" << endl;
            } else {
              cout << endl << "ESTA MATRIZ NO ES TRIANGULAR SUPERIOR" << endl;
            }
          
            // Comprobar si la matriz es triangular inferior
            bool esTriangularInferior = true;
            for (int i = 0; i < n; i++) {
              for (int j = i + 1; j < n; j++) {
                if (matriz[i][j] != 0) {
                  esTriangularInferior = false;
                  break;
                }
              }
              if (!esTriangularInferior) {
                break;
              }
            }
            if (esTriangularInferior) {
              cout << endl << "ESTA MATRIZ ES TRIANGULAR INFERIOR" << endl;
            } else {
              cout << endl << "ESTA MATRIZ NO ES TRIANGULAR INFERIOR" << endl;
            }
          
            // Calcular el determinante
            if (esTriangularSuperior || esTriangularInferior) {
              // La matriz es triangular superior o inferior, el determinante es el
              // producto de la diagonal
              for (int i = 0; i < n; i++) {
                determinante *= matriz[i][i];
              }
            } else {
              // Crear una copia independiente de la matriz original en matrizTriang
              for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                  matrizTriang[i][j] = matriz[i][j];
                }
              }
            
              cout << endl
                   << "Debido a que la matriz no es triangular superior o inferior la "
                      "volveremos triangular inferior"
                   << endl;
              // Convertir la matriz en triangular inferior usando eliminación de Gauss
              for (int i = 0; i < n; i++) {
                if (matrizTriang[i][i] == 0.0) {
                  cout << endl
                       << "El determinante es cero. La matriz no es inversible." << endl;
                  return 0;
                }
                for (int j = i + 1; j < n; j++) {
                  double factor = matrizTriang[j][i] / matrizTriang[i][i];
                  for (int k = i; k < n; k++) {
                    matrizTriang[j][k] -= factor * matrizTriang[i][k];
                  }
                }
                determinante *= matrizTriang[i][i];
              }
            
              cout << endl << "Matriz triangulizada" << endl;
              for (int i = 0; i < n; i++) {
                cout << "| ";
                for (int j = 0; j < n; j++) {
                  cout << matrizTriang[i][j] << " ";
                }
                cout << "|" << endl;
              }
            }
          
            // Imprimir el determinante
            cout << endl << "Determinante de la matriz: " << determinante << endl;
          
            // Mostrar matriz de cofactores
            int fila, columna;
            cout << endl
                 << "Ingrese la fila del elemento del cual desea calcular el cofactor: ";
            cin >> fila;
            cout << "Ingrese la columna del elemento del cual desea calcular el "
                    "cofactor: ";
            cin >> columna;
          
            if (fila >= 1 && fila <= n && columna >= 1 && columna <= n) {
              // Ajustamos a índices base 0
              fila--;
              columna--;
            
              // Creamos una submatriz eliminando la fila y columna seleccionada
              double submatriz[n - 1][n - 1];
              int sub_i = 0, sub_j = 0;
              for (int i = 0; i < n; i++) {
                if (i == fila)
                  continue;
                for (int j = 0; j < n; j++) {
                  if (j == columna)
                    continue;
                  submatriz[sub_i][sub_j] = matriz[i][j];
                  sub_j++;
                }
                sub_i++;
                sub_j = 0;
              }
            
              // Calcular el cofactor
              int cofactor = (fila + columna) % 2 == 0 ? 1 : -1;
            
              // Mostrar la submatriz resultante
              cout << endl
                   << "Submatriz excluyendo la fila " << fila + 1 << " y la columna "
                   << columna + 1 << ":" << endl;
              for (int i = 0; i < n - 1; i++) {
                cout << "| ";
                for (int j = 0; j < n - 1; j++) {
                  cout << submatriz[i][j] << " ";
                }
                cout << "|" << endl;
              }
            
              cout << "Cofactor de la posición (" << fila + 1 << ", " << columna + 1
                   << "): " << cofactor * determinante << endl;
            } else {
              cout << "Posición fuera de los límites de la matriz." << endl;
            }
          
            return 0;
          }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej73.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej73.png" id="img_res"> -->
</div>

`;
export default ej73