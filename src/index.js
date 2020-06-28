import {pageLoadContent} from './pageLoad';
import {about} from './about';
import {menu} from './menu';
import {contact} from './contact';

let tempName = (function() {
    function loadPages() {
        pageLoadContent("content");
        about("tabContent");
        menu("tabContent");
        contact("tabContent");
        tabLogic();
    };

    // Logic to control tabs switching
    function tabLogic() {
        const aboutTab = document.querySelector('#about');
        const aboutContent = document.querySelector('#aboutTab');
        const menuTab = document.querySelector('#menu');
        const menuContent = document.querySelector('#menuTab');
        const contactTab = document.querySelector('#contact');
        const contactContent = document.querySelector('#contactTab');

        aboutContent.style.display = 'initial';
        menuContent.style.display = 'none';
        contactContent.style.display = 'none';

        aboutTab.addEventListener('click', () => {
            aboutContent.style.display = 'initial';
            menuContent.style.display = 'none';
            contactContent.style.display = 'none';
        })

        menuTab.addEventListener('click', () => {
            menuContent.style.display = 'initial';
            aboutContent.style.display = 'none';
            contactContent.style.display = 'none';
        })

        contactTab.addEventListener('click', () => {
            contactContent.style.display = 'initial';
            menuContent.style.display = 'none';
            aboutContent.style.display = 'none';
        })
    }

    return {
        initialLoad: loadPages,
    };
})();

tempName.initialLoad();