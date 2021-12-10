//Variables used to create the url the API, split into two parts with the league code in between
var url1 = "https://api-football-standings.azharimm.site/leagues/";
var url2 = ".1/standings?season=2021&sort=asc";

//Variables with the league codes for the url, to be put in between url1 and url2
var premUrl = url1 + "eng" + url2;
var laLigaUrl = url1 + "esp" + url2;
var bundesUrl = url1 + "ger" + url2;
var serieAUrl = url1 + "ita" + url2;
var ligue1Url = url1 + "fra" + url2;

//Creates a request using the premUrl
var premRequest = new XMLHttpRequest();
premRequest.open("GET", premUrl);
premRequest.send();
//Executes the function if the page is completely loaded up
premRequest.onreadystatechange = function() {
    if (premRequest.readyState == 4 && premRequest.status == 200) {
        
        //Fetches data from the API array to get the teams in order and puts them into a table
        //The fetched data includes: league position, name, matches played/won/drawn/lost, goal difference and points        
        jsonObj = JSON.parse(premRequest.responseText);
        var prem = jsonObj;
        var out ="<tbody>";
        for (var i = 0; i < prem.data.standings.length; i++) {
            out += '<tr>';
            if (i <= 3) {
                //Adds a class to colour cordinate them depending on their league position
                out += '<td class="ucl">' + prem.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i == 4) {
                out += '<td class="uel">' + prem.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i >= 17) {
                out += '<td class="relegation">' + prem.data.standings[i].stats[8].displayValue + '</td>';
            } else {
                out += '<td>' + prem.data.standings[i].stats[8].displayValue + '</td>';
            }            
            out += '<td class="team">' + prem.data.standings[i].team.name + '</td>';
            out += '<td>' + prem.data.standings[i].stats[3].displayValue + '</td>';
            out += '<td>' + prem.data.standings[i].stats[0].displayValue + '</td>';
            out += '<td>' + prem.data.standings[i].stats[2].displayValue + '</td>';
            out += '<td>' + prem.data.standings[i].stats[1].displayValue + '</td>';
            out += '<td>' + prem.data.standings[i].stats[4].displayValue + " - " + prem.data.standings[i].stats[5].displayValue + '</td>';
            //Calculate the goal difference from goals scored and conceded
            out += '<td>' + (prem.data.standings[i].stats[4].displayValue - prem.data.standings[i].stats[5].displayValue) + '</td>';
            out += '<td>' + prem.data.standings[i].stats[6].displayValue + '</td>';
            out += '</tr>';
        }
        out += "</tbody>";
        document.getElementById("premData").innerHTML = out;
    }
}

//Creates a request using the laLigaUrl
var laLigaRequest = new XMLHttpRequest();
laLigaRequest.open("GET", laLigaUrl);
laLigaRequest.send();
//Executes the function if the page is completely loaded up
laLigaRequest.onreadystatechange = function() {
    if (laLigaRequest.readyState == 4 && laLigaRequest.status == 200) {

        //Fetches data from the API array to get the teams in order and puts them into a table
        //The fetched data includes: league position, name, matches played/won/drawn/lost, goal difference and points        
        jsonObj = JSON.parse(laLigaRequest.responseText);
        var laLiga = jsonObj;
        var out ="<tbody>";
        for (var i = 0; i < laLiga.data.standings.length; i++) {
            out += '<tr>';
            if (i <= 3) {
                //Adds a class to colour cordinate them depending on their league position
                out += '<td class="ucl">' + laLiga.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i == 4) {
                out += '<td class="uel">' + laLiga.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i >= 17) {
                out += '<td class="relegation">' + laLiga.data.standings[i].stats[8].displayValue + '</td>';
            } else {
                out += '<td>' + laLiga.data.standings[i].stats[8].displayValue + '</td>';
            }            
            out += '<td class="team">' + laLiga.data.standings[i].team.name + '</td>';
            out += '<td>' + laLiga.data.standings[i].stats[3].displayValue + '</td>';
            out += '<td>' + laLiga.data.standings[i].stats[0].displayValue + '</td>';
            out += '<td>' + laLiga.data.standings[i].stats[2].displayValue + '</td>';
            out += '<td>' + laLiga.data.standings[i].stats[1].displayValue + '</td>';
            out += '<td>' + laLiga.data.standings[i].stats[4].displayValue + " - " + laLiga.data.standings[i].stats[5].displayValue + '</td>';
            //Calculate the goal difference from goals scored and conceded
            out += '<td>' + (laLiga.data.standings[i].stats[4].displayValue - laLiga.data.standings[i].stats[5].displayValue) + '</td>';
            out += '<td>' + laLiga.data.standings[i].stats[6].displayValue + '</td>';
            out += '</tr>';
        }
        out += "</tbody>";
        document.getElementById("laLigaData").innerHTML = out;
    }
}

//Creates a request using the bundesUrl
var bundesRequest = new XMLHttpRequest();
bundesRequest.open("GET", bundesUrl);
bundesRequest.send();
//Executes the function if the page is completely loaded up
bundesRequest.onreadystatechange = function() {
    if (bundesRequest.readyState == 4 && bundesRequest.status == 200) {

        //Fetches data from the API array to get the teams in order and puts them into a table
        //The fetched data includes: league position, name, matches played/won/drawn/lost, goal difference and points        
        jsonObj = JSON.parse(bundesRequest.responseText);
        var bundes = jsonObj;
        var out ="<tbody>";
        for (var i = 0; i < bundes.data.standings.length; i++) {
            out += '<tr>';
            if (i <= 3) {
                //Adds a class to colour cordinate them depending on their league position
                out += '<td class="ucl">' + bundes.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i == 4) {
                out += '<td class="uel">' + bundes.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i >= 16) {
                out += '<td class="relegation">' + bundes.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i == 15) {
                out += '<td class="play-off">' + bundes.data.standings[i].stats[8].displayValue + '</td>';
            } else {
                out += '<td>' + bundes.data.standings[i].stats[8].displayValue + '</td>';
            }            
            out += '<td class="team">' + bundes.data.standings[i].team.name + '</td>';
            out += '<td>' + bundes.data.standings[i].stats[3].displayValue + '</td>';
            out += '<td>' + bundes.data.standings[i].stats[0].displayValue + '</td>';
            out += '<td>' + bundes.data.standings[i].stats[2].displayValue + '</td>';
            out += '<td>' + bundes.data.standings[i].stats[1].displayValue + '</td>';
            out += '<td>' + bundes.data.standings[i].stats[4].displayValue + " - " + bundes.data.standings[i].stats[5].displayValue + '</td>';
            //Calculate the goal difference from goals scored and conceded
            out += '<td>' + (bundes.data.standings[i].stats[4].displayValue - bundes.data.standings[i].stats[5].displayValue) + '</td>';
            out += '<td>' + bundes.data.standings[i].stats[6].displayValue + '</td>';
            out += '</tr>';
        }
        out += "</tbody>";
        document.getElementById("bundesData").innerHTML = out;
    }
}

//Creates a request using the serieAUrl
var serieARequest = new XMLHttpRequest();
serieARequest.open("GET", serieAUrl);
serieARequest.send();
//Executes the function if the page is completely loaded up
serieARequest.onreadystatechange = function() {
    if (serieARequest.readyState == 4 && serieARequest.status == 200) {

        //Fetches data from the API array to get the teams in order and puts them into a table
      //The fetched data includes: league position, name, matches played/won/drawn/lost, goal difference and points
        jsonObj = JSON.parse(serieARequest.responseText);
        var serieA = jsonObj;
        var out ="<tbody>";
        for (var i = 0; i < serieA.data.standings.length; i++) {
            out += '<tr>';
            if (i <= 3) {
                //Adds a class to colour cordinate them depending on their league position
                out += '<td class="ucl">' + serieA.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i == 4) {
                out += '<td class="uel">' + serieA.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i >= 17) {
                out += '<td class="relegation">' + serieA.data.standings[i].stats[8].displayValue + '</td>';
            } else {
                out += '<td>' + serieA.data.standings[i].stats[8].displayValue + '</td>';
            }            
            out += '<td class="team">' + serieA.data.standings[i].team.name + '</td>';
            out += '<td>' + serieA.data.standings[i].stats[3].displayValue + '</td>';
            out += '<td>' + serieA.data.standings[i].stats[0].displayValue + '</td>';
            out += '<td>' + serieA.data.standings[i].stats[2].displayValue + '</td>';
            out += '<td>' + serieA.data.standings[i].stats[1].displayValue + '</td>';
            out += '<td>' + serieA.data.standings[i].stats[4].displayValue + " - " + serieA.data.standings[i].stats[5].displayValue + '</td>';
            //Calculate the goal difference from goals scored and conceded
            out += '<td>' + (serieA.data.standings[i].stats[4].displayValue - serieA.data.standings[i].stats[5].displayValue) + '</td>';
            out += '<td>' + serieA.data.standings[i].stats[6].displayValue + '</td>';
            out += '</tr>';
        }
        out += "</tbody>";
        document.getElementById("serieAData").innerHTML = out;
    }
}

//Creates a request using the ligue1Url
var ligue1Request = new XMLHttpRequest();
ligue1Request.open("GET", ligue1Url);
ligue1Request.send();
//Executes the function if the page is completely loaded up
ligue1Request.onreadystatechange = function() {
    if (ligue1Request.readyState == 4 && ligue1Request.status == 200) {

        //Fetches data from the API array to get the teams in order and puts them into a table
        //The fetched data includes: league position, name, matches played/won/drawn/lost, goal difference and points
        jsonObj = JSON.parse(ligue1Request.responseText);
        var ligue1 = jsonObj;
        var out ="<tbody>";
        for (var i = 0; i < ligue1.data.standings.length; i++) {
            out += '<tr>';
            if (i <= 2) {
                //Adds a class to colour cordinate them depending on their league position
                out += '<td class="ucl">' + ligue1.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i == 3) {
                out += '<td class="uel">' + ligue1.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i >= 18) {
                out += '<td class="relegation">' + ligue1.data.standings[i].stats[8].displayValue + '</td>';
            } else if (i == 17) {
                out += '<td class="play-off">' + ligue1.data.standings[i].stats[8].displayValue + '</td>';            
            } else {
                out += '<td>' + ligue1.data.standings[i].stats[8].displayValue + '</td>';
            }            
            out += '<td class="team">' + ligue1.data.standings[i].team.name + '</td>';
            out += '<td>' + ligue1.data.standings[i].stats[3].displayValue + '</td>';
            out += '<td>' + ligue1.data.standings[i].stats[0].displayValue + '</td>';
            out += '<td>' + ligue1.data.standings[i].stats[2].displayValue + '</td>';
            out += '<td>' + ligue1.data.standings[i].stats[1].displayValue + '</td>';
            out += '<td>' + ligue1.data.standings[i].stats[4].displayValue + " - " + ligue1.data.standings[i].stats[5].displayValue + '</td>';
            //Calculate the goal difference from goals scored and conceded
            out += '<td>' + (ligue1.data.standings[i].stats[4].displayValue - ligue1.data.standings[i].stats[5].displayValue) + '</td>';
            out += '<td>' + ligue1.data.standings[i].stats[6].displayValue + '</td>';
            out += '</tr>';
        }
        out += "</tbody>";
        document.getElementById("ligue1Data").innerHTML = out;
    }
}
