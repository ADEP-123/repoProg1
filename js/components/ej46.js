const ej46 = /*html*/`
<h1>Ejercicio 46</h1>
<p>Determinar si un numero es primo</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
    #include <iostream>

    using namespace std;

    int main() {
      int num;
      string primo = "si";
      cout << "Ingrese un numero mayor que 0 para determnar si es primo o no"
           << endl;
      cin >> num;
      if (num == 1 || num == 2) {
        cout << "El numero es primo";
      } else {
        int cont = 2;
        while (cont < num) {
          if (num % cont == 0) {
            primo = "no";
          }
          cont += 1;
        }
      }
      cout << "El numero " << primo << " es primo"<<endl;

      return 0;
    }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej46.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej46.png" id="img_res"> -->
</div>

`;
export default ej46