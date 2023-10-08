const pw9 = /*html*/`
<h1>Ejercicio 9 While</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            using namespace std;
            int main() {
              int numero;
              int contadorPares = 0;
              int contadorImpares = 0;
            
              cout << "Ingrese una serie de números (ingrese 0 para detenerse):" << endl;
              cin >> numero;
            
              while (numero != 0) {
                if (numero % 2 == 0) {
                  contadorPares++;
                } else {
                  contadorImpares++;
                }
                cout << "Ingrese el siguiente numero" << endl;
                cin >> numero;
              }
          
              cout << "Cantidad de números pares: " << contadorPares << endl;
              cout << "Cantidad de números impares: " << contadorImpares << endl;
          
              return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pw9