const ej42 = /*html*/`
<h1>Ejercicio 42</h1>
<p>Sumatoria de numeros pares menores o iguales que 100</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
    #include <iostream>

    using namespace std;

    int main() {
      int cont = 1;
      int sum = 0;
      while (cont <= 100) {
        if (cont % 2 == 0) {
          sum += cont;
        }

        cont += 1;
      }

      cout << "La sumatoria de los numeros pares menores o iguales a 100 es " << sum
           << endl;

      return 0;
    }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej42.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej42.png" id="img_res"> -->
</div>

`;
export default ej42