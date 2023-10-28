const ej56 = /*html*/`
<h1>Ejercicio 56 Array 9</h1>
<p>Construya un programa para la Inversión de un Arreglo: Desarrolla un programa que invierta el orden de los elementos en un arreglo. Por ejemplo, [1, 2, 3, 4] se convertiría en [4, 3, 2, 1]</p>
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
          
            for (int i = 0; i < n / 2; i++) {
              int temp = arreglo[i];
              arreglo[i] = arreglo[n - i - 1];
              arreglo[n - i - 1] = temp;
            }
          
            cout << "Arreglo invertido: ";
            for (int i = 0; i < n; i++) {
              cout << arreglo[i] << " ";
            }
            cout << endl;
          
            return 0;
          }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej56.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej56.png" id="img_res"> -->
</div>

`;
export default ej56