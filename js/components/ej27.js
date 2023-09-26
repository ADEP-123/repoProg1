const ej27 = /*html*/`
<h1>Ejercicio 27</h1>
<p>Imprimiendo numeros del 50 al 100</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    #include <cmath>
    #include <iostream>
    #include <string>
    using namespace std;
    
    int main() {
      cout << "Tabla de Números del 50 al 100" << endl;
    
      // Imprimir encabezados de columna
      cout << "+-----------+" << endl;
      cout << "|  Numeros  |" << endl;
      cout << "+-----------+" << endl;
    

      for (int i = 50; i <= 100; i++) {
        // Imprimir fila de datos
    
        if (i < 10) {
          cout << "| " << i << "         | ";
        } else if (i < 100) {
          cout << "| " << i << "        | ";
        } else {
          cout << "| " << i << "       | ";
        }
        cout << std::endl;
      }
    
      // Imprimir línea inferior de la tabla
      cout << "+-----------+" << endl;
    
      return 0;
    }
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej27.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej27.png" id="img_res"> -->
</div>

`;
export default ej27