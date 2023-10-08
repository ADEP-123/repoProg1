const pw6 = /*html*/`
<h1>Ejercicio 6 While</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            #include <string>

            using namespace std;

            int main() {
                string contrasenaCorrecta = "secreto";
                string contrasenaIngresada;
                bool contrasenaValida = false;
            
                cout << "Ingrese la contraseña: ";
            
                while (!contrasenaValida) {
                    cin >> contrasenaIngresada;
                    if (contrasenaIngresada == contrasenaCorrecta) {
                        cout << "Contraseña correcta. Acceso permitido." << endl;
                        contrasenaValida = true;
                    } else {
                        cout << "Contraseña incorrecta. Intente nuevamente: ";
                    }
                }
                return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pw6