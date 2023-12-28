function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

window.onload = async function () {
  const current_mode = await fetch("https://hackbattle-b.onrender.com/getMode");
  const reqJson = await current_mode.json();
  mode = await reqJson.mode;
  console.log(mode);
  if (mode == "0") {
    window.location.replace("input.html");
  }

  const resJson = await fetch("https://hackbattle-b.onrender.com/getTitle");
  let titles = await resJson.json();
  console.log(titles);

  document.getElementById("answer").textContent =
    titles[getRandomInt(0, titles.length)].title;
};

document.getElementById("jump").onclick = function () {
  window.location.href = "review.html";
};
document.getElementById("shuffle").onclick = function () {
  location.reload();
};
