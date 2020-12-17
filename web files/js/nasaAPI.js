const container = document.querySelector(".container");

const url = "https://api.nasa.gov/planetary/apod?api_key=tkDIgNMIkcJiyI9TDidqmu6fh7A8wc60gnFfFJMI";
//NASA API call, showing articles updated, regularly
async function fetchArticle() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
    }
    
}


fetchArticle();


function createHtml(details) {
    container.innerHTML = `<h2>${details.title}</h2>
                            <div class="details nasaArt"><img src="${details.hdurl}" alt="${details.title})" class="articleImg">
                            <p>${details.explanation}</p>
                            <time class="details-date">Released: ${details.date}</time>
                            </div>`;
}