document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send');
    const message = document.getElementById('message');
    let count = 0;
    console.log('DOMContentLoaded');

    sendButton.addEventListener('click', () => {
        count++;
        message.textContent = `送信しました！${count}件目`;
    });
});
