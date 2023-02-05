const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

document.addEventListener("keydown", function(event) {
    if (!isNaN(event.key)) {
      display.value += event.key;
    } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
      display.value += event.key;
    }
  });

for (let button of buttons) {
    button.addEventListener("click", function () {
        let value = this.innerText;
        if (value === "CE") {
            display.value = "";
        } else if (value === "=") {
            display.value = eval(display.value);
        } else if (value === "C") {
            display.value = display.value.slice(0, -1);
        } else if (value === "%") {
            let lastNumber = display.value.split(/\+|\-|\*|\//).pop();
            lastNumber = lastNumber / 100;
            display.value = display.value.slice(0, -lastNumber.length) + lastNumber;
        } else if (value === "+/-") {
            display.value = -1 * display.value;
        } else {
            display.value += value;
        }
    });
}