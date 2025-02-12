
import cunkfoodImage from './images/cunkfood.jpg'


const aboutFunc = () => {
    const contentDiv = document.querySelector('#content');

    let aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('class', 'about-div');
     

    //first inner div for aboutDiv
    let aboutInfoDiv = document.createElement('div');
    aboutInfoDiv.setAttribute('id', 'about-info');
    aboutDiv.appendChild(aboutInfoDiv);

    // first div for aboutInfoDiv
    let aboutInfoDiv1 = document.createElement('div');
    aboutInfoDiv1.setAttribute('id', 'image-div');
    aboutInfoDiv.appendChild(aboutInfoDiv1);

    let h1 = document.createElement('h1');
    h1.innerText = "Cunk on Cuisine";
    aboutInfoDiv1.appendChild(h1)

    let img = document.createElement('img');
    img.setAttribute('id', 'cunkfood');
    img.src = cunkfoodImage;
    img.alt = "Philomena Cunk";
    aboutInfoDiv1.appendChild(img);

    // second div for aboutInfoDiv
    let aboutInfoDiv2 = document.createElement('div');
    aboutInfoDiv2.setAttribute('id', 'outro');
    aboutInfoDiv.appendChild(aboutInfoDiv2)

    let h3One = document.createElement('h3');
    h3One.innerText = "At Cunk on Cuisine, we believe desserts should be indulgent, slightly confusing, and entirely unnecessary—just like most of history. Our menu is a carefully curated selection of sweet masterpieces, inspired by centuries of human innovation and a deep misunderstanding of what counts as 'healthy'.";
    aboutInfoDiv2.appendChild(h3One)

    let h3Two = document.createElement('h3');
    h3Two.innerText = "From our towering cakes to our unnecessarily tiny pastries, every dish here is made with love, sugar, and an alarming amount of butter. So whether you're here to celebrate, commiserate, or just avoid eating a real meal, we’ve got you covered.";
    aboutInfoDiv2.appendChild(h3Two);



    let h2 = document.createElement('h2');
    h2.innerText = "Come for the desserts. Stay for the existential crisis about how many calories are in them.";
    aboutInfoDiv2.appendChild(h2)

    // now we create the footer div with id footer
    let footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    aboutDiv.appendChild(footer);

    let h1Footer = document.createElement('h1');
    h1Footer.innerText = "Project Built with Modern Web Technologies";
    footer.appendChild(h1Footer);

    let footerPara = document.createElement('p');
    footerPara.innerText = "This project was developed using Webpack for module bundling and asset management, ensuring optimized builds and efficient dependency handling. The structure is based on HTML, CSS, and JavaScript (ES Modules), following a modular approach for better maintainability and scalability. Webpack is configured to process styles, images, and scripts, generating a clean and optimized distribution folder for deployment."
    footer.appendChild(footerPara);

    // appending aboutDiv in the content div
    contentDiv.appendChild(aboutDiv);


}

export default aboutFunc;