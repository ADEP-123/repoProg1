const ej49 = /*html*/`
<h1>Ejercicio 49 Array 3</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <iostream>
          using namespace std;

          void metodoBurbuja(int array[], int size) {

            for (int i = 0; i < size; i++){
              for(int j = 0; j < i ; j++){
                if(array[i] < array [j]){
                  int temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;

                }
              }
            }
          }

          int main() {
            cout << "ORGANIZACION POR METODO BURBUJA " << endl;
          
            int array[10] = {12, 48, 65, 1, 69, 22, 76, 23, 43, 98};
          
            cout << "Datos desordenados: " << endl;
            for (int i = 0; i < sizeof(array) / sizeof(array[0]); i++) {
              cout << "Dato " << i + 1 << ": " << array[i] << endl;
            };
          
            metodoBurbuja(array, 10);
          
            cout << "Datos Ordenados por burbuja: " << endl;
          
            for (int i = 0; i < sizeof(array) / sizeof(array[0]); i++) {
              cout << array[i] << "  ";
            };
          
            return 0;
          }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej49.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej49.png" id="img_res"> -->
</div>

`;
export default ej49