const sides = document.querySelectorAll(".sides");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

console.log(sides[0]);

function sumOfSquare(a,b) {
    return a*a + b*b;
}

function calculateHypotenuse() {
    const result = sumOfSquare(Number(sides[0].value),Number(sides[1].value));
    const hypotenuseValue = Math.sqrt(result);
    output.innerHTML = `The length of hypotenuse is ${hypotenuseValue}`;
}

btn.addEventListener("click", calculateHypotenuse);