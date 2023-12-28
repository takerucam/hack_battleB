window.onload = async function () {
  let mode = 1;
  if (!mode) {
    window.location.replace("input.html");
  }
  // let text = document.getElementById("text");
  // const json = await fetch("/getFT");
  // let target = Math.random();
};

document.getElementById("jump").onclick = function () {
  window.location.href = "review.html";
};
