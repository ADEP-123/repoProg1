const ej67 = /*html*/`
<h1>Ejercicio 67: Ejercicio 10 Matrices</h1>
<p>Suma de los elementos sobre la diagonal principal y bajo la diagonal secundaria</p>
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
        
          // Inicializar las sumas sobre la diagonal principal y bajo la diagonal secundaria
          int sumaSobreDiagonal = 0;
          int sumaBajoDiagonalSecundaria = 0;
        
          // Calcular la suma de los elementos sobre la diagonal principal y bajo la diagonal secundaria
          for (int i = 0; i < filas; i++) {
            for (int j = 0; j < columnas; j++) {
              if (i < j) {
                sumaSobreDiagonal += matriz[i][j];
              } else if (i > j) {
                sumaBajoDiagonalSecundaria += matriz[i][j];
              }
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
        
          // Imprimir la suma sobre la diagonal principal y bajo la diagonal secundaria
          cout << "Suma sobre la diagonal principal: " << sumaSobreDiagonal << endl;
          cout << "Suma bajo la diagonal secundaria: " << sumaBajoDiagonalSecundaria << endl;
        
          return 0;
        }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej67.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej67.png" id="img_res"> -->
</div>

`;
export default ej67