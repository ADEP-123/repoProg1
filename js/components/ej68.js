const ej68 = /*html*/`
<h1>Ejercicio 68: Ejercicio 11 Matrices</h1>
<p>Resta de matrices en una nueva matriz</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <iostream>
          #include <cstdlib>
          #include <ctime>
          
          using namespace std;
          
          int main() {
              // Semilla aleatoria basada en la hora actual
              srand(static_cast<unsigned>(time(0)));
          
              int filas = rand() % 5 + 1; 
              int columnas = rand() % 5 + 1; 
          
              int rango_minimo, rango_maximo;
          
              cout << "Ingrese el valor mínimo del rango: ";
              cin >> rango_minimo;
          
              cout << "Ingrese el valor máximo del rango: ";
              cin >> rango_maximo;
          
              int matrizA[filas][columnas];
              int matrizB[filas][columnas];
          
              // Generar números aleatorios y asignarlos a las matrices A y B
              for (int i = 0; i < filas; i++) {
                  for (int j = 0; j < columnas; j++) {
                      matrizA[i][j] = rand() % (rango_maximo - rango_minimo + 1) + rango_minimo;
                      matrizB[i][j] = rand() % (rango_maximo - rango_minimo + 1) + rango_minimo;
                  }
              }
            
              // Declaración de la matriz resultado para la resta
              int matrizResultado[filas][columnas];
            
              // Realizar la resta de las matrices A y B y almacenar el resultado en matrizResultado
              for (int i = 0; i < filas; i++) {
                  for (int j = 0; j < columnas; j++) {
                      matrizResultado[i][j] = matrizA[i][j] - matrizB[i][j];
                  }
              }
            
              // Imprimir la matriz A
              cout << "Matriz A:" << endl;
              for (int i = 0; i < filas; i++) {
                  for (int j = 0; j < columnas; j++) {
                      cout << matrizA[i][j] << " ";
                  }
                  cout << endl;
              }
            
              // Imprimir la matriz B
              cout << "Matriz B:" << endl;
              for (int i = 0; i < filas; i++) {
                  for (int j = 0; j < columnas; j++) {
                      cout << matrizB[i][j] << " ";
                  }
                  cout << endl;
              }
            
              // Imprimir la matriz resultado de la resta
              cout << "Resultado de la resta (Matriz A - Matriz B):" << endl;
              for (int i = 0; i < filas; i++) {
                  for (int j = 0; j < columnas; j++) {
                      cout << matrizResultado[i][j] << " ";
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
    <img src="imgs/ej68.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej68.png" id="img_res"> -->
</div>

`;
export default ej68