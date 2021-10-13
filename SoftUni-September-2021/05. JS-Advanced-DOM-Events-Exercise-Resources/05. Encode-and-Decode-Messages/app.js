function encodeAndDecodeMessages() {
    let input = document.querySelectorAll('textarea')[0];
    let output = document.querySelectorAll('textarea')[1];
    let inputButton = document.querySelectorAll('button')[0];
    let outputButton = document.querySelectorAll('button')[1];

    inputButton.addEventListener('click', encodeSend);
    outputButton.addEventListener('click', decodeRead);

    function encodeSend(){
        let inputText = input.value;
        let encodedText = '';

        for (let i = 0; i < inputText.length; i++){
            encodedText += String.fromCharCode(inputText[i].charCodeAt(0) + 1);
        }
        input.value = '';
        output.value = encodedText;


    }

    function decodeRead(){
        let outputText = output.value;
        let decodedText = '';

        for (let i = 0; i < outputText.length; i++){
            decodedText += String.fromCharCode(outputText[i].charCodeAt(0) - 1);
        }

        output.value = decodedText;
    }
}



/*
function encodeAndDecodeMessages() {
    
        let encodeBtn = document.querySelectorAll('button')[0];
        let dencodeBtn = document.querySelectorAll('button')[1];
        let messageInput = document.querySelectorAll('textarea')[0];
        let messageOutput = document.querySelectorAll('textarea')[1];
    
        encodeBtn.addEventListener('click', encodeMessages);
        dencodeBtn.addEventListener('click', decodeMessages);
    
        function encodeMessages() {
            let theText = messageInput.value;
            let encodedMessage = '';
            for (let i = 0; i < theText.length; i++) {
                encodedMessage += String.fromCharCode(ascii(`${theText[i]}`) + 1);
            }
            messageInput.value = '';
            messageOutput.value = encodedMessage;
        }
    
        function decodeMessages() {
            let theText = messageOutput.value;
            let decodedMessage = '';
            for (let i = 0; i < theText.length; i++) {
                decodedMessage += String.fromCharCode(ascii(`${theText[i]}`) - 1);
            }
            messageOutput.value = decodedMessage;
        }
    
        function ascii(a) {
            return a.charCodeAt(0);
        }
    
}
*/