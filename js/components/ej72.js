const ej72 = /*html*/`
<h1>Ejercicio 72: Ejercicio 15 Matrices</h1>
<p>Dada una matriz cuadrada A (n x n), encuentra su matriz inversa si existe. Si no es inversible, explica por qué. Muestra el cálculo detallado y proporciona la matriz inversa si es posible</p>
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
            cout << "Matriz Original:" << endl;
            for (int i = 0; i < n; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                cout << matriz[i][j] << " ";
              }
              cout << "|" << endl;
            }
          
            // Realizar el cálculo de la matriz inversa
            cout << "Para poder calcular el determinante de una matriz nxn se hace uso "
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
              cout << "ESTA MATRIZ ES TRIANGULAR SUPERIOR" << endl;
            } else {
              cout << "ESTA MATRIZ NO ES TRIANGULAR SUPERIOR" << endl;
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
              cout << "ESTA MATRIZ ES TRIANGULAR INFERIOR" << endl;
            } else {
              cout << "ESTA MATRIZ NO ES TRIANGULAR INFERIOR" << endl;
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
            
              cout << "Debido a que la matriz no es triangular superior o inferior la "
                      "volveremos triangular inferior"
                   << endl;
              // Convertir la matriz en triangular inferior usando eliminación de Gauss
              for (int i = 0; i < n; i++) {
                if (matrizTriang[i][i] == 0.0) {
                  cout << "El determinante es cero. La matriz no es inversible." << endl;
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
            
              cout << "Matriz triangulizada" << endl;
              for (int i = 0; i < n; i++) {
                cout << "| ";
                for (int j = 0; j < n; j++) {
                  cout << matrizTriang[i][j] << " ";
                }
                cout << "|" << endl;
              }
            }
          
            // Imprimir el determinante
            cout << "Determinante de la matriz: " << determinante << endl
                 << "Como se puede ver la matriz tiene determinante diferente de 0 por "
                    "lo cual es invertible, para eso utilizaremos gauss-jordan"
                 << endl
                 << "Primero agregamos la matriz identidad a la derecha" << endl;
            int doubleDim = 2 * n;
            double matProcInv[doubleDim][doubleDim];
          
            for (int i = 0; i < n; i++) {
              for (int j = 0; j < doubleDim; j++) {
                if (j < n) {
                  matProcInv[i][j] = matriz[i][j];
                } else {
                  if (i == (j - n)) {
                    matProcInv[i][j] = 1;
                  } else {
                    matProcInv[i][j] = 0;
                  }
                }
              }
              /// Agrega la matriz identidad en la parte derecha
            }
            cout << "Matriz con la identidad" << endl;
            for (int i = 0; i < n; i++) {
              cout << "| ";
              for (int j = 0; j < doubleDim; j++) {
                cout << matProcInv[i][j] << " ";
                if (j == n - 1) {
                  cout << "|";
                }
              }
              cout << "|" << endl;
            }
          
            // Realizar operaciones de fila para obtener la matriz inversa
            for (int i = 0; i < n; i++) {
              double pivot = matProcInv[i][i];
            
              // Dividir la fila actual por el valor del pivote
              for (int j = 0; j < 2 * n; j++) {
                matProcInv[i][j] /= pivot;
              }
            
              // Hacer ceros en las demás filas
              for (int k = 0; k < n; k++) {
                if (k != i) {
                  double factor = matProcInv[k][i];
                  for (int j = 0; j < 2 * n; j++) {
                    matProcInv[k][j] -= factor * matProcInv[i][j];
                  }
                }
              }
            }
          
            // La matriz inversa se encuentra en la parte derecha de la matriz extendida
            double matInv[n][n];
            cout << "Matriz Inversa:" << endl;
            for (int i = 0; i < n; i++) {
              cout << "| ";
              for (int j = 0; j < doubleDim; j++) {
                cout << matProcInv[i][j] << " ";
                if (j == n - 1) {
                  cout << "|";
                }
                if (j >= n) {
                  matInv[i][j - n] = matProcInv[i][j];
                }
              }
              cout << "|" << endl;
            }
          
            cout << "Siendo la matriz inversa entonces:" << endl;
            for (int i = 0; i < n; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                cout << matInv[i][j] << " ";
              }
              cout << "|" << endl;
            }
          
            cout << endl
                 << "Para comprobar que efectivamente esta es la matriz inversa la "
                    "multiplicamos por la original y comprobamos que de la identidad"
                 << endl;
            double matrizResultado[n][n];
            for (int i = 0; i < n; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                matrizResultado[i][j] = 0;
                for (int k = 0; k < n; k++) {
                  matrizResultado[i][j] += matInv[i][k] * matriz[k][j];
                }
                  cout << matrizResultado[i][j] << " ";
              }
              cout << " |" << endl;
            }
          
          
            return 0;
          }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej72.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej72.png" id="img_res"> -->
</div>

`;
export default ej72