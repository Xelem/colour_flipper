// Using the Math.random function to generate a colour with and old function method

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', changeBackground);

// function changeBackground() {
//     let colour = '#';
//     colour += Math.random().toString(16).slice(2, 8)
//     document.querySelector('body').style.background = colour;
// } 

// Using the Math.random function to generate a colour with and new function method

const btn = document.querySelector('.btn');
btn.addEventListener('click', (changeBackground) => {
    let colour = '#';
    colour += Math.random().toString(16).slice(2, 8)
    document.querySelector('body').style.background = colour;
});

// Using the Math.random function to select a colour from an array with and old function method

// const btn = document.querySelector('.btn');
// colours = ['red', 'blue', 'yellow', 'black', 'green', 'orange', 'purple', 'black'];
// btn.addEventListener('click', changeBackground);

// function changeBackground() {
//     const colourIndex = Math.floor(Math.random()*colours.length)
//     document.querySelector('body').style.background = colours[colourIndex];
// };

// Using the Math.random function to select a colour from an array with and old function method
// const btn = document.querySelector('.btn');
// colours = ['red', 'blue', 'yellow', 'black', 'green', 'orange', 'purple', 'black'];
// btn.addEventListener('click', (changeBackground) => {
//     const colourIndex = Math.floor(Math.random()*colours.length)
//     document.querySelector('body').style.background = colours[colourIndex];
// });
