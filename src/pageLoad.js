import createRestaurantHomePage from './restaurant';
import menuCreaterFunc from './menu';
import aboutFunc from './about';

function initialLoad(params) {
    createRestaurantHomePage();
}

function menuLoad () {
    menuCreaterFunc();
}

function aboutLoad () {
    aboutFunc();
}

export { initialLoad, menuLoad, aboutLoad };
