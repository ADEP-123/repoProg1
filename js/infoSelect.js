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

    info.addEventListener("click", (event) => {
        event.stopPropagation()
        const formularioIMc = document.getElementById("formularioIMC");
        const formularioTriang = document.getElementById("formularioTriang")
        const formularioMayEdad = document.getElementById("mayEdadform")
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
                    imcEventExist = true
                });
            }


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
                    triangEventExist = true
                });
            }
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
                    mayEdadEventExist = true
                });
            }
        }

    })

    sidebarButtons.forEach((button) => {

        button.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            let moduleName;
            if (isNaN(button.value) == false) {
                moduleName = `ej${button.value}`;
            } else {
                moduleName = `${button.value}`;
            }



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