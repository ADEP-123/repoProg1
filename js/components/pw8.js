const pw8 = /*html*/`
<h1>Ejercicio 8 While</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <cstdlib>
            #include <ctime>
            #include <iostream>
            #include <string>
            #include <vector>
            using namespace std;
            int main() {
              vector<string> vectorPalabras;
              srand(time(0));
            
              string palabra;
              cout << "Ingrese una palabra para agregar a la lista de juego: ";
              cin >> palabra;
              while (palabra != "finalizar") {
                vectorPalabras.push_back(palabra);
                cout << "Ingrese la siguiente palabra para agregar a la lista de juego o "
                        "escriba finalizar para terminar de agregar palabras a "
                        "la lista: ";
                string temp;
                cin >> temp;
                while (temp == palabra) {
                  cout << "La palabra no puede ser igual a la anterior, ingrese una nueva "
                          "palabra o escriba finalizar para terminar de agregar palabras a "
                          "la lista: ";
                  cin >> temp;
                }
                palabra = temp;
              }
              int numeroAleatorio = rand() % vectorPalabras.size();
              string palabraAdivinar = vectorPalabras[numeroAleatorio];
          
              int numIntentos = 6;
              int letrasAdiv = 0;
              int longitudPalabra = palabraAdivinar.length();
              cout << "Excelente el juego se ha configurado de manera exitosa, es hora de "
                      "comenzar."
                   << endl
                   << "Recuerde actualmente tiene: " << numIntentos << " intentos." << endl
                   << "La longitud de la palabra tiene: " << longitudPalabra << " letras"
                   << endl;
              vector<string> vectorPalabraAdivinada;
          
              for (int i = 0; i < palabraAdivinar.length(); i++) {
                vectorPalabraAdivinada.push_back("");
              }
          
              cout << "Comencemos!. ";
              while (numIntentos != 0 && letrasAdiv != palabraAdivinar.length()) {
                cout << "Ingrese una letra para adivinar si existe en la "
                        "palabra:"
                     << endl;
                char temp;
                cin >> temp;
                bool esta = false;
                for (int i = 0; i < palabraAdivinar.length(); i++) {
                  if (palabraAdivinar[i] == temp) {
                    esta = true;
                    letrasAdiv++;
                    vectorPalabraAdivinada[i] = string(1, temp);
                  }
                }
                if (esta == false) {
                  cout << "Ups esa letra no esta en la palabra" << endl;
                  numIntentos--;
                } else {
                  cout << "Felicidades le atinaste!" << endl;
                }
                cout << "Llevas esto adivinado: " << endl;
                for (int i = 0; i < palabraAdivinar.length(); i++) {
                  if (vectorPalabraAdivinada[i] == "") {
                    cout << "- ";
                  } else {
                    cout << vectorPalabraAdivinada[i] << " ";
                  }
                }
                cout << endl;
                cout << "Te quedan " << numIntentos << " intentos" << endl;
              }
              if (numIntentos == 0) {
                cout << "Perdiste :c";
              } else {
                cout << " G A N A S T E !!!!!";
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
export default pw8