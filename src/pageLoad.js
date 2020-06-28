let pageLoadContent = (value) =>{
    //Initialize code

    const node = document.querySelector(`#${value}`);
    const restTitle = document.createElement('h1')
    const headingImage = document.createElement('img');
    const tabs = document.createElement('div');
    const aboutTab = document.createElement('h3');
    const menuTab = document.createElement('h3');
    const contactTab = document.createElement('h3');
    const tabContent = document.createElement('div');

    //Base menu
    tabs.setAttribute('id','tabCont')
    restTitle.setAttribute('id','rest-tit')
    restTitle.innerText = "Lodge 49";
    headingImage.setAttribute('id', 'lodge49');
    headingImage.setAttribute("src", './images/anchorClip.png');
    aboutTab.innerText = "About";
    aboutTab.setAttribute('class', 'tabs');
    aboutTab.setAttribute('id', 'about');
    menuTab.innerText = "Menu";
    menuTab.setAttribute('class', 'tabs');
    menuTab.setAttribute('id', 'menu');
    contactTab.innerText = "Contact";
    contactTab.setAttribute('class', 'tabs');
    contactTab.setAttribute('id', 'contact');
    tabContent.setAttribute('id', 'tabContent');


    //Append to corresponding div
    tabs.appendChild(aboutTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);
    node.appendChild(restTitle);
    node.appendChild(headingImage);
    node.appendChild(tabs);
    node.appendChild(tabContent);













}

export {pageLoadContent}


