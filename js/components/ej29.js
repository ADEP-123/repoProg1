const ej29 = /*html*/`
<h1>Ejercicio 29</h1>
<p>Cuenta regresiva</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    #include <chrono>
    #include <iostream>
    #include <thread>
    
    using namespace std;
    
    int main() {
      int n;
    
      cout << "Ingrese desde el numero que desea realizar la cuenta regresiva"
           << endl;
      cin >> n;
    
      for (int i = n; i >= 0; i--) {
        cout << i << endl;
        this_thread::sleep_for(chrono::seconds(1));
      }
      cout << "start";
    
      return 0;
    }
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej29.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej29.png" id="img_res"> -->
</div>

`;
export default ej29