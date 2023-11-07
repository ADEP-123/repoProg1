const ej65 = /*html*/`
<h1>Ejercicio 65: Ejercicio 8 Matrices</h1>
<p>Suma de los elementos de cada fila</p>
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
          
            // Calcular y mostrar la suma de los elementos de cada fila
            cout << "Matriz:" << endl;
            for (int i = 0; i < 3; i++) {
              int sumaFila = 0; // Inicializar la suma de la fila en cada iteración
              for (int j = 0; j < 3; j++) {
                cout << matriz[i][j] << " ";
                sumaFila += matriz[i][j]; // Sumar los elementos de la fila
              }
              cout << "Suma de la fila " << i + 1 << ": " << sumaFila << endl;
            }
          
            return 0;
          }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej65.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej65.png" id="img_res"> -->
</div>

`;
export default ej65