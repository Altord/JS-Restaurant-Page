function menu(value) {
    // Initilize
    const node = document.querySelector(`#${value}`);
    const menuTab = document.createElement('div');
    const menuContent = document.createElement('div');

    // Configure
    menuTab.setAttribute('id', 'menuTab');
    menuContent.innerHTML = meals.appetizers() + meals.mainC() + meals.drinks();

    // Append
    menuTab.appendChild(menuContent);
    node.appendChild(menuTab);
}

let meals = (function() {
    function appetizers() {
        let appetizerItems = `
            <div id="appetizers" class="meals">
                <h3 class="itemsHeader">Appetizers</h3>
                <div class="items">
                    <div class="item">
                        <h4>Salmon Mayo</h4>
                        <span>$5.99</span>
                    </div>
                    <div class="description">
                        Salmon, eggs and capers served on a sesame and flax flatbread.
                    </div>
                </div>
                <div class="items">
                    <div class="item">
                        <h4>Mackerel Sticks</h4>
                        <span>$8.99</span>
                    </div>
                    <div class="description">
                       Fried mackerel coated in breadcrumbs
                    </div>
                </div>
                <div class="items">
                    <div class="item">
                        <h4>Garlic bread</h4>
                        <span>$7.99</span>
                    </div>
                    <div class="description">
                        Good old garlic bread
                    </div>
                </div>
            </div>`;

        return appetizerItems;
    }

    function mainC() {
        let mainCItems = `
            <div id="mainC" class="meals">
                <h3 class="itemsHeader">Main Course</h3>
                <div class="items">
                    
                    <div class="item">
                    <img src="../dist/images/Seafood-Medley.jpg" alt="Seafood-Medly" class = 'foodImage'>
                        <h4>Seafood-Medley</h4>
                        <span>$12.45</span>
                    </div>
                    <div class="description">
                        Shrimps and clams covered in a Vodka red sauce and served on a bed of whole grain spaghetti
                    </div>
                </div>
                <div class="items">
                    <div class="item">
                        <img src = "../dist/images/SalmonCal" class="foodImage">
                        <h4 class="keto">Salmon with Cauliflower rice</h4>
                        <span>$12.95</span>
                    </div>
                    <div class="description">
                    Sugar free honey glazed salmon with a side of parmesan baked riced cauliflower
                    </div>
                </div>
               
                
                
                
                
            </div>`;

        return mainCItems;
    }

    function drinks() {
        let drinksItems = `
            <div id="drinks" class="meals">
                <h3 class="itemsHeader">Drinks</h3>
                <div class="items">
                    <div class="item">
                        <h4>Tomato Juice</h4>
                        <span>$3.75</span>
                    </div>
                    <div class="description">
                        Hand pressed tomatoes strained with added lemon, salt and sugar.
                    </div>
                </div>
                <div class="items">
                    <div class="item">
                        <h4>Wine</h4>
                        <span>$8.99 +</span>
                    </div>
                    <div class="description">
                        A fine selection of wines from our own hold, we also serve full bottles just notify the staff
                    </div>
                </div>
                <div class="items">
                    <div class="item">
                        <h4>Beer</h4>
                        <span>$4.99 +</span>
                    </div>
                    <div class="description">
                    Various IP's from local brewers, just ask us what we have on hand                
                    </div>
                </div>
                
             </div>`;

        return drinksItems;
    }

    return {
        appetizers: appetizers,
        mainC: mainC,
        drinks: drinks
    }
})();

export { menu };