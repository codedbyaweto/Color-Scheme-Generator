const button = document.getElementById("get-scheme");
const colorPicker = document.getElementById("color-picker");
const scheme = document.getElementById("scheme-select");
const colorsContainer = document.getElementById("colors")

function handleClick() {
    const schemeValue = scheme.value;
    const colorPickerValue = colorPicker.value.substring(1); 

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerValue}&mode=${schemeValue}&count=5`)
        .then(res => res.json())
        .then(data => {
            colorsContainer.innerHTML = ""

            data.colors.forEach(color => {
                const div = document.createElement("div")
                div.classList.add("color-box");
                div.style.background = color.hex.value;

                div.innerHTML = `
                <p style="text-align: center; margin-top: 0.5em; color: whitesmoke;">
                    ${color.hex.value}
                </p>
                `;

                colorsContainer.appendChild(div)
            });
        });

};

button.addEventListener("click", handleClick)