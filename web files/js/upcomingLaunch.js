// JavaScript Document
const url = "https://api.spacexdata.com/v4/launches/";
//Call API from API key
async function fetchData(){
    try{
        const response = await fetch(url);
        const launches = await response.json();
        displayData(launches);
    }catch (error){
        console.log(error);
    }
}

fetchData();

//Display function for API call
function displayData(launches){
    console.log(launches);

    const launchDeets = document.querySelector(".launchCard");

    const futureDates = document.querySelector(".futureDates");

    let calendar = "";
    let html = "";

    for(let i = 0; i < launches.length; i++){
        if(launches[i].upcoming === false){
            continue;
        }
		//No info available in API, show this msg
        let launchDetes = "No info available"

        if(launches[i].details){
            launchDetes = launches[i].details
        }
		//No img available in API, no img displayed
        let rocketImg = "";
            if(launches[i].links.patch.small){
                rocketImg = launches[i].links.patch.small;
        }
		//Dates shown localy, not displayed in html, but easy to implement
        calendar += `<div class="upcomingLaunches">
                        <p>${launches[i].date_local}</p>
                    </div>`;

        html += `<div class="details">
                    <img src="${rocketImg}">
					<h3>${launches[i].name}</h3>
					<p class="flightNum">Flight Number: ${launches[i].flight_number}</p>
					<p class="launchDate">${launches[i].date_local}</p>
					<p class="launchDetails">${launchDetes}</p>
                </div>`
    }
    launchDeets.innerHTML = html;
    futureDates.innerHTML = calendar;
}