const ej32 = /*html*/`
<h1>Ejercicio 32</h1>
<p>Factorial de numero dado</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
    #include <iostream>

    using namespace std;
    
    int main() {
        int numero;
        cout << "Ingrese un número para calcular su factorial: ";
        cin >> numero;
    
        if (numero < 0) {
            cout << "El factorial no está definido para números negativos." << endl;
        } else {
            int factorial = 1;
            for (int i = 1; i <= numero; i++) {
                factorial *= i;
            }
    
            cout << "El factorial de " << numero << " es: " << factorial << endl;
        }
    
        return 0;
    }
    </script> 
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej32.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej32.png" id="img_res"> -->
</div>

`;
export default ej32