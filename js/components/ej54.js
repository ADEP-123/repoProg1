const ej54 = /*html*/`
<h1>Ejercicio 54 Array 7</h1>
<p>Construya un programa para Números Pares e Impares: Desarrolla un programa que separe los números pares de los números impares en un arreglo y cree dos nuevos arreglos para almacenarlos.</p>
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
            int pares[n];
            int impares[n];
            int numPares = 0;
            int numImpares = 0;
          
            for (int i = 0; i < n; i++) {
              cout << "Ingrese el elemento " << i + 1 << ": ";
              cin >> arreglo[i];
              if (arreglo[i] % 2 == 0) {
                pares[numPares] = arreglo[i];
                numPares++;
              } else {
                impares[numImpares] = arreglo[i];
                numImpares++;
              }
            }
          
            cout << "Números pares en el arreglo: ";
            for (int i = 0; i < numPares; i++) {
              cout << pares[i] << " ";
            }
            cout << endl;
          
            cout << "Números impares en el arreglo: ";
            for (int i = 0; i < numImpares; i++) {
              cout << impares[i] << " ";
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
    <img src="./../imgs/ej54.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej54.png" id="img_res"> -->
</div>

`;
export default ej54