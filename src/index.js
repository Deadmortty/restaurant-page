import './styles/style.css';
import { initialLoad as pageLoad, menuLoad, aboutLoad} from './pageLoad';

// import cunkfoodImage from './images/cunkfood.jpg'

// document.getElementById('cunkfood').src = cunkfoodImage;

document.body.addEventListener('click', clickHandler)
 
function clickHandler(e) {
    let contentOfPage = document.querySelector('#content');
    let pageContent = document.querySelector('.page-content');
    let menu = document.querySelector('#menu');
    let about = document.querySelector('.about-div');

    if (e.target.id === "homeBtn") {
        if (!pageContent) {
            pageLoad();
        }
        if (menu) contentOfPage.removeChild(menu);
        if (about) contentOfPage.removeChild(about);
        return;
    }

    if (e.target.id === "menuBtn") {
        if (!menu) {
            menuLoad();
        }
        if (pageContent) contentOfPage.removeChild(pageContent);
        if (about) contentOfPage.removeChild(about);
        return;
    }

    if (e.target.id === "aboutBtn") {
        if (!about) {
            aboutLoad();
        }
        if (pageContent) contentOfPage.removeChild(pageContent);
        if (menu) contentOfPage.removeChild(menu);
    }
}

//  pageLoad();
//  menuCreaterFunc();


