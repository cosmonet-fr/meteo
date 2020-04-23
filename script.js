
var meteoTxt = document.getElementById('meteoTxt');
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log('Le temps est ' + response.current_condition.condition + '.');
        var resultMeteo = response.current_condition.condition;
        if (response.current_condition.condition === 'Eclaircies') {
          console.log('ok');
          meteoTxt.innerHTML = 'Il y a des éclaircies.';
        }

    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/ceyrat");
request.send();
