function calConfirmedCases() {
    var table = document.getElementById("tableId");
    var totalConfirmed = 0;
    for (var i = 1; i < table.rows.length; i++) {
        totalConfirmed = totalConfirmed + parseInt(table.rows[i].cells[8].innerHTML);
    }
    document.getElementById("b1").innerHTML = "ConfirmedTotal =" + totalConfirmed;
}

function calcTotalDeaths() {
    var table = document.getElementById("tableId");
    var totalDeaths = 0;
    for (var i = 1; i < table.rows.length; i++) {
        totalDeaths = totalDeaths + parseInt(table.rows[i].cells[9].innerHTML);
    }
    document.getElementById("b2").innerHTML = "DeathsTotal =" + totalDeaths;
}

function calcTotalRecovered() {
    var table = document.getElementById("tableId");
    var totalRecoverd = 0;
    for (var i = 1; i < table.rows.length; i++) {
        totalRecoverd = totalRecoverd + parseInt(table.rows[i].cells[10].innerHTML);
    }
    document.getElementById("b3").innerHTML = "RecoveredTotal =" + totalRecoverd;
}

function calcTotalActiveCases() {
    var table = document.getElementById("tableId");
    var totalActiveCases = 0;
    for (var i = 1; i < table.rows.length; i++) {
        totalActiveCases = totalActiveCases + parseInt(table.rows[i].cells[11].innerHTML);
    }
    document.getElementById("b4").innerHTML = "ActiveTotal =" + totalActiveCases;
}


function getddl(name) {
    fetch(`https://api.covid19api.com/dayone/country/${name}`).then(response =>
        response.json()).then(data => {
            if (data.length > 0) {
                var temp = "";



                data.forEach(element => {
                   // console.log(element);
                    temp += "<tr>";
                    temp += `<td class="idData">${element.ID}</td>`
                    temp += `<td class="idData">${element.Country}</td>`
                    temp += `<td class="idData">${element.CountryCode}</td>`
                    temp += `<td class="idData">${element.Province}</td>`
                    temp += `<td class="idData">${element.City}</td>`
                    temp += `<td class="idData">${element.CityCode}</td>`
                    temp += `<td class="idData">${element.Lat}</td>`
                    temp += `<td class="idData">${element.Lon}</td>`
                    temp += `<td class="idData">${element.Confirmed}</td>`
                    temp += `<td class="idData">${element.Deaths}</td>`
                    temp += `<td class="idData">${element.Recovered}</td>`
                    temp += `<td class="idData">${element.Active}</td>`
                    temp += `<td class="idData">${element.Date}</td>`
                    
                    
                });
                
                document.getElementById('data').innerHTML = temp;
                $(document).ready(function() {
                    $('.table').DataTable( {
                        "order": [[ 12, "desc" ]]
                    } );
                } );

            }

        }
        );
}

// fetch(`https://api.covid19api.com/dayone/country/india`).then((data)=>{
//     //console.log(data)   json format
//     return data.json(); // converted to object
// }).then((objectData)=>{
//     //console.log(objectData[0].ID);
//     objectData.sort(function(a, b){
//         const date1 = new Date(a.Date)
//         const date2 = new Date(b.Date)
        
//         return date2 - date1;
//     })


