const ej61 = /*html*/`
<h1>Ejercicio 61: Ejercicio 4 Matrices</h1>
<p>Suma entre matrices</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <iostream>

          using namespace std;

          int main() {
            // Declaracion de matrices fijas
            int matrizA[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
            int matrizB[3][3] = {{9, 8, 7}, {6, 5, 4}, {3, 2, 1}};
            // Matriz para almacenar la suma
            int suma[3][3];
            // Realizar la suma de las matrices
            for (int i = 0; i < 3; i++) {
              for (int j = 0; j < 3; j++) {
                suma[i][j] = matrizA[i][j] + matrizB[i][j];
              }
            }
          
            // Imprimir la matriz suma
            cout << "Matriz A: " << endl;
            for (int i = 0; i < 3; i++) {
              for (int j = 0; j < 3; j++) {
                cout << matrizA[i][j] << " ";
              }
              cout << endl;
            }
          
            cout << "Matriz B: " << endl;
            for (int i = 0; i < 3; i++) {
              for (int j = 0; j < 3; j++) {
                cout << matrizB[i][j] << " ";
              }
              cout << endl;
            }
          
            cout << "Suma de Matrices: " << endl;
            for (int i = 0; i < 3; i++) {
              for (int j = 0; j < 3; j++) {
                cout << suma[i][j] << " ";
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
    <img src="imgs/ej61.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej61.png" id="img_res"> -->
</div>

`;
export default ej61