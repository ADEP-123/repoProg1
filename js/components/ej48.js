const ej48 = /*html*/`
<h1>Ejercicio 48 Array 2</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            using namespace std;
            
            
            int main() {
              int n;
            
              cout << "Accediendo a los arrays por teclado" << endl;
            
              cout << "Ingresa el tamaño del array: ";
              cin >> n;
            
              cout << endl;
            
              int array[n];
            
              for (int i = 0; i < n; i++) {
                cout << "Ingrese el numero " << (i + 1) << ": ";
                cin >> array[i];
              }
              cout << endl;
              
              cout << "los datos ingresados en el array son: " << endl;
              
              for (int i = 0; i < sizeof(array)/ sizeof(array[0]); i++) {
                cout << "posicion " << i <<  " -> valor= " <<array[i] << endl;
              }
            }

        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej48.png" id="img_res">

    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej48.png" id="img_res"> -->
</div>

`;
export default ej48