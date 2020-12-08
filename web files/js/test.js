const container = document.querySelector(".container");

const url = "https://api.nasa.gov/planetary/apod?api_key=tkDIgNMIkcJiyI9TDidqmu6fh7A8wc60gnFfFJMI";

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
    container.innerHTML = `<h1>${details.title}</h1>
                            <div class="details-image" 
                                    style="background-image: url('${details.hdurl}')"></div>
                                <div class="details-description">${details.explanation}</div>
                                <time class="details-date">Released: ${details.date}</time>`;
}