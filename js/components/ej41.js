const ej41 = /*html*/`
<h1>Ejercicio 41</h1>
<p>Tablas de multiplicar 2.0</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
    #include <iostream>
    
    using namespace std;
    
    int main() {
      int numero;
    
      cout << "Ingrese un número para obtener su tabla de multiplicar: ";
      cin >> numero;
    
      cout << "Tabla de Multiplicar del " << numero << ":" << endl;
      cout << "+------------+------------+" << endl;
      cout << "|   Numero   |  Resultado |" << endl;
      cout << "+------------+------------+" << endl;
      int cont = 1;
    
      while (cont <= 10) {
        int resultado = numero * cont;
        if (cont < 10) {
          cout << "|   " << numero << " x " << cont << "    |    " << resultado;
        } else {
          cout << "|   " << numero << " x " << cont << "   |    " << resultado;
        }
    
        // Alineación de los resultados para que la tabla sea uniforme
        if (resultado < 10) {
          cout << "       |" << endl;
        } else {
          cout << "      |" << endl;
        }
        cont += 1;
      }
  
      cout << "+------------+------------+" << endl;
  
      return 0;
    }

    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej41.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej41.png" id="img_res"> -->
</div>

`;
export default ej41