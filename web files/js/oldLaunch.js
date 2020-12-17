// JavaScript Document
const url = "https://api.spacexdata.com/v4/launches/";

async function fetchData(){
    try{
        const response = await fetch(url);
        const launches = await response.json();
        displayOldData(launches);
    }catch(error){
        console.log(error);
    }
}

fetchData();


//Display function for API call
function displayOldData(launches){
    console.log(launches);
    const oldLaunchDetails = document.querySelector(".launchCardOld");
    const oldDates = document.querySelector(".oldDates");

    let calendar = "";
    let html = "";

    for(let i = 0; i < launches.length; i++){

        if(launches[i].upcoming === true){
            continue;
        }
		//No info available in API, show this msg
        let launchDets = "No information available";

        if(launches[i].details){
            launchDets = launches[i].details;
        }
		//No img available in API, no img displayed
        let imgUrl = "";

        if(launches[i].links.patch.small){
            imgUrl = launches[i].links.patch.small;
        }
		//Dates shown localy, not displayed in html, but easy to implement
        calendar += `<div class="oldDates">
                        <p>${launches[i].date_local}</p>
                    </div>`;

        html += `<div class="details">
                   <img src="${imgUrl}">
                   <h3>${launches[i].name}</h3>
                   <p class="flightNum">Flight Number: ${launches[i].flight_number}</p>
                   <p class="launchDate">${launches[i].date_local}</p>
                   <p class="launchDetails">${launchDets}</p>
                </div>`
    }
    oldLaunchDetails.innerHTML = html;
    oldDates = calendar;
}