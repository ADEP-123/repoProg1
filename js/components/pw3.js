const pw3 = /*html*/`
<h1>Ejercicio 3 While</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            using namespace std;
            int main() {
                int numTerminos = 10;
                int terminoActual = 0;
                int siguienteTermino = 1;
            
                cout << "Secuencia de Fibonacci (primeros 10 términos):" << endl;
            
                int contador = 0;
                while (contador < numTerminos) {
                    cout << terminoActual << " ";
                
                    int temp = terminoActual;
                    terminoActual = siguienteTermino;
                    siguienteTermino = temp + siguienteTermino;
                
                    contador++;
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
export default pw3