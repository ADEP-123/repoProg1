const ej69 = /*html*/`
<h1>Ejercicio 69: Ejercicio 12 Matrices</h1>
<p>Matriz transpuesta</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>

            using namespace std;

            int main() {
              int filas, columnas;
            
              // Solicitar la cantidad de filas y columnas al usuario
              cout << "Ingrese el número de filas: ";
              cin >> filas;
              cout << "Ingrese el número de columnas: ";
              cin >> columnas;
            
              // Declaración de la matriz
              int matriz[filas][columnas];
            
              // Solicitar al usuario que ingrese los elementos de la matriz
              cout << "Ingrese los elementos de la matriz:" << endl;
              for (int i = 0; i < filas; i++) {
                for (int j = 0; j < columnas; j++) {
                  cout << "Elemento[" << i + 1 << "][" << j + 1 << "]: ";
                  cin >> matriz[i][j];
                }
              }
          
              // Imprimir la matriz original
              cout << "Matriz original:" << endl;
              for (int i = 0; i < filas; i++) {
                for (int j = 0; j < columnas; j++) {
                  cout << matriz[i][j] << " ";
                }
                cout << endl;
              }
          
              // Generar la matriz transpuesta
              int matrizTranspuesta[columnas][filas];
          
              for (int i = 0; i < columnas; i++) {
                for (int j = 0; j < filas; j++) {
                  matrizTranspuesta[i][j] = matriz[j][i];
                }
              }
          
              // Imprimir la matriz transpuesta
              cout << "Matriz transpuesta:" << endl;
              for (int i = 0; i < columnas; i++) {
                for (int j = 0; j < filas; j++) {
                  cout << matrizTranspuesta[i][j] << " ";
                }
                cout << endl;
              }
          
              return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej69.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej69.png" id="img_res"> -->
</div>

`;
export default ej69