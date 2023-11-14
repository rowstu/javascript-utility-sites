function encodeText() {
    var inputText = document.getElementById('textInput').value;
    var encodedText = btoa(inputText);
    document.getElementById('outputText').value = encodedText;
}

function decodeText() {
    var inputText = document.getElementById('textInput').value;
    try {
        var decodedText = atob(inputText);
        document.getElementById('outputText').value = decodedText;
    } catch (error) {
        document.getElementById('outputText').value = "Invalid base64 input.";
    }
}
