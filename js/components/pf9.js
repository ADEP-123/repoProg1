const pf9 = /*html*/`
<h1>Ejercicio 9 for</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            using namespace std;
            int main() {
              int encontrados = 0;
              cout << "Los numeros 10 primeros numeros primos son: " << endl;
            
              for (int i = 1; i <= 10000; i++) {
                bool primo = true;
                if (i == 2) {
                  encontrados += 1;
                  cout << i << endl;
                } else {
                  for (int j = 2; j < i; j++) {
                    if (i % j == 0) {
                      primo = false;
                    }
                  }
                  if (primo == true) {
                    encontrados += 1;
                    cout << i << endl;
                  }
                }
                if (encontrados == 10) {
                  break;
                }
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
export default pf9