const pf1 = /*html*/`
<h1>Ejercicio 1 for</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iomanip>
            #include <iostream>

            using namespace std;

            int main() {
              int numVentas;
              double totalVentas = 0.0;
            
              cout << "Ingrese el número de ventas realizadas en una semana: ";
              cin >> numVentas;
            
              while (numVentas <= 0) {
                cout << "Debe ingresar al menos una venta. Porfavor digite denuevo el "
                        "numero de ventas realizadas: ";
                cin >> numVentas;
              }
          
              cout << "Creando recibo, porfavor ingrese el monto de cada venta segun se va "
                      "requeriendo:"
                   << endl;
          
              cout << fixed << setprecision(2);
              cout << "Recibo de Ventas:" << endl;
              cout << "-------------------------" << endl;
              cout << "Venta #	Monto" << endl;
              cout << "-------------------------" << endl;
          
              for (int i = 1; i <= numVentas; ++i) {
                double montoVenta;
                cout << "Venta " << i << ": $";
                cin >> montoVenta;
                totalVentas += montoVenta;
              }
          
              cout << fixed << setprecision(2);
              cout << "-------------------------"<< endl;
              cout << "Total:	$" << totalVentas << endl;
          
              return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pf1