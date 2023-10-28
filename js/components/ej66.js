const ej66 = /*html*/`
<h1>Ejercicio 66: Ejercicio 9 Matrices</h1>
<p>Suma de los elementos de cada columna</p>
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
          
            cout << "Ingrese el número de filas: ";
            cin >> filas;
          
            cout << "Ingrese el número de columnas: ";
            cin >> columnas;
          
            cout << "Ingrese el valor mínimo del rango: ";
            cin >> rango_minimo;
          
            cout << "Ingrese el valor máximo del rango: ";
            cin >> rango_maximo;
          
            // Declaración de la matriz
            int matriz[filas][columnas];
          
            // Generar números aleatorios y asignarlos a la matriz
            for (int i = 0; i < filas; i++) {
              for (int j = 0; j < columnas; j++) {
                matriz[i][j] = rand() % (rango_maximo - rango_minimo + 1) + rango_minimo;
              }
            }
          
            // Declaración e inicialización de las sumas de cada columna
            int sumaColumnas[columnas];
          
            // Calcular la suma de cada columna
            for (int j = 0; j < columnas; j++) {
                sumaColumnas[j] = 0;
              for (int i = 0; i < filas; i++) {
                sumaColumnas[j] += matriz[i][j];
              }
            }
          
            // Imprimir la matriz
            cout << "La matriz generada con números aleatorios es: " << endl;
            for (int i = 0; i < filas; i++) {
              for (int j = 0; j < columnas; j++) {
                cout << matriz[i][j] << " ";
              }
              cout << endl;
            }
          
            // Imprimir la suma de cada columna
            cout << "Suma de cada columna: " << endl;
            for (int j = 0; j < columnas; j++) {
              cout << "Columna " << j + 1 << ": " << sumaColumnas[j] << endl;
            }
          
            return 0;
          }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej66.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej66.png" id="img_res"> -->
</div>

`;
export default ej66