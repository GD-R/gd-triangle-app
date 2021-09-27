const base = document.querySelector(".base");
const height = document.querySelector(".height");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function checkArea() {
    const res = Number(base.value) * Number(height.value);
    const area = res/2;
    output.innerHTML = `The area of the triangle is ${area} cm²`;
}

btn.addEventListener("click", checkArea);