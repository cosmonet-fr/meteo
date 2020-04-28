
var meteoTxt = document.getElementById('meteoTxt');
var imgMeteo = document.getElementById('imgMeteo')
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log('Le temps est ' + response.current_condition.condition + '.');
        imgMeteo.setAttribute("src", response.current_condition.icon_big);
        switch (response.current_condition.condition) {
          case 'Ensoleillé':
              meteoTxt.innerHTML = 'Le temps est ensoleillé. On peut aller faire une belle promenade mon bébé. <3';
            break;

          case 'Nuit claire':
              meteoTxt.innerHTML = 'La nuit est claire.';
            break;
          case 'Eclaircies':
              meteoTxt.innerHTML = 'Il y a des éclaircies. On peut aller faire une belle promenade mon bébé. <3';
            break;

          default:
              meteoTxt.innerHTML = response.current_condition.condition;

        }

    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/ceyrat");
request.send();
