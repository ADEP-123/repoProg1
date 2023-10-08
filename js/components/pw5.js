const pw5 = /*html*/`
<h1>Ejercicio 5 While</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
           #include <iostream>

            using namespace std;
            
            int main() {
              int num;
              cout << "Ingrese el numero al que quiere calcularle los digitos, debe ser "
                      "mayor a 1"
                   << endl;
              cin >> num;
              int digitos = 0;
            
              while (num >= 1) {
                num = num / 10;
                digitos += 1;
              }
          
              cout << "El total de digitos es: " << digitos << endl;
          
              return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pw5