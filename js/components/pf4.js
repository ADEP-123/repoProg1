const pf4 = /*html*/`
<h1>Ejercicio 3 for</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            using namespace std;
            int main() {
              int numero;
              cout << "Ingrese un número para calcular su factorial: ";
              cin >> numero;
            
              if (numero < 0) {
                cout << "El factorial no está definido para números negativos." << endl;
              } else {
                double factorial = 1;
                for (int i = 1; i <= numero; i++) {
                  factorial *= i;
                }
                cout << "El factorial de " << numero << " es: " << factorial << endl;
              }
              return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pf4