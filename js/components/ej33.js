const ej33 = /*html*/`
<h1>Ejercicio 33</h1>
<p>Suma de los n numeros de una lista</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    #include <iostream>

    using namespace std;

    int main() {
        int n;
        cout << "Ingrese la cantidad de números que desea sumar: ";
        cin >> n;

        if (n <= 0) {
            cout << "Debe ingresar al menos un número para realizar la suma." << endl;
            return 1;
        }

        double suma = 0;
        for (int i = 1; i <= n; i++) {
            double numero;
            cout << "Ingrese el número " << i << ": ";
            cin >> numero;
            suma += numero;
        }

        cout << "La suma de los " << n << " números ingresados es: " << suma << endl;

        return 0;
    }

    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="./../imgs/ej33.png" id="img_res">
    <!-- <img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej33.png" id="img_res"> -->
</div>

`;
export default ej33