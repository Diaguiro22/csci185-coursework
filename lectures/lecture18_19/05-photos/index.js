const photos = [
    'images/poppies.jpg',
    'images/dogwoods.jpg',
    'images/blossom.jpg',
    'images/field3.jpg',
    'images/field4.jpg',
    'images/branch.jpg',
    'images/red.jpg',
    'images/purple2.jpg',
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

//What do you want to repeat: 
// 1. Create a DIV tag with a background image 
// 2. Target the item with the class of cards 
// How long? 
// Until we get to the last photo
// Whate changes each time? 
// 1. The slot or index where the photo is stored 


// Create a card for every image in the photos list using a for...of loop and
// template variables
let counter = 0;
while (counter < photos.length) {
    let template =`
    <div class="card" style="background-image:url('${photos[counter]}')"></div>
`;
    document.querySelector('.cards').insertAdjacentHTML('beforeend', template);   
counter += 1; 
}
