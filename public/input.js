document.addEventListener("DOMContentLoaded", () => {
  const sendButton = document.getElementById("send");
  const message = document.getElementById("message");
  let count = 0;
  console.log("DOMContentLoaded");

  sendButton.addEventListener("click", () => {
    if (document.getElementById("form").value == "") {
      message.textContent = `空欄では送信できません`;
    } else {
      count++;
      message.textContent = `送信しました！${count}件目`;
      document.getElementById("form").value = "";
    }
  });
});
