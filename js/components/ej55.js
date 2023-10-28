const ej55 = /*html*/`
<h1>Ejercicio 55 Array 8</h1>
<p>Construya un programa para Eliminar Duplicados: Crea un programa que elimine los elementos duplicados en un arreglo.</p>
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
            int arregloSinDuplicados[n]; 
            int numSinDuplicados = 0;  
          
            for (int i = 0; i < n; i++) {
              cout << "Ingrese el elemento " << i + 1 << ": ";
              cin >> arreglo[i];
            
              bool duplicado = false;
              for (int j = 0; j < numSinDuplicados; j++) {
                if (arreglo[i] == arregloSinDuplicados[j]) {
                  duplicado = true;
                  break;
                }
              }
            
              if (!duplicado) {
                arregloSinDuplicados[numSinDuplicados] = arreglo[i];
                numSinDuplicados++;
              }
            }
          
            cout << "Arreglo sin elementos duplicados: ";
            for (int i = 0; i < numSinDuplicados; i++) {
              cout << arregloSinDuplicados[i] << " ";
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
    <img src="./../imgs/ej55.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej55.png" id="img_res"> -->
</div>

`;
export default ej55