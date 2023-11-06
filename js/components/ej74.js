const ej74 = /*html*/`
<h1>Ejercicio 74: Ejercicio 17 Matrices</h1>
<p style="text-align: justify;">4.	Dada una matriz cuadrada A (n x n), realiza dos operaciones:
  <br>-Encuentra la matriz traspuesta de A.
  <br>-Calcula la multiplicación de A por su propia traspuesta (A * A^T) y muestra el resultado.
<p>
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
            double matrizTranspuesta[n][n];
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
          
            cout << endl
                 << "Calculamos la transpuesta, para esto cambiamos la posicion en cada "
                    "dato de su fila por su columna"
                 << endl;
            for (int i = 0; i < n; i++) {
              for (int j = 0; j < n; j++) {
                matrizTranspuesta[i][j] = matriz[j][i];
              }
            }
            cout << endl << "Matriz Trasnpuesta:" << endl;
            for (int i = 0; i < n; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                cout << matrizTranspuesta[i][j] << " ";
              }
              cout << "|" << endl;
            }
          
            cout << endl
                 << "Ahora calculamos la multiplicacion de la matriz por su transpuesta"
                 << endl;
            double matProducto[n][n];
            cout << endl << "Matriz Producto entre la normal y su transpuesta:" << endl;
            for (int i = 0; i < n; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                  matProducto[i][j] = 0;
                for (int k = 0; k < n; k++) {
                    matProducto[i][j] += matriz[i][k] * matrizTranspuesta[k][j];
                }
                  cout << matProducto[i][j] << " ";
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
    <img src="./../imgs/ej74.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej74.png" id="img_res"> -->
</div>

`;
export default ej74