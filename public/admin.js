window.onload = async () => {
  // const current_mode = await fetch("/getmode");
  // if (current_mode == 0) {
  // }
  document.getElementById("input").disabled = true;
};
document.getElementById("input").onclick = function () {
  // const response = await fetch("/setmode?mode=0");
  document.getElementById("input").disabled = true;
  document.getElementById("omikuji").disabled = false;
};
document.getElementById("omikuji").onclick = function () {
  // const response = await fetch("/setmode?mode=1");
  document.getElementById("input").disabled = false;
  document.getElementById("omikuji").disabled = true;
};
document.getElementById("delete").onclick = function () {
  // const response = await fetch("/clear");
};
