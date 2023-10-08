const pw1 = /*html*/`
<h1>Ejercicio 1 While</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <cstdlib>
            #include <ctime>
            #include <iostream>
            using namespace std;
            int main() {
              srand(time(0));
              int numeroAleatorio = rand() % 100+1;
            
              int intento;
              int intentosRealizados = 0;
              bool adivinado = false;
            
              cout << "¡Bienvenido al juego de adivinanza!" << endl;
              cout << "Adivina el número entre 1 y 100." << endl;
            
              while (!adivinado) {
                cout << "Ingresa tu intento: ";
                cin >> intento;
                intentosRealizados++;
            
                if (intento < numeroAleatorio) {
                  cout << "El número es mayor. Intenta de nuevo." << endl;
                } else if (intento > numeroAleatorio) {
                  cout << "El número es menor. Intenta de nuevo." << endl;
                } else {
                  cout << "¡Felicidades! Adivinaste el número " << numeroAleatorio << " en "
                       << intentosRealizados << " intentos." << endl;
                  adivinado = true;
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
export default pw1