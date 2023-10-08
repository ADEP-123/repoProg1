const pf6 = /*html*/`
<h1>Ejercicio 6 for</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            using namespace std;
            int main() {
                double base;
                int exponente;
                double resultado = 1.0;
            
                cout << "Ingrese la base: ";
                cin >> base;
            
                cout << "Ingrese el exponente (entero positivo): ";
                cin >> exponente;
            
                if (exponente < 0) {
                    cout << "El exponente debe ser un entero positivo." << endl;
                    return 1;
                }
            
                for (int i = 1; i <= exponente; ++i) {
                    resultado *= base;
                }
                cout << "El resultado de " << base << " elevado a la " << exponente << " es: " << resultado << endl;
                return 0;
            }

        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pf6