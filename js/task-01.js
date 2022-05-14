const elements = document.querySelectorAll('.item');
console.log("Nuber of categories:", elements.length);

elements.forEach(item => {
    const elemTitle = item.querySelector('.item h2');
    console.log('Category: ', elemTitle.textContent);
    const elementsLength = item.querySelectorAll('.item > ul > li');
    console.log('Elements: ', elementsLength.length);
});
