const ej70 = /*html*/`
<h1>Ejercicio 70: Ejercicio 13 Matrices</h1>
<p>Multiplicacion por escalar</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <iostream>

          using namespace std;

          int main() {
            int filas, columnas;
            int escalar;
          
            // Solicitar la cantidad de filas y columnas al usuario
            cout << "Ingrese el número de filas: ";
            cin >> filas;
            cout << "Ingrese el número de columnas: ";
            cin >> columnas;
          
            // Solicitar al usuario que ingrese el escalar
            cout << "Ingrese el escalar para multiplicar la matriz: ";
            cin >> escalar;
          
            // Declaración de la matriz
            int matriz[filas][columnas];
          
            // Solicitar al usuario que ingrese los elementos de la matriz
            cout << "Ingrese los elementos de la matriz:" << endl;
            for (int i = 0; i < filas; i++) {
              for (int j = 0; j < columnas; j++) {
                cout << "Dato[" << i+1 << "][" << j+1 << "]: ";
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
          
            // Multiplicar la matriz por el escalar
            for (int i = 0; i < filas; i++) {
              for (int j = 0; j < columnas; j++) {
                matriz[i][j] *= escalar;
              }
            }
          
            // Imprimir la matriz multiplicada por el escalar
            cout << "Matriz multiplicada por el escalar:" << endl;
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
    <img src="./../imgs/ej70.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej70.png" id="img_res"> -->
</div>

`;
export default ej70