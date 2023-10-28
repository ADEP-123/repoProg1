const ej52 = /*html*/`
<h1>Ejercicio 52 Array 5</h1>
<p>Construya un programa para el Producto de Elementos: Crea un programa que calcule el producto de los elementos de un arreglo de números enteros.</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <iostream>

          using namespace std;

          int main() {
            int n;
            cout << "Ingrese el número de elementos en el arreglo: ";
            cin >> n;
          
            if (n <= 0) {
              cout << "El tamaño del arreglo debe ser positivo." << endl;
              return 1;
            }
          
            int arreglo[n];
            int producto = 1;
          
            for (int i = 0; i < n; i++) {
              cout << "Ingrese el elemento " << i + 1 << ": ";
              cin >> arreglo[i];
              producto *= arreglo[i];
            }
          
            cout << "El producto de los elementos del arreglo es: " << producto << endl;
          
            return 0;
          }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej52.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej52.png" id="img_res"> -->
</div>

`;
export default ej52