let count = 0;

window.onload = async function () {
  const current_mode = await fetch("https://hackbattle-b.onrender.com/getMode");
  const reqJson = await current_mode.json();
  let mode = reqJson.mode;
  console.log(mode);
  if (mode == "0") {
    return;
  } else {
    window.location.replace("omikuji.html");
  }
};

document.getElementById("send").onclick = async () => {
  const message = document.getElementById("message");
  const form = document.getElementById("form");
  if (document.getElementById("form").value == "") {
    message.textContent = `空欄では送信できません`;
  } else {
    count++;
    message.textContent = `送信しました！${count}件目`;
    const response = await fetch(
      "https://hackbattle-b.onrender.com/sendTitle?title=" + form.value
    );
    document.getElementById("form").value = "";
  }
};
