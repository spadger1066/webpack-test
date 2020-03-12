import Berries from './berries.jpg';
import './berries-image.scss';

class BerriesImage {
    render() {
        const img = document.createElement('img');
        img.src = Berries;
        img.alt = 'Berries';
        img.classList.add('berries-image');

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default BerriesImage;
