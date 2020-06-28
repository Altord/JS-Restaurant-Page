function contact(value) {
    // Initialize
    const node = document.querySelector(`#${value}`);
    const contactTab = document.createElement('div');
    const phoneNumberContainer = document.createElement('div');
    const phoneNumberHeading = document.createElement('h4');
    const phoneNumberPara = document.createElement('p');
    const contactForm = document.createElement('form');
    const fullNameLabel = document.createElement('label');
    const fullNameInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const commentLabel = document.createElement('label');
    const commentInput = document.createElement('textarea');
    const formSubmit = document.createElement('button');

    // Configure
    contactTab.setAttribute('id', 'contactTab');

    phoneNumberContainer.setAttribute('id', 'phoneNumber');
    phoneNumberHeading.innerText = "Call us at: ";
    phoneNumberPara.innerText = "555-555-5555";

    contactForm.setAttribute('id', 'contactForm');
    fullNameLabel.setAttribute('for', 'fullname');
    fullNameLabel.innerText = "Name:";
    fullNameInput.setAttribute('type', 'text');
    fullNameInput.setAttribute('id', 'fullname');
    fullNameInput.setAttribute('required', true);
    emailLabel.setAttribute('for', 'email');
    emailLabel.innerText = "Email:";
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('required', true);
    commentLabel.setAttribute('for', 'comment');
    commentLabel.innerText = "Enter your inquires here, and we will contact you.";
    commentInput.setAttribute('id', 'comment');
    commentInput.setAttribute('name', 'comment');
    commentInput.setAttribute('required', true);
    formSubmit.setAttribute('type', 'submit');
    formSubmit.setAttribute('id', 'submit');
    formSubmit.innerText = "Submit";

    // Append
    phoneNumberContainer.appendChild(phoneNumberHeading);
    phoneNumberContainer.appendChild(phoneNumberPara);

    contactForm.appendChild(fullNameLabel);
    contactForm.appendChild(fullNameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(commentLabel);
    contactForm.appendChild(commentInput);
    contactForm.appendChild(formSubmit);

    contactTab.appendChild(phoneNumberContainer);
    contactTab.appendChild(contactForm);
    node.appendChild(contactTab);
}

export { contact };