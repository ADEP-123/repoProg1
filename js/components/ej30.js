const ej30 = /*html*/`
<h1>Ejercicio 30</h1>
<p>Tabla de multiplicar</p>
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
    
      for (int i = 1; i <= 10; i++) {
        int resultado = numero * i;
        if(i<10){
           cout << "|   " << numero << " x " << i << "    |    " << resultado;
        }else{
          cout << "|   " << numero << " x " << i << "   |    " << resultado;
        }
       
        
    
        // Alineación de los resultados para que la tabla sea uniforme
        if (resultado < 10) {
          cout << "       |" << endl;
        } else {
          cout << "      |" << endl;
        }
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
    <img src="imgs/ej30.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej30.png" id="img_res"> -->
</div>

`;
export default ej30