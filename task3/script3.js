document.getElementById('convertBtn').addEventListener('click', function() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number';
    } else {
        switch (unit) {
            case 'celsius':
                result = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)} °F, Kelvin: ${(temperature + 273.15).toFixed(2)} K`;
                break;
            case 'fahrenheit':
                result = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)} °C, Kelvin: ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
                break;
            case 'kelvin':
                result = `Celsius: ${(temperature - 273.15).toFixed(2)} °C, Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
                break;
        }
    }

    document.getElementById('result').innerHTML = result;
});
