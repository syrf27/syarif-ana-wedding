import { data } from "../assets/data/data.js";
import { addClassElement, getQueryParameter, removeClassElement } from "../utils/helper.js";

export const welcome = () => {
    const welcomeElement = document.querySelector('.welcome');
    const homeElement = document.querySelector('.home');
    const navbarElement = document.querySelector('header nav');

    const figureElement = welcomeElement.querySelector('figure');
    const weddingToElement = welcomeElement.querySelector('p');
    const openWeddingButton = welcomeElement.querySelector('button');
    const [audioMusic, audioButton] = document.querySelector('.audio').children;
    const iconButton = audioButton.querySelector('i');

    const generateFigureContent = (bride) => {
        const { L: { nickname: brideLNickname }, P: { nickname: bridePNickname }, couple: coupleImage } = bride;
        return `
            <div style="position: relative; display: inline-block;">
                <div class="portrait-frame"></div>
                <img src="${coupleImage}" alt="couple animation">
            </div>
            <figcaption class="sacramento-font"><div class="heart-name-bg"><video autoplay loop muted playsinline><source src="src/assets/images/Heart fly transparent BG!.webm" type="video/webm"></video></div>${brideLNickname} <i class='bx bxs-heart-circle gold-text' style='font-size: 2rem; vertical-align: middle; margin: 0 0.5rem;'></i> ${bridePNickname}</figcaption>`;
    };

    const generateParameterContent = () => {
        const name = document.querySelector('#name');
        const params = getQueryParameter('to');

        if (params) {
            weddingToElement.innerHTML = `Kepada Yth Bapak/Ibu/Saudara/i<br><span>${params}</span>`;
            name.value = params;
        } else {
            weddingToElement.innerHTML = `Kepada Yth Bapak/Ibu/Saudara/i<br><span>Teman-teman semua</span>`;
        }
    }

    const initialAudio = () => {
        let isPlaying = false;

        audioMusic.innerHTML = `<source src=${data.audio} type="audio/mp3"/>`;

        audioButton.addEventListener('click', () => {

            if (isPlaying) {
                addClassElement(audioButton, 'active');
                removeClassElement(iconButton, 'bx-play-circle');
                addClassElement(iconButton, 'bx-pause-circle');
                audioMusic.play();
            } else {
                removeClassElement(audioButton, 'active');
                removeClassElement(iconButton, 'bx-pause-circle');
                addClassElement(iconButton, 'bx-play-circle');
                audioMusic.pause();
            }
            isPlaying = !isPlaying;
        });
    };

    openWeddingButton.addEventListener('click', () => {
        addClassElement(document.body, 'active');
        addClassElement(welcomeElement, 'hide');

        setTimeout(() => {
            addClassElement(homeElement, 'active');
            addClassElement(navbarElement, 'active');
            addClassElement(audioButton, 'show');
            removeClassElement(iconButton, 'bx-play-circle');
            addClassElement(iconButton, 'bx-pause-circle');
            audioMusic.play();
        }, 1500);

        setTimeout(() => {
            addClassElement(audioButton, 'active');
        }, 3000);
    });

    const initializeWelcome = () => {
        figureElement.innerHTML = generateFigureContent(data.bride);
        generateParameterContent();
        addClassElement(welcomeElement, 'active');
    }

    initializeWelcome();
    initialAudio();
}