const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


// Animation Starts Here
// Page animation starts 
// const header = document.querySelector('header');
// const loadingPage = () => {
//     anime({
//         width: '20%'
//         targett: 'header',
//         easing: 'spring(1, 80, 10, 0)'
//       })
// }
// window.addEventListener('load', loadingPage);


// page transition animation.

// View resume hover animation animation
const view_resume_button = document.querySelector('.view-resume');
const mouseHoverAnimation = () => {
    anime({
        targets: view_resume_button,
        width: '40%',
        scale: {
            delay: 800,
            value: 1
        },
        duration: 1
    });
}
const mouseOutAnimation = () => {
    anime({
        targets: view_resume_button,
        width: '30%',
        scale: {
            delay: 800,
            value: 1
        },
        duration: 800
    });
}
view_resume_button.addEventListener('mouseover', mouseHoverAnimation);
view_resume_button.addEventListener('mouseout', mouseOutAnimation);
// Projects button animations
const button = document.querySelector('.button');
const mouseHoverAnimationProjectsButton = () => {
    anime({
        targets: button,
        width: '40%',
        scale: {
            delay: 800,
            value: 1
        },
        duration: 1
    });
}
const mouseOutAnimationProjectButton = () => {
    anime({
        targets: button,
        width: '30%',
        scale: {
        delay: 800,
        value: 1
        },
        duration: 800
    });
}
button.addEventListener('mouseover', mouseHoverAnimationProjectsButton);
button.addEventListener('mouseout', mouseOutAnimationProjectButton);