const ej58 = /*html*/`
<h1>Ejercicio 58: Ejercicio 1 Matrices</h1>
<p>Declarar y recorrer una matriz</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
          #include <iostream>

          using namespace std;

          int main() {
            int matriz[3][3] = {{10, 20, 30}, {30, 10, 20}, {20, 30, 10}};
          
            cout << "imprimimos los valores de la matriz" << endl;
            for (int i = 0; i < 3; i++) {
              for (int j = 0; j < 3; j++) {
                cout << matriz[i][j] << " ";
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
    <img src="./../imgs/ej58.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej58.png" id="img_res"> -->
</div>

`;
export default ej58