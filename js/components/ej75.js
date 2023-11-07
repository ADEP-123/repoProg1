const ej75 = /*html*/`
<h1>Ejercicio 74: Ejercicio 17 Matrices</h1>
<p style="text-align: justify;">Dadas tres matrices A (m x n), B (m x n), y C (m x n), y un escalar k, realiza las siguientes operaciones:
<br>- Calcula k * A y muestra el resultado.
<br>- Calcula A + B y muestra el resultado.
<br>- Calcula B + C y muestra el resultado.
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
            // Generar un valor aleatorio para el tamaño de la matriz
            int n = rand() % 8 + 2;
            int m = rand() % 8 + 2;
            while (m == n) {
              int m = rand() % 8 + 2;
            }
          
            int rango_minimo, rango_maximo;
          
            cout << "Ingrese el valor mínimo para los números aleatorios: ";
            cin >> rango_minimo;
          
            cout << "Ingrese el valor máximo para los números aleatorios: ";
            cin >> rango_maximo;
          
            // Generar y llenar la matriz aleatoriamente
            double matrizA[m][n];
            double matrizB[m][n];
            double matrizC[m][n];
          
            for (int i = 0; i < m; i++) {
              for (int j = 0; j < n; j++) {
                matrizA[i][j] = rand() % (rango_maximo - rango_minimo + 1) + rango_minimo;
                matrizB[i][j] = rand() % (rango_maximo - rango_minimo + 1) + rango_minimo;
                matrizC[i][j] = rand() % (rango_maximo - rango_minimo + 1) + rango_minimo;
              }
            }
          
            // Mostrar matrices originales
            cout << endl << "Matriz A Original:" << endl;
            for (int i = 0; i < m; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                cout << matrizA[i][j] << " ";
              }
              cout << "|" << endl;
            }
          
            cout << endl << "Matriz B Original:" << endl;
            for (int i = 0; i < m; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                cout << matrizB[i][j] << " ";
              }
              cout << "|" << endl;
            }
          
            cout << endl << "Matriz C Original:" << endl;
            for (int i = 0; i < m; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                cout << matrizC[i][j] << " ";
              }
              cout << "|" << endl;
            }
          
            // Matriz A por escalar
            int esc;
            cout << endl
                 << "Ingrese el el valor por el cual dese multiplicar la matriz A: ";
            cin >> esc;
          
            cout << "Matriz A por " << esc << ":" << endl;
            for (int i = 0; i < m; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                cout << matrizA[i][j] * esc << " ";
              }
              cout << "|" << endl;
            }
          
            // Matriz A + Matriz B
            cout << endl
                 << "Matriz A + Matriz B"
                 << " :" << endl;
            for (int i = 0; i < m; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                cout << matrizA[i][j] + matrizB[i][j] << " ";
              }
              cout << "|" << endl;
            }
          
            // Matriz B + Matriz C
            cout << endl
                 << "Matriz B + Matriz C"
                 << " :" << endl;
            for (int i = 0; i < m; i++) {
              cout << "| ";
              for (int j = 0; j < n; j++) {
                cout << matrizB[i][j] + matrizC[i][j] << " ";
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
    <img src="imgs/ej75.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej75.png" id="img_res"> -->
</div>

`;
export default ej75