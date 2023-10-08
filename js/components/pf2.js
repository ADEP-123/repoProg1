const pf2 = /*html*/`
<h1>Ejercicio 2 for</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            using namespace std;

            int main() {
              int numero;
            
              cout << "Ingrese un número para obtener su tabla de multiplicar: ";
              cin >> numero;
            
              cout << "Tabla de Multiplicar del " << numero << ":" << endl;
              cout << "+------------+------------+" << endl;
              cout << "|   Numero   |  Resultado |" << endl;
              cout << "+------------+------------+" << endl;
            
              for (int i = 1; i <= 10; i++) {
                int resultado = numero * i;
                if (i < 10) {
                  cout << "|   " << numero << " x " << i << "    |    " << resultado;
                } else {
                  cout << "|   " << numero << " x " << i << "   |    " << resultado;
                }
            
                // Alineación de los resultados para que la tabla sea uniforme
                if (resultado < 10) {
                  cout << "       |" << endl;
                } else {
                  cout << "      |" << endl;
                }
              }
          
              cout << "+------------+------------+" << endl;
          
              return 0;
            }

        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pf2