const pf8 = /*html*/`
<h1>Ejercicio 8 for</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iostream>
            #include <string>
            using namespace std;
            int main() {
              string frase;
              int contadorVocales = 0;
              int contadorA = 0, contadorE = 0, contadorI = 0, contadorO = 0, contadorU = 0;
            
              cout << "Ingrese una frase: ";
              getline(cin, frase);
            
              for (int i = 0; i < frase.length(); ++i) {
                char caracter = tolower(frase[i]);
                if (caracter == 'a' || caracter == 'e' || caracter == 'i' ||
                    caracter == 'o' || caracter == 'u') {
                  switch (caracter) {
                  case 'a':
                    contadorA++;
                    break;
                  case 'e':
                    contadorE++;
                    break;
                  case 'i':
                    contadorI++;
                    break;
                  case 'o':
                    contadorO++;
                    break;
                  case 'u':
                    contadorU++;
                    break;
                  }
                  contadorVocales++;
                }
              }
          
              cout << "Conteo de Vocales en la Frase:" << endl;
              cout << "+------------------+" << endl;
              cout << "| Vocal | Cantidad |" << endl;
              cout << "+------------------+" << endl;
              cout << "|   A   |     " << contadorA << "    |" << endl;
              cout << "|   E   |     " << contadorE << "    |" << endl;
              cout << "|   I   |     " << contadorI << "    |" << endl;
              cout << "|   O   |     " << contadorO << "    |" << endl;
              cout << "|   U   |     " << contadorU << "    |" << endl;
              cout << "+------------------+" << endl;
              cout << "| Total |    " << contadorVocales << "    |" << endl;
              cout << "+------------------+" << endl;
          
              return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pf8