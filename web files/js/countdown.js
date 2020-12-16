const url = "https://api.spacexdata.com/v4/launches/";

async function fetchData() {
    try {
        const response = await fetch(url);
        const launches = await response.json();
        displayData(launches);

    } catch (error) {
        console.log(error);
    }
}

fetchData();

function displayData(launches) {
    console.log(launches);


    const countdown = document.querySelector(".cd");

    for (let i = 0; i < launches.length; i++) {

        if (launches[i].upcoming === false) {
            continue;
        }


        const nextLaunchCountdown = new Date(`${launches[i].date_local}`).getTime();

        const x = setInterval(function () {

            const now = new Date().getTime();

            const distance = nextLaunchCountdown - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            let countdownClock = "";

            countdownClock += `<div>
                        <p>${days}d ${hours}h ${minutes}m ${seconds}s</p>                 
                    </div>`;

            countdown.innerHTML = countdownClock;
        }, 1000);

    }
}