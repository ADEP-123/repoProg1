const pw7 = /*html*/`
<h1>Ejercicio 7 While</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            using namespace std;
            int main() {
              int n;
            
              cout << "Ingrese un numero entero positivo para empezar a sumar ";
              cin >> n;
            
              int suma = 0;
              while (n >= 0) {
                suma += n;
                cout << "Ingrese un numero positivo para seguir sumando, negativo para "
                        "detenerse"
                     << endl;
                cout << "La suma es hasta el momento: " << suma << endl;
                cin >> n;
              }
              cout << "El total es: " << suma << endl;
          
              return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pw7