const pw4 = /*html*/`
<h1>Ejercicio 4 While</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
           #include <iostream>

            using namespace std;
            
            int main() {
              int numero;
            
              cout << "Ingrese desde el numero que desea realizar la cuenta regresiva: ";
              cin >> numero;
            
              while (numero <= 0) {
                cout << "Por favor, ingrese un número positivo: ";
                cin >> numero;
              }
          
              cout << "Cuenta regresiva desde " << numero << " hasta 1:" << endl;
          
              while (numero >= 1) {
                cout << numero << " ";
                numero--;
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
export default pw4