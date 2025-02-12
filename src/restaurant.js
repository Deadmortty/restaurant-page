import icecreamImage from "./images/icecreams.jpg"; // Import image


const createRestaurantHomePage = () => {

    const contentDiv = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // create image and append an image 
    const image = document.createElement("img");
    image.src = icecreamImage;
    image.alt = "Delicious Ice Cream";
    image.id = "icecream-img";
    pageContent.appendChild(image);

    // create and append headline
    const headline = document.createElement('h1');
    headline.textContent = "Cunk on Cuisine: Exploring Food, Poorly";
    pageContent.appendChild(headline);

    // create p and append it
    const paragraphLine = document.createElement('p');
    paragraphLine.textContent = "Ever wondered why toast exists? Or who decided ice cream should be cold? Neither have we, but we’re here to pretend we have."
    pageContent.appendChild(paragraphLine);

    // append pageContent that contains everything
    contentDiv.appendChild(pageContent);


}

export default createRestaurantHomePage;