export const backgroundImage = (src) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('background-img');

    return img;
}