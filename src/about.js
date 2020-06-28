let about = (value) =>{
    // Initialize
    const node = document.querySelector(`#${value}`);
    const aboutTab = document.createElement('div');
    const aboutContent = document.createElement('div');

    // Configure
    aboutTab.setAttribute('id', 'aboutTab');
    aboutContent.setAttribute('id', 'aboutContent');
    aboutContent.innerHTML = `
        <p>
            Lodge 49 opened up in 1989 as a classical family restaurant focused on delivering delicious local seafood and a unique selection of vintage wines.
            Our menu might not show variety but we value quality over quantity, so whether its a nice local made glass of beer or our dish of the day, we're never to dissapoint.
        </p>
        <br>
        <p>
           Our current menu consists of recently caught, fresh seafood which is humanly harvested and prepared by our Sous-chef Jean. Jean is a classically trained chef who
           earned his skills at the prestigious Le Cordon Bleu in France; a man of few words but many flavours, Jean's cooking has produced many regulars at our restaurant. Our 
           vintage Wines are carefully chosen by our owner and held in our own personal underground cellar in wooden barrels in order to provide only the highest quality tasting
           drinks available.
        </p>
        <br>
        <p>
            We can provide any alterations to dishes on request, we have Vegan and Keto options available. Please notify the staff of any allergies if you're ordering by phone
            prior to finalizing your order, we confirm delivery times prior to our runner leaving so please leave your phone on so we can contact you again.
        </p>
    `;

    // Append
    aboutTab.appendChild(aboutContent);
    node.appendChild(aboutTab);
}

export { about };