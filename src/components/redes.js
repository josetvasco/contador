import imgFacebook from '../img/icon-facebook.png'
import imgInstagram from '../img/icon-instagram.png'
import imgPinterest from '../img/icon-pinterest.png'

export const redes = () => {

    const redFacebook = document.createElement('img');
    redFacebook.classList.add('red-facebook');
    redFacebook.src = imgFacebook;
    
    const redInstagram = document.createElement('img');
    redInstagram.classList.add('red-instagram');
    redInstagram.src = imgInstagram;

    const redPinterest = document.createElement('img');
    redPinterest.classList.add('red-pinterest');
    redPinterest.src = imgPinterest;

    const sectionRedes = document.createElement('section');
    sectionRedes.classList.add('section-redes');
    sectionRedes.append( redFacebook, redInstagram, redPinterest );

    return sectionRedes
}
