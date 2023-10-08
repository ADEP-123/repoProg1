const pf10 = /*html*/`
<h1>Ejercicio 9 for</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iomanip>
            #include <iostream>
            using namespace std;
            int main() {
              double inversionInicial = 1000.0;
              double tasaInteresAnual = 0.05; // 5% de tasa de interés anual
              int numAnios = 5;
              double saldo = inversionInicial;
            
              cout << "+--------------------+" << endl;
              cout << "| Año |    Saldo     +" << endl;
              cout << "----------------------" << endl;
            
              for (int anio = 1; anio <= numAnios; ++anio) {
                saldo = saldo + (saldo * tasaInteresAnual);
                cout << "|  " << anio << "  |   $" << fixed << setprecision(2) << saldo
                     << "   |" << endl;
              }
              cout << "+--------------------+" << endl;
          
              return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pf10