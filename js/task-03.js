const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeListOfImageRow = image => {
  // const { url, alt } = image;

  return `<li><img  url= ${image.url} alt= '${image.alt}' /></li>`;
}

console.log(images)
console.log(makeListOfImageRow(images[0]))
const listElement = document.querySelector('#gallery')
const makeListOfImagesElements = images
  .map(makeListOfImageRow)
  .join('');

listElement.insertAdjacentHTML('beforeend', makeListOfImagesElements)
console.log(makeListOfImagesElements)
listElement.setAttribute("style", "list-style:none; display: flex;")

