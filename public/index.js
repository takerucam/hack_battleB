// 遷移する先の画面, APIで取得
window.onload = async function () {
  const current_mode = await fetch("https://hackbattle-b.onrender.com/getMode");
  const reqJson = await current_mode.json();
  mode = await reqJson.mode;
  console.log(mode);
  if (mode == "0") {
    window.location.replace("input.html");
  } else {
    window.location.replace("omikuji.html");
  }
};
