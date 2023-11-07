const ej45 = /*html*/`
<h1>Ejercicio 45</h1>
<p>Contar los digitos de un #</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
    #include <iostream>

    using namespace std;

    int main() {
      int num;
      cout << "Ingrese el numero al que quiere calcularle los digitos, debe ser "
              "mayor a 1" << endl;
      cin >> num;
      int digitos = 0;

      while (num >= 1) {
        num = num / 10;
        digitos += 1;
      }

      cout << "El total de digitos es: " << digitos << endl;

      return 0;
    }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej45.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej45.png" id="img_res"> -->
</div>

`;
export default ej45