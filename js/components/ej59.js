const ej59 = /*html*/`
<h1>Ejercicio 59: Ejercicio 2 Matrices</h1>
<p>Declarar una matriz llenarla y recorrerla</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <iostream>

          using namespace std;

          int main() {
            int filas, columnas;
          
            cout << "Ingrese el numero de filas de la matriz: ";
            cin >> filas;
          
            cout << "Ingrese el numero de columnas de la matriz: ";
            cin >> columnas;
          
            // Declaracion de la matriz
            int matriz[filas][columnas];
          
            // Leer elementos de la matriz
            cout << "Ingrese los elementos de la matriz" << endl;
          
            for (int i = 0; i < filas; i++) {
              for (int j = 0; j < columnas; j++) {
                cin >> matriz[i][j];
              }
            }
          
            // Imprimir la matriz
            cout << "La matriz ingresada es" << endl;
          
            for (int i = 0; i < filas; i++) {
              for (int j = 0; j < columnas; j++) {
                cout << matriz[i][j] << " ";
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
    <img src="./../imgs/ej59.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej59.png" id="img_res"> -->
</div>

`;
export default ej59