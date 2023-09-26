const ej37 = /*html*/`
<h1>Ejercicio 37</h1>
<p>Serie Fibonacci</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    #include <iostream>

    using namespace std;
    
    int main() {
        int n;
    
        cout << "Ingrese la cantidad de términos de la serie de Fibonacci que desea mostrar: ";
        cin >> n;
    
        int a = 0, b = 1;
    
        cout << "Serie de Fibonacci:" << endl;
    
        for (int i = 0; i < n; i++) {
            cout << a << " ";
    
            int temp = a;
            a = b;
            b = temp + b;
        }
    
        cout << endl;
    
        return 0;
    }   
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej37.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej37.png" id="img_res"> -->
</div>

`;
export default ej37