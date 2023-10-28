const ej50 = /*html*/`
<h1>Ejercicio 50 Array 3</h1>
<p>Construya un programa para Ordenar Descendentemente: Modifica el programa del ejercicio 49 para ordenar el arreglo en orden descendente utilizando el método de ordenamiento burbuja.</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <iostream>

          using namespace std;

          void metodoBurbuja(int arr[], int n) {
            for (int i = 0; i < n - 1; i++) {
              for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                  // Intercambiar elementos si están en el orden incorrecto
                  int temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
                }
              }
            }
          }

          int main() {
            cout << "ORGANIZACION POR METODO BURBUJA" << endl;
          
            int array[10] = {12, 48, 65, 1, 69, 22, 76, 23, 43, 98};
          
            cout << "Datos desordenados: " << endl << endl;
            for (int i = 0; i < sizeof(array) / sizeof(array[0]); i++) {
              cout << "Dato " << i + 1 << ": " << array[i] << endl;
            }
          
            metodoBurbuja(array, 10);
          
            cout << endl << "Datos Ordenados por burbuja (descendente): " << endl;
            for (int i = 0; i < sizeof(array) / sizeof(array[0]); i++) {
              cout << array[i] << "  ";
            }
          
            return 0;
          }

        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej50.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej50.png" id="img_res"> -->
</div>

`;
export default ej50