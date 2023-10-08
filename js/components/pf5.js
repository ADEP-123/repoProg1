const pf5 = /*html*/`
<h1>Ejercicio 5 for</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
           #include <cmath>
            #include <iostream>
            #include <string>
            using namespace std;
            int main() {
              cout << "Tabla de Números Pares del 0 al 100" << endl;
              // Imprimir encabezados de columna
              cout << "+-----------+" << endl;
              cout << "|   Pares   |" << endl;
              cout << "+-----------+" << endl;
              for (int i = 0; i <= 100; i++) {
                // Imprimir fila de datos
                if (i % 2 == 0) {
                  if (i < 10) {
                    cout << "| " << i << "         | ";
                  } else if (i < 100) {
                    cout << "| " << i << "        | ";
                  } else {
                    cout << "| " << i << "       | ";
                  }
                  cout << std::endl;
                }
              }
          
              // Imprimir línea inferior de la tabla
              cout << "+----------+" << endl;
          
              return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pf5