window.onload = async () => {
  const current_mode = await fetch("https://hackbattle-b.onrender.com/getMode");
  const reqJson = await current_mode.json();
  mode = reqJson.mode;
  console.log(mode);
  if (mode == 0) {
    document.getElementById("input").disabled = true;
    document.getElementById("omikuji").disabled = false;
  } else {
    document.getElementById("input").disabled = false;
    document.getElementById("omikuji").disabled = true;
  }
};
document.getElementById("input").onclick = async () => {
  await fetch("https://hackbattle-b.onrender.com/setMode?mode=0");
  document.getElementById("input").disabled = true;
  document.getElementById("omikuji").disabled = false;
};
document.getElementById("omikuji").onclick = async () => {
  await fetch("https://hackbattle-b.onrender.com/setMode?mode=1");
  document.getElementById("input").disabled = false;
  document.getElementById("omikuji").disabled = true;
};
document.getElementById("delete").onclick = async () => {
  await fetch("https://hackbattle-b.onrender.com/clear");
};
