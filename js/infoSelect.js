import infoHome from "./components/info.js";
import config from "./config.js";

document.addEventListener("DOMContentLoaded", function () {
    const info = document.getElementById("info")
    info.innerHTML = infoHome
    const homebutton = document.getElementById("home_button_link")
    const sidebarButtons = document.querySelectorAll("#sidebar button");
    let eventExist = false
    info.addEventListener("click", (event) => {
        event.stopPropagation()
        const formularioIMc = document.getElementById("formularioIMC");
        if (formularioIMc) {
            if (eventExist == false) {
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

        }
        eventExist = true
    })

    sidebarButtons.forEach((button) => {

        button.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            let moduleName;
            if (button.value == "imc") {
                moduleName = `${button.value}`;
            } else {

                moduleName = `ej${button.value}`;
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