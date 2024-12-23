// script.js
function appendToInput(value) {
    document.getElementById('input').innerText += value;
}

function clearInput() {
    document.getElementById('input').innerText = '';
    document.getElementById('result').innerText = '';
}

function calculateResult() {
    const input = document.getElementById('input').innerText;
    try {
        const evalResult = eval(input);
        document.getElementById('result').innerText = evalResult;
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}