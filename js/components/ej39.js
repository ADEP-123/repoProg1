const ej39 = /*html*/`
<h1>Ejercicio 38</h1>
<p>Conteo de elementos</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    #include <iostream>

    using namespace std;
    
    int main() {
      int n;
    
      cout << "Ingrese un numero entero positivo para empezar a contar ";
      cin >> n;
    
      int suma = 0;
    
      while (n >= 0) {
        suma += 1;
        cout << "Ingrese un numero positivo para seguir contando, negativo para "
                "detenerse"
             << endl;
        cout << "La cuenta es hasta el momento: " << suma << endl;
        cin >> n;
      }
      cout << "El total es: " << suma << endl;
    
      return 0;
    }
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej39.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej39.png" id="img_res"> -->
</div>

`;
export default ej39