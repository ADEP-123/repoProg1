const ej35 = /*html*/`
<h1>Ejercicio 35</h1>
<p>Codigo que convierte a codigo ASCII</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
    #include <iostream>

    using namespace std;
    
    int main() {
      for (int i = 64; i < 122; i++) {
        cout << char(i) << "\n";
      }
    //El codigo conbierte a codico ASCII
      return 0;
    }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej35.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej35.png" id="img_res"> -->
</div>

`;
export default ej35