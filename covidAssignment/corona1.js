

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


