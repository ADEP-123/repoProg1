const ej40 = /*html*/`
<h1>Ejercicio 40</h1>
<p>Prmedio de elementos</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
    #include <iostream>

    using namespace std;
    
    int main() {
      int n;
    
      cout << "Ingrese un numero entero positivo para empezar a calcular el "
              "promedio "
           << endl;
      cin >> n;
    
      float suma = 0;
      float conteo = 0;
    
      while (n >= 0) {
        conteo += 1;
        suma += n;
        cout << "Ingrese un numero positivo para seguir calculando el promedio, "
                "negativo para "
                "detenerse"
             << endl;
        cout << "El promedio es hasta el momento: " << (suma / conteo) << endl;
        cin >> n;
      }
      cout << "El total es: " << (suma / conteo) << endl;
    
      return 0;
    }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej40.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej40.png" id="img_res"> -->
</div>

`;
export default ej40