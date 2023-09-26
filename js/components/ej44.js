const ej44 = /*html*/`
<h1>Ejercicio 44</h1>
<p>Imprimir 16 factorial</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
    #include <iostream>
    
    using namespace std;
    
    int main() {
      int cont = 16;
      double factorial = 1;
      while (cont > 0) {
        factorial *= cont;
        cont -= 1;
      }
  
      cout << "El facotorai de 16 es: "
           << factorial << endl;
  
      return 0;
    }

    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej44.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej44.png" id="img_res"> -->
</div>

`;
export default ej44