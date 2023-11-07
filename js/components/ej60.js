const ej60 = /*html*/`
<h1>Ejercicio 60: Ejercicio 3 Matrices</h1>
<p>Declarar matriz y llenarla con numeros aleatorios</p>
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
            // Semilla aleatoria basada en la hora actual
            srand(static_cast<unsigned>(time(0)));
          
            int filas, columnas;
            int rango_minimo, rango_maximo;
          
            cout << "Ingrese el numero de filas: ";
            cin >> filas;
          
            cout << "Ingrese el numero de columnas: ";
            cin >> columnas;
          
            cout << "Ingrese el valor minimo del rango: ";
            cin >> rango_minimo;
          
            cout << "Ingrese el valor maximo del rango: ";
            cin >> rango_maximo;
          
            // Declaracion de la matriz
            int matriz[filas][columnas];
          
            // Generar numeros aleatorios y asignarlos a la matriz
            for (int i = 0; i < filas; i++) {
              for (int j = 0; j < columnas; j++) {
                matriz[i][j] = rand() % (rango_maximo - rango_minimo + 1) + rango_minimo;
              }
            }
          
            // Imprimir la matriz
            cout << "La matriz generada con numeros aleatorios es: " << endl;
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
    <img src="imgs/ej60.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej60.png" id="img_res"> -->
</div>

`;
export default ej60