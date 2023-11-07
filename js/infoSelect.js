import infoHome from "./components/info.js";
import config from "./config.js";

document.addEventListener("DOMContentLoaded", function () {
    const info = document.getElementById("info")
    info.innerHTML = infoHome
    const homebutton = document.getElementById("home_button_link")
    const sidebarButtons = document.querySelectorAll("#sidebar button");
    let imcEventExist = false;
    let triangEventExist = false;
    let mayEdadEventExist = false;
    let helEventExist = false;
    let tablMulEventExist = false
    let promedioEventExist = false
    let vocEventExist = false
    let adivEventExist = false
    let contrEventExist = false
    let coheteEventExist = false

    info.addEventListener("click", (event) => {
        event.stopPropagation()
        const formularioIMc = document.getElementById("formularioIMC");
        const formularioTriang = document.getElementById("formularioTriang")
        const formularioMayEdad = document.getElementById("mayEdadform")
        const formularioHel = document.getElementById("formularioHel")
        const formularioTabl = document.getElementById("tablMulForm")
        const formularioProm = document.getElementById("promForm")
        const formularioVoc = document.getElementById("contVocForm")
        const formularioAdiv = document.getElementById("adivForm")
        const formularioContr = document.getElementById("contrForm")
        const formularioCohete = document.getElementById("coheteForm")

        if (formularioIMc) {
            if (imcEventExist == false) {
                formularioIMc.addEventListener("submit", (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    const estatura = document.getElementById("estatura")
                    const peso = document.getElementById("peso")
                    let ok = true;
                    if (isNaN(estatura.value) == true) {
                        alert("la estatura debe ser un numero")
                        estatura.value = null
                        ok = false
                    }
                    if (isNaN(peso.value)) {
                        alert("El peso debe ser un numero")
                        peso.value = null
                        ok = false
                    }
                    const estaturaValue = Number(estatura.value)
                    const pesoValue = Number(peso.value)
                    if (pesoValue == 0) {
                        alert("El peso no puede ser 0")
                        peso.value = null
                        ok = false
                    }
                    if (estaturaValue < 0 || pesoValue < 0) {
                        alert("Los valores deben ser positivos")
                        estatura.value = null
                        peso.value = null
                        ok = false
                    }
                    if (ok == true) {
                        const result = document.getElementById("result")
                        result.value = pesoValue / (estaturaValue * estaturaValue)
                    }

                });
            }
            imcEventExist = true
        }
        if (formularioTriang) {
            if (triangEventExist == false) {
                formularioTriang.addEventListener("submit", (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    const cateto1 = document.getElementById("cat1")
                    const cateto2 = document.getElementById("cat2")
                    let ok = true;
                    if (isNaN(cateto1.value) == true) {
                        alert("El cateto 1 debe ser numerico")
                        cateto1.value = null
                        ok = false
                    }
                    if (isNaN(cateto2.value)) {
                        alert("El cateto 2 debe ser numerico")
                        cateto2.value = null
                        ok = false
                    }
                    const cateto1Value = Number(cateto1.value)
                    const cateto2Value = Number(cateto2.value)
                    if (cateto1Value < 0 || cateto2Value < 0) {
                        alert("Los catetos deben ser positivos")
                        cateto1.value = null
                        cateto2.value = null
                        ok = false
                    }
                    if (ok == true) {
                        const area = document.getElementById("area")
                        const perimetro = document.getElementById("perimetro")
                        area.value = (cateto1Value * cateto2Value) / 2;
                        const hip = Math.sqrt((cateto1Value * cateto1Value) + (cateto2Value * cateto2Value));
                        perimetro.value = cateto1Value + cateto2Value + hip
                    }

                });
            }
            triangEventExist = true
        }
        if (formularioMayEdad) {
            if (mayEdadEventExist == false) {
                formularioMayEdad.addEventListener("submit", (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    const edad = document.getElementById("edad")
                    let ok = true;
                    if (isNaN(edad.value) == true) {
                        alert("La edad debe ser un numero")
                        cateto1.value = null
                        ok = false
                    }
                    const edadValue = Number(edad.value)
                    if (edadValue <= 0) {
                        alert("Los edad debe ser positiva")
                        edad.value = null
                        ok = false
                    }
                    if (edadValue > 118) {
                        alert("O usted es la persona mas vieja del mundo o se equivocó")
                        edad.value = null
                        ok = false
                    }
                    if (ok == true) {
                        const result = document.getElementById("result")
                        if (edadValue < 18) {
                            result.innerHTML = "Usted es menor de edad"
                        } else {
                            result.innerHTML = "Usted es mayor de edad"
                        }
                    }

                });
            }
            mayEdadEventExist = true
        }
        if (formularioHel) {
            if (helEventExist == false) {
                formularioHel.addEventListener("submit", (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    const tipCliente = document.getElementById("tipClient");
                    const totVent = document.getElementById("totVent");
                    let ok = true;
                    if (isNaN(totVent.value) == true) {
                        alert("El total de la venta debe ser un numero")
                        totVent.value = null
                        ok = false
                    }
                    const totVentValue = Number(totVent.value)
                    const porDescuento = tipCliente.value
                    if (totVentValue <= 0) {
                        alert("El total de la venta debe ser positiva")
                        totVent.value = null
                        ok = false
                    }
                    if (ok == true) {
                        const result = document.getElementById("totVentDesc")
                        result.value = totVentValue - (totVentValue * porDescuento)
                    }

                });
            }
            helEventExist = true
        }
        if (formularioTabl) {
            if (tablMulEventExist == false) {
                formularioTabl.addEventListener("submit", (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    const numero = document.getElementById("number");
                    let ok = true;
                    if (isNaN(numero.value) == true) {
                        alert("El numero de la tabla debe ser un numero")
                        numero.value = null
                        ok = false
                    }
                    const numeroValue = Number(numero.value)
                    if (numeroValue <= 0) {
                        alert("El numero debe ser positivo")
                        numero.value = null
                        ok = false
                    }
                    if (ok == true) {
                        const resultDiv = document.getElementById("result_div")
                        let cont = /*html*/`
                        <tr>
                            <th>Operacion</th>
                            <th>Resultado</th>
                        </tr>`
                        for (let i = 1; i < 11; i++) {
                            cont +=/*html*/`
                            <tr>
                                <td>${numeroValue} * ${i}</td>
                                <td>${numeroValue * i}</td>
                            </tr>`
                        }
                        resultDiv.innerHTML = /*html*/`
                        <table border="1">
                            ${cont}
                        </table>`
                    }
                });
            }
            tablMulEventExist = true
        }
        if (formularioProm) {
            if (promedioEventExist == false) {
                formularioProm.addEventListener("submit", (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    const minimo = document.getElementById("notMin");
                    const maximo = document.getElementById("notMax");
                    const nota1 = document.getElementById("not1");
                    const nota2 = document.getElementById("not2");
                    const nota3 = document.getElementById("not3");
                    const nota4 = document.getElementById("not4");
                    const nota5 = document.getElementById("not5");
                    let ok = true;
                    const minimoValue = Number(minimo.value);
                    const maximoValue = Number(maximo.value);
                    const nota1Value = Number(nota1.value);
                    const nota2Value = Number(nota2.value);
                    const nota3Value = Number(nota3.value);
                    const nota4Value = Number(nota4.value);
                    const nota5Value = Number(nota5.value);
                    if (minimoValue < 0 || maximoValue < 0) {
                        alert("Los limites deben ser positivos")
                        minimo.value = null;
                        maximo.value = null;
                        ok = false
                    }
                    if (minimoValue >= maximoValue) {
                        alert("El limite inferior debe ser menor al mayor")
                        minimo.value = null;
                        ok = false
                    }
                    if (nota1Value < minimoValue || nota1Value > maximoValue) {
                        alert("La nota 1 es menor que el valor minimo o mayor que el valor maximo")
                        nota1.value = null;
                        ok = false
                    }
                    if (nota2Value < minimoValue || nota2Value > maximoValue) {
                        alert("La nota 2 es menor que el valor minimo o mayor que el valor maximo")
                        nota2.value = null;
                        ok = false
                    }
                    if (nota3Value < minimoValue || nota3Value > maximoValue) {
                        alert("La nota 3 es menor que el valor minimo o mayor que el valor maximo")
                        nota3.value = null;
                        ok = false
                    }
                    if (nota4Value < minimoValue || nota4Value > maximoValue) {
                        alert("La nota 4 es menor que el valor minimo o mayor que el valor maximo")
                        nota4.value = null;
                        ok = false
                    }
                    if (nota5Value < minimoValue || nota5Value > maximoValue) {
                        alert("La nota 5 es menor que el valor minimo o mayor que el valor maximo")
                        nota5.value = null;
                        ok = false
                    }
                    if (ok == true) {
                        const result = document.getElementById("result")
                        result.innerHTML =/*html*/`El resultado es ${(nota1Value + nota2Value + nota3Value + nota4Value + nota5Value) / 5}`
                    }
                });
            }
            promedioEventExist = true
        }
        if (formularioVoc) {
            if (vocEventExist == false) {
                formularioVoc.addEventListener("submit", (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    const frase = document.getElementById("frase")
                    let ok = true;
                    if (!frase.value) {
                        alert("Debe escribir la frase")
                        ok = false
                    }
                    const fraseValue = frase.value
                    let contA = 0; let contE = 0; let contI = 0; let contO = 0; let contU = 0;
                    for (let i = 0; i < fraseValue.length; i++) {
                        if (fraseValue[i].toLowerCase() == "a") {
                            contA++
                        }
                        if (fraseValue[i].toLowerCase() == "e") {
                            contE++
                        }
                        if (fraseValue[i].toLowerCase() == "i") {
                            contI++
                        }
                        if (fraseValue[i].toLowerCase() == "o") {
                            contO++
                        }
                        if (fraseValue[i].toLowerCase() == "u") {
                            contU++
                        }
                    }
                    if (ok == true) {
                        const resultDiv = document.getElementById("result_div")
                        resultDiv.innerHTML =/*html*/`
                        <table>
                            <tr>
                                <th>a</th>
                                <th>e</th>
                                <th>i</th>
                                <th>o</th>
                                <th>u</th>
                            </tr>
                            <tr>
                                <td>${contA}</td>
                                <td>${contE}</td>
                                <td>${contI}</td>
                                <td>${contO}</td>
                                <td>${contU}</td>
                            </tr>
                        </table>
                        `
                    }

                });
            }
            vocEventExist = true
        }
        if (formularioAdiv) {
            if (adivEventExist == false) {
                let randNum = Math.floor(Math.random() * 100) + 1;
                const cambNumButt = document.getElementById("camb_num")
                cambNumButt.addEventListener("click", (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    randNum = Math.floor(Math.random() * 100) + 1;
                })

                formularioAdiv.addEventListener("submit", (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    const numero = document.getElementById("numero")
                    let ok = true;
                    if (numero.value < 1 || numero > 100) {
                        alert("El numero debe ser mayor o igual a uno y menor o igual a 100")
                        numero.value = null
                        ok = false
                    }
                    const numeroValue = numero.value
                    if (ok == true) {
                        const resul = document.getElementById("result")
                        if (numeroValue == randNum) {
                            resul.innerHTML =/*html*/`Felicidades ha adivinado el numero, generando nuevo numero espere`
                            setTimeout(function () {
                                randNum = Math.floor(Math.random() * 100) + 1;
                                resul.innerHTML =/*html*/``;
                            }, 3000);
                        } else if (numeroValue < randNum) {
                            resul.innerHTML =/*html*/`Ups te fuiste muy bajo`
                        } else {
                            resul.innerHTML =/*html*/`Ups te fuiste muy alto`
                        }
                    }

                });
            }
            adivEventExist = true
        }
        if (formularioContr) {
            if (contrEventExist == false) {
                const buttonChange = document.getElementById("changeVis");
                const passInput = document.getElementById("pass")
                const result = document.getElementById("result")
                let actualType = passInput.type
                let actualPlaceHolder = passInput.placeholder;
                buttonChange.addEventListener("click", (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (actualType == "text") {
                        passInput.type = "password"
                        buttonChange.innerHTML = "&#9746"
                        passInput.placeholder = "**********"
                    } else {
                        passInput.type = "text"
                        buttonChange.innerHTML = "&#128065;"
                        passInput.placeholder = "testing123"
                    }
                    actualType = passInput.type
                    actualPlaceHolder = passInput.placeholder
                })

                formularioContr.addEventListener("submit", (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (passInput.value != "testing123") {
                        alert("Ups esa no es la contraseña")
                        passInput.value = null
                    } else {
                        result.innerHTML = "Usuario loggeado :3"
                    }
                });
            }
            contrEventExist = true
        }
        if (formularioCohete) {
            if (coheteEventExist == false) {
                const coheteGif = document.getElementById("cohete");
                const numberInput = document.getElementById("numero");
                const result = document.getElementById("result");
                const formularioCohete = document.getElementById("coheteForm");

                formularioCohete.addEventListener("submit", (event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    if (numberInput.value <= 0) {
                        alert("Ups, el número de partida debe ser mayor a 0");
                        numberInput.value = null;
                    } else {
                        let number = numberInput.value;
                        result.innerHTML = "Iniciando Despegue!";

                        const countdownInterval = setInterval(() => {
                            if (number === 0) {
                                clearInterval(countdownInterval);
                                result.innerHTML = "Despegando!";
                                coheteGif.src = "./../imgs/coete.gif"
                                // coheteGif.src = "https://adepfolder.000webhostapp.com/Programacion%201/imgs/coete.gif"
                                setTimeout(function () {
                                    coheteGif.src = "./../imgs/coete.png"
                                    // coheteGif.src = "https://adepfolder.000webhostapp.com/Programacion%201/imgs/coete.png"
                                    result.innerHTML = ""
                                    numberInput.value = null;
                                }, 5000);
                            } else {
                                result.innerHTML = number;
                                number--;
                            }
                        }, 1000);
                    }
                });
            }
            coheteEventExist = true
        }


    })

    sidebarButtons.forEach((button) => {

        button.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const moduleName = `${button.value}`;

            import(`./components/${moduleName}.js`)
                .then((modul) => {
                    info.innerHTML = modul.default;
                    Prism.highlightAll();

                    const copyButtons = document.querySelectorAll('.copy-button');
                    const codeBlocks = document.querySelectorAll('.code-container');
                    copyButtons.forEach((button, index) => {
                        button.addEventListener('click', () => {

                            const codeBlock = codeBlocks[index].querySelector('code');
                            const tempTextArea = document.createElement('textarea');
                            tempTextArea.value = codeBlock.textContent;
                            document.body.appendChild(tempTextArea);
                            tempTextArea.select();
                            document.execCommand('copy');
                            document.body.removeChild(tempTextArea);
                            button.textContent = 'Copiado';
                            setTimeout(() => { button.textContent = 'Copiar'; }, "2000")
                        });
                    });

                })
                .catch((error) => {
                    console.error({ error });
                    info.innerHTML = /*html*/`
                    <h1>Estamos trabajando en esta seccion</h1>
                    <img src="../imgs/roborError.gif"></img>
                    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/roborError.gif"></img>-->
                    `;
                });

        });
    });

    homebutton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        info.innerHTML = infoHome
    })

});