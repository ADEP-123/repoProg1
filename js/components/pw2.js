const pw2 = /*html*/`
<h1>Ejercicio 2 While</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            using namespace std;
            int main() {
              double divisor;
              double dividendo;
            
              cout << "Bienvenido a la calculadora de divisiones, para terminar digite 0 "
                      "como divisor"
                   << endl;
              cout << "Ingrese el valor del dividendo: ";
              cin >> dividendo;
              cout << "Ingrese el valor del divisor: ";
              cin >> divisor;
            
              while (divisor != 0) {
                double result;
                result = dividendo / divisor;
                cout << "El resultado de " << dividendo << " sobre " << divisor
                     << " es: " << result << endl;
                cout << "Recuerde que para terminar digite 0 como divisor" << endl;
                cout << "Ingrese el valor del nuevo dividendo: ";
                cin >> dividendo;
                cout << "Ingrese el valor del nuevo divisor: ";
                cin >> divisor;
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
export default pw2