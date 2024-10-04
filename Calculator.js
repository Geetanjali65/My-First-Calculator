let shouldClear = true; // Flag to check if result should be cleared

function appendToResult(value) {
    const resultField = document.getElementById('result');

    if (shouldClear) {
        resultField.value = ''; // Clear the result if the flag is true
        shouldClear = false; // Set the flag to false after clearing
    }

    resultField.value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
    shouldClear = true; // Reset the flag when cleared
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value); // Evaluate the expression
        shouldClear = true; // Set the flag to true after calculation
    } catch (error) {
        resultField.value = 'Error';
    }
}
