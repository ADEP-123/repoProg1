const ej34 = /*html*/`
<h1>Ejercicio 34</h1>
<p>Promedio de la suma de los primeros 1024 numeros</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
    #include <iostream>

    using namespace std;
    
    int main() {
        int n = 1024;
        double suma = 0;
    
        for (int i = 1; i <= n; i++) {
            suma += i;
        }
    
        double promedio = suma / n;
    
        cout << "La suma de los primeros " << n << " números naturales es: " << suma << endl;
        cout << "El promedio de los primeros " << n << " números naturales es: " << promedio << endl;
    
        return 0;
    }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej34.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej34.png" id="img_res"> -->
</div>

`;
export default ej34