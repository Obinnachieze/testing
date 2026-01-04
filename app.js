const meters = document.getElementById("num");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let dig = meters.value;
  const met = dig / 3.28084;
  p1.textContent = `${dig} = ${Number(met.toFixed(3))}m `;
  const liters = dig * 3.785;
  p2.textContent = `${dig} = ${Number(liters.toFixed(3))}lt `;
  const kilo = dig * 0.453592;
  p3.textContent = `${dig} = ${Number(kilo.toFixed(3))}kg `;
  meters.value = "";
});
