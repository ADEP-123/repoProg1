const pf7 = /*html*/`
<h1>Ejercicio 6 for</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            #include <string>
            using namespace std;
            int main() {
              string cadena;
            
              cout << "Ingrese una cadena de texto: ";
              getline(cin, cadena);
            
              cout << "La cadena en orden inverso es: " << endl;
            
              for (int i = cadena.length() - 1; i >= 0; --i) {
                cout << cadena[i];
              }
          
              cout << endl;
          
              return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pf7