function calConfirmedCases() {
    var table = document.getElementById("table");
    var totalConfirmed = 0;
    for (var i = 1; i < table.rows.length; i++) {
        totalConfirmed = totalConfirmed + parseInt(table.rows[i].cells[6].innerHTML);
    }
    let b1=document.getElementById("b1");
    b1.innerHTML = "Total Confirmed Cases =" + totalConfirmed;
    
    var styles = {
        "background-color": "white",
         "color":"black"
    };
     
    var obj = document.getElementById("b1");
    Object.assign(obj.style, styles);
    
}

function calcTotalDeaths() {
    var table = document.getElementById("table");
    var totalDeaths = 0;
    for (var i = 1; i < table.rows.length; i++) {
        totalDeaths = totalDeaths + parseInt(table.rows[i].cells[7].innerHTML);
    }
    
    let b2=document.getElementById("b2");
    b2.innerHTML = "Total Death Cases =" + totalDeaths;
    var styles = {
        "background-color": "white",
         "color":"black"
    };
     
    var obj = document.getElementById("b2");
    Object.assign(obj.style, styles);
}

function calcTotalRecovered() {
    var table = document.getElementById("table");
    var totalRecoverd = 0;
    for (var i = 1; i < table.rows.length; i++) {
        totalRecoverd = totalRecoverd + parseInt(table.rows[i].cells[8].innerHTML);
    }
    let b3=document.getElementById("b3");
    b3.innerHTML = "Total Recovered Cases =" + totalRecoverd;

    var styles = {
        "background-color": "white",
         "color":"black"
    };
     
    var obj = document.getElementById("b3");
    Object.assign(obj.style, styles);
}

function calcTotalActiveCases() {
    var table = document.getElementById("table");
    var totalActiveCases = 0;
    for (var i = 1; i < table.rows.length; i++) {
        totalActiveCases = totalActiveCases + parseInt(table.rows[i].cells[9].innerHTML);
    }
    let b4=document.getElementById("b4");
    b4.innerHTML = "Total Active Cases =" + totalActiveCases;

    var styles = {
        "background-color": "white",
         "color":"black"
    };
     
    var obj = document.getElementById("b4");
    Object.assign(obj.style, styles);
}


var loader = '<div id="loading" style="margin-left:500px !important;"> </div>';
document.getElementById("data").innerHTML = loader;

fetch(`https://api.covid19api.com/dayone/country/india`).then((data) => {
    //console.log(data)   json format
    return data.json(); // converted to object
}).then((objectData) => {
    //console.log(objectData[0].ID);
    objectData.sort(function (a, b) {
        const date1 = new Date(a.Date)
        const date2 = new Date(b.Date)

        return date2 - date1;
    })

    let temp = "";
    objectData.map((values, index) => {

        temp += `
        <tr>
           
        <td>${values.ID}</td>
        <td>${values.Country}</td>
        <td>${values.CountryCode}</td>
        <td>${values.Province}</td>
        <td>${values.Lat}</td>
        <td>${values.Lon}</td>
        <td>${values.Confirmed}</td>
        <td>${values.Deaths}</td>
        <td>${values.Recovered}</td>
        <td>${values.Active}</td>
        <td>${new Date(values.Date).toLocaleDateString()}</td>
      </tr>
        `;


    });
    //loader.style.display = 'none';
    document.getElementById("data").innerHTML = temp;

    $(document).ready(function() {
        $('#table').DataTable( {
            "pagingType": "full_numbers"
            
        } );
    } );
})



function dataFetch(name) {

    document.getElementById("b1").innerHTML=`<button type="button" id="b1" class="btn btn-secondary" onclick="calConfirmedCases()">Total Cases</button>`;
    document.getElementById("b2").innerHTML=`<button type="button" id="b2" class="btn btn-secondary" onclick="calcTotalDeaths()">Total Cases</button>`
    document.getElementById("b3").innerHTML=`<button type="button" id="b3" class="btn btn-secondary" onclick="calcTotalRecovered()">Total Cases</button>`
    document.getElementById("b4").innerHTML=`<button type="button" id="b4" class="btn btn-secondary" onclick="calcTotalActiveCases()">Total Cases</button>`
    
    document.getElementById("data").innerHTML = loader;
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
                    
                    temp += `<td class="idData">${element.Lat}</td>`
                    temp += `<td class="idData">${element.Lon}</td>`
                    temp += `<td class="idData">${element.Confirmed}</td>`
                    temp += `<td class="idData">${element.Deaths}</td>`
                    temp += `<td class="idData">${element.Recovered}</td>`
                    temp += `<td class="idData">${element.Active}</td>`
                    temp += `<td class="idData">${new Date(element.Date).toLocaleDateString()}</td>`
                    
                    
                });
                
                document.getElementById('data').innerHTML = temp;
                $(document).ready(function() {
                    $('#table').DataTable( {
                        "pagingType": "full_numbers"
                       
                    } );
                } );

            }

        }
        );
}   



