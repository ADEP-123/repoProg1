const ej53 = /*html*/`
<h1>Ejercicio 53 Array 6</h1>
<p>Construya un programa para Encontrar el Mayor y el Menor: Escribe un programa que encuentre el elemento mayor y el elemento menor en un arreglo de números enteros.</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <climits>
          #include <iostream>

          using namespace std;

          int main() {
            int n;
            cout << "Ingrese el número de elementos en el arreglo: ";
            cin >> n;
          
            while (n <= 0) {
              cout << "El tamaño del arreglo debe ser positivo." << endl;
              cout << "Ingrese el número de elementos en el arreglo: ";
              cin >> n;
            }
          
            int arreglo[n];
          
            for (int i = 0; i < n; i++) {
              cout << "Ingrese el elemento " << i + 1 << ": ";
              cin >> arreglo[i];
            }
          
            int mayor = INT_MIN;
            int menor = INT_MAX;
          
            for (int i = 0; i < n; i++) {
              if (arreglo[i] > mayor) {
                mayor = arreglo[i];
              }
              if (arreglo[i] < menor) {
                menor = arreglo[i];
              }
            }
          
            cout << "El elemento mayor en el arreglo es: " << mayor << endl;
            cout << "El elemento menor en el arreglo es: " << menor << endl;
          
            return 0;
          }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej53.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej53.png" id="img_res"> -->
</div>

`;
export default ej53