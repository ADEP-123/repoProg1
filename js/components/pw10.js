const pw10 = /*html*/`
<h1>Ejercicio 10 While</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            #include <iomanip>

            using namespace std;

            int main() {
                double precioOriginal, porcentajeDescuento;
            
                cout << "Ingrese el precio original del producto (o un valor negativo para finalizar): ";
                cin >> precioOriginal;
            
                while (precioOriginal >= 0) {
                    cout << "Ingrese el porcentaje de descuento: ";
                    cin >> porcentajeDescuento;
                
                    if (porcentajeDescuento < 0 || porcentajeDescuento > 100) {
                        cout << "Porcentaje de descuento no válido. Debe estar entre 0 y 100." << endl;
                    } else {
                        double descuento = (precioOriginal * porcentajeDescuento) / 100;
                        double precioConDescuento = precioOriginal - descuento;
                    
                        cout << "El precio con descuento es: $" << fixed << setprecision(2) << precioConDescuento << endl;
                    }
                
                    cout << endl << "Ingrese el precio original del próximo producto (o un valor negativo para finalizar): ";
                    cin >> precioOriginal;
                }
            
                cout << "¡Gracias por usar la calculadora de descuento!" << endl;
            
                return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pw10