const cardObjectDefinitions = [
    {id:1, imagePath:'./images/spongebob.PNG'},
    {id:2, imagePath:'./images/mrkrabs.jpg'},
    {id:3, imagePath:'./images/squidward.PNG'},
    {id:4, imagePath:'./images/patrick.jpg'}
];

function createCard(cardItem) {
     
    //create div ements that make up a card
    const cardElem = createElement('div');
    const cardInnerElem = createElement('div');
    const cardBackElem = createElement('div');

    //create front and back image elements for a card
    const cardFrontImg = createElement('img');
    const cardBackImg = createElement('img');

    addClassToElement(cardElem, 'card');



}

function createElement(elemType) {
    return document.createElement(elemType);
}

function addClassToElement(elem, className) {
    elem.classList.add(className)
}