let string = "";

let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;
        if (value === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }else if (value === "C") {
            string = "";
            input.value = "";
        }else if (value === "+/-") {
            if (string) {
                string = (-eval(string)).toString();
                input.value = string;
            }
        }else if (value === "%") {
            if (string) {
                string = (eval(string) / 100).toString();
                input.value = string;
            }
        }else if (value === "X") {
            string += "*";
            input.value = string;
        }else {
            string += value;
            input.value = string;
        }
    });
});