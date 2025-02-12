import stollenImage from "./images/stollen.jpg"; // Import image
import taiyakiImage from "./images/taiyaki.jpg"; // Import image
import ghulabImage from "./images/ghulab.jpg"; // Import image
import cannoliImage from "./images/cannoli.jpg"; // Import image
import chipcookieImage from "./images/chipcookie.jpg"; // Import image
import churronsImage from "./images/churrons.jpg"; // Import image


const menuCreaterFunc = () => {

    const contentMenuDiv = document.querySelector('#content');
    const pageMenuContent = document.createElement('div');
    pageMenuContent.setAttribute('id', 'menu');

    // creating a info div

    const infoDiv = document.createElement('div');
    infoDiv.setAttribute('class', 'info');

    // create h1 and p tag to put inside info div
    const h1 = document.createElement('h1');
    const para = document.createElement('p');

    // adding text content to these h1 and p tag
    h1.textContent = "Cunk on Cuisine – The Menu From Round the Globe."
    para.innerHTML = `Desserts have existed since the beginning of time, or at least since sugar was invented in 1974. <br>Nobody
                    really knows where they come from, but we do know they usually arrive at the end of a meal, like an
                    afterthought. <br>Here are some of our finest selections, all carefully made by people with access to a
                    kitchen.`

    // appending these inside info Div
    infoDiv.appendChild(h1);
    infoDiv.appendChild(para);
    pageMenuContent.appendChild(infoDiv); // appending info inside Menu Div


    // now we create another div and give it the id of menu-grid and append it inside the Menu div
    const MenuGrid = document.createElement('div');
    MenuGrid.setAttribute('id', 'menu-grid');

    // now we make row One with the class rows
    const rowOne = document.createElement('div');
    rowOne.setAttribute('class', 'rows');
    MenuGrid.appendChild(rowOne);
    // cell 1 of Row 1
    const cell1 = document.createElement('div');

    //adding image 
    const stollen = document.createElement("img");
    stollen.src = stollenImage;
    stollen.alt = "Delicious Stollen";
    cell1.appendChild(stollen);


    // // adding the para and button
    const cell1Para = document.createElement('p');
    cell1Para.innerText = "Stollen – A Christmas fruitcake that nobody actually likes, but everyone pretends to enjoy once a year.";
    cell1.appendChild(cell1Para);

    const cell1Btn = document.createElement('button');
    cell1Btn.innerText = "Add To Cart";
    cell1.appendChild(cell1Btn);
    rowOne.appendChild(cell1);
    // // end of cell 1 of row 1
    // // cell 2 of row 1
    const cell2 = document.createElement('div');

    // //adding image 
    const taiyaki = document.createElement("img");
    taiyaki.src = taiyakiImage;
    taiyaki.alt = "Delicious Taiyaki";
    cell2.appendChild(taiyaki);

    // // adding the para and button
    const cell2Para = document.createElement('p');
    cell2Para.innerText = "Taiyaki – A fish-shaped cake, for people who like their desserts to resemble wildlife.";
    cell2.appendChild(cell2Para);

    const cell2Btn = document.createElement('button');
    cell2Btn.innerText = "Add To Cart";
    cell2.appendChild(cell2Btn);
    rowOne.appendChild(cell2)

    // // end of cell 2 of row 1

    // // cell 3 of row 1
    const cell3 = document.createElement('div');

    // //adding image 
    const ghulab = document.createElement("img");
    ghulab.src = ghulabImage;
    ghulab.alt = "Delicious Ghulab Jamun";
    cell3.appendChild(ghulab);

    // // adding the para and button
    const cell3Para = document.createElement('p');
    cell3Para.innerText = "Gulab Jamun – Dough balls soaked in sugar syrup, proving that frying something and drowning it in sugar is a universal human instinct.";
    cell3.appendChild(cell3Para);

    const cell3Btn = document.createElement('button');
    cell3Btn.innerText = "Add To Cart";
    cell3.appendChild(cell3Btn);
    rowOne.appendChild(cell3)
    // // appending the whole row one
    // MenuGrid.appendChild(rowOne);
    // // end of row One

    // // now we make row Two with the class rows
    const rowTwo = document.createElement('div');
    rowTwo.setAttribute('class', 'rows');
    MenuGrid.appendChild(rowTwo)
    // // cell 1 of Row 2
    const cell1R2 = document.createElement('div');

    // //adding image in cell1R2
    const cannoli = document.createElement("img");
    cannoli.src = cannoliImage;
    cannoli.alt = "Delicious Cannoli";
    cell1R2.appendChild(cannoli);

    // // adding the para and button
    const cell1R2Para = document.createElement('p');
    cell1R2Para.innerText = "Cannoli – A crispy tube stuffed with sweet cheese, proving once again that Italians will put cheese in anything.";
    cell1R2.appendChild(cell1R2Para);

    const cell1R2Btn = document.createElement('button');
    cell1R2Btn.innerText = "Add To Cart";
    cell1R2.appendChild(cell1R2Btn);
    rowTwo.appendChild(cell1R2);
    // // end of cell 1 of row 2
    // // cell 2 of row 1
    const cell2R2 = document.createElement('div');

    // //adding image 
    const chipcookie = document.createElement("img");
    chipcookie.src = chipcookieImage;
    chipcookie.alt = "Delicious Cookie";
    cell2R2.appendChild(chipcookie);

    // // adding the para and button
    const cell2R2Para = document.createElement('p');
    cell2R2Para.innerText = "Chocolate Chip Cookie – Invented when someone accidentally dropped chocolate into dough and decided to just roll with it.";
    cell2R2.appendChild(cell2R2Para);

    const cell2R2Btn = document.createElement('button');
    cell2R2Btn.innerText = "Add To Cart";
    cell2R2.appendChild(cell2R2Btn);
    rowTwo.appendChild(cell2R2)

    // // end of cell 2 of row 1

    // // cell 3 of row 1
    const cell3R2 = document.createElement('div');

    // //adding image 
    const churrons = document.createElement("img");
    churrons.src = churronsImage;
    churrons.alt = "Delicious Churrons";
    cell3R2.appendChild(churrons);

    // // adding the para and button
    const cell3R2Para = document.createElement('p');
    cell3R2Para.innerText = "Churros – Basically, a deep-fried dough stick covered in sugar, because cinnamon alone wasn’t enough.";
    cell3R2.appendChild(cell3R2Para);

    const cell3R2Btn = document.createElement('button');
    cell3R2Btn.innerText = "Add To Cart";
    cell3R2.appendChild(cell3R2Btn);
    rowTwo.appendChild(cell3R2);
    // end of row two


    // appending the menu grid to pageContent 
    pageMenuContent.appendChild(MenuGrid);


    contentMenuDiv.appendChild(pageMenuContent);

}

export default menuCreaterFunc;