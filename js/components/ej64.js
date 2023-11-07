const ej64 = /*html*/`
<h1>Ejercicio 64: Ejercicio 7 Matrices</h1>
<p>Suma de los elementos de la diagonal secundaria</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
        #include <iostream>

        using namespace std;

        int main() {
          // Declaración de la matriz
          int matriz[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
          int sumaDiagonalSecundaria = 0;
        
          // Sumar los elementos de la diagonal secundaria
          for (int i = 0; i < 3; i++) {
            sumaDiagonalSecundaria += matriz[i][2 - i];
          }
        
          // Imprimir la matriz
          cout << "Matriz:" << endl;
          for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
              cout << matriz[i][j] << " ";
            }
            cout << endl;
          }
        
          // Imprimir la suma de la diagonal principal
          cout << "Suma de la diagonal principal: " << sumaDiagonalSecundaria << endl;
        
          return 0;
        }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej64.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej64.png" id="img_res"> -->
</div>

`;
export default ej64