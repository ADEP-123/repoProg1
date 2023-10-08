const pf3 = /*html*/`
<h1>Ejercicio 3 for</h1>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
        <script type="text/plain">
            #include <iomanip>
            #include <iostream>
            using namespace std;
            int main() {
              const int numCalificaciones = 5;
              double calificacion;
              double sumaCalificaciones = 0.0;
              double min;
              double max;
              cout << "Para empezar a calcular las calificaciones es necesario conocer la "
                      "escala, porfavor ingrese la nota minima posible: ";
              cin >> min;
              cout << "Ahora ingrese la nota maxima posible: ";
              cin >> max;
              cout << "Ingrese las cinco calificaciones:" << endl;
              for (int i = 1; i <= numCalificaciones; ++i) {
                cout << "Calificación " << i << ": ";
                cin >> calificacion;
                while (calificacion < min || calificacion > max) {
                  cout << "La nota ingresada no corresponde a la escala porfavor corrobore "
                          "y vuelva a ingresarla"
                       << endl;
                  cout << "Calificación " << i << ": ";
                  cin >> calificacion;
                }
                sumaCalificaciones += calificacion;
              }
              double promedio = sumaCalificaciones / numCalificaciones;
              cout << "+-----------------------+" << endl;
              cout << "|    Promedio    | " << promedio << endl;
              cout << "+-----------------------+" << endl;
          
              return 0;
            }
        </script>
    </code>
</pre>
</div>
<div id=div_img_res>
</div>

`;
export default pf3