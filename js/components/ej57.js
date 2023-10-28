const ej57 = /*html*/`
<h1>Ejercicio 57 Array 10</h1>
<p>Construya un programa para la Unión de Arreglos: Crea un programa que tome dos arreglos y genere un tercer arreglo que sea la unión de los dos arreglos originales, eliminando duplicados.</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <iostream>

          using namespace std;

          int main() {
            int n1, n2;
            cout << "Ingrese el número de elementos en el primer arreglo: ";
            cin >> n1;
          
            while (n1 <= 0) {
              cout << "El tamaño del primer arreglo debe ser positivo." << endl;
              cout << "Ingrese el número de elementos en el primer arreglo: ";
              cin >> n1;
            }
          
            int arreglo1[n1];
          
            for (int i = 0; i < n1; i++) {
              cout << "Ingrese el elemento " << i + 1 << " del primer arreglo: ";
              cin >> arreglo1[i];
            }
          
            cout << "Ingrese el número de elementos en el segundo arreglo: ";
            cin >> n2;
          
            while (n2 <= 0) {
              cout << "El tamaño del segundo arreglo debe ser positivo." << endl;
              cout << "Ingrese el número de elementos en el segundo arreglo: ";
              cin >> n2;
            }
          
            int arreglo2[n2];
          
            for (int i = 0; i < n2; i++) {
              cout << "Ingrese el elemento " << i + 1 << " del segundo arreglo: ";
              cin >> arreglo2[i];
            }
          
            int unionArreglos[n1 + n2];
            int numElementosUnion = 0;
          
            for (int i = 0; i < n1; i++) {
              unionArreglos[numElementosUnion++] = arreglo1[i];
            }
          
            for (int i = 0; i < n2; i++) {
              bool duplicado = false;
              for (int j = 0; j < numElementosUnion; j++) {
                if (arreglo2[i] == unionArreglos[j]) {
                  duplicado = true;
                  break;
                }
              }
              if (!duplicado) {
                unionArreglos[numElementosUnion++] = arreglo2[i];
              }
            }
          
            cout << "Unión de arreglos sin duplicados: ";
            for (int i = 0; i < numElementosUnion; i++) {
              cout << unionArreglos[i] << " ";
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
    <img src="./../imgs/ej57.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej57.png" id="img_res"> -->
</div>

`;
export default ej57