const ej36 = /*html*/`
<h1>Ejercicio 36</h1>
<p>Numeros primos hasta n</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    #include <iostream>

    using namespace std;
    int main() {
      int n;
      cout << "Ingrese el numero hasta el cual desde encontrar los primos "
              "anteriores o iguales a el: ";
      cin >> n;
    
      if (n <= 0) {
        cout << "Debe ingresar un valor positivo para n." << endl;
        return 1;
      }
    
      cout << "Los numeros primos menores a " << n << " son " << endl;
    
      for (int i = 1; i <= n; i++) {
        bool primo = true;
        if (i == 2) {
          cout << i << endl;
        } else {
          for (int j = 2; j < i; j++) {
            if (i % j == 0) {
              primo = false;
            }
          }
          if (primo == true) {
            cout << i << endl;
          }
        }
      }
    
      return 0;
    }
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej36.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej36.png" id="img_res"> -->
</div>

`;
export default ej36