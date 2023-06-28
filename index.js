function onSubmit(){
    const text = document.getElementById('answer').value;

    const msg = "【ご予約名】\n" + text;
    console.log(msg);
    sendText(msg);

    return false;
}
