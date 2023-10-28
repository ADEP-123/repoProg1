const ej62 = /*html*/`
<h1>Ejercicio 62: Ejercicio 5 Matrices</h1>
<p>Producto entre matrices</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <iostream>

          using namespace std;

          int main() {
            // Declaracion de matrices fijas
            int matrizA[2][3] = {{1, 2, 3}, {4, 5, 6}};
            int matrizB[3][2] = {{7, 8}, {9, 10}, {11, 12}};
            // Matriz para almacenar la suma
            int resultado[2][2];
            // Realizar la suma de las matrices
            for (int i = 0; i < 2; i++) {
              for (int j = 0; j < 2; j++) {
                resultado[i][j] = 0;
                for (int k = 0; k < 3; k++) {
                  resultado[i][j] += matrizA[i][k] * matrizB[k][j];
                }
              }
            }
          
            // Imprimir la matriz resultado
            cout << "Matriz A: " << endl;
            for (int i = 0; i < 2; i++) {
              for (int j = 0; j < 3; j++) {
                cout << matrizA[i][j] << " ";
              }
              cout << endl;
            }
          
            cout << "Matriz B: " << endl;
            for (int i = 0; i < 3; i++) {
              for (int j = 0; j < 2; j++) {
                cout << matrizB[i][j] << " ";
              }
              cout << endl;
            }
          
            cout << "Producto de matrices: " << endl;
            for (int i = 0; i < 2; i++) {
              for (int j = 0; j < 2; j++) {
                cout << resultado[i][j] << " ";
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
    <img src="./../imgs/ej62.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej62.png" id="img_res"> -->
</div>

`;
export default ej62