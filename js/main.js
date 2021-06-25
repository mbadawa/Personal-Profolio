// Menu functions
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.left = '1';
}
function close(){
    mainMenu.style.display = 'none';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
// Projects sections functions
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

// page transition animation.
// View resume hover animation animation
const button = document.querySelector('.button');
function mouseHoverAnimation(){
    anime({
        targets: button,
        width: '25%',
        scale: {
            delay: 800,
            value: 1
        },
        duration: 1
    });
}
function mouseOutAnimation(){
    anime({
        targets: button,
        width: '20%',
        scale: {
        delay: 800,
        value: 1
        },
        duration: 800
    });
}
button.addEventListener('mouseover', mouseHoverAnimation);
button.addEventListener('mouseout', mouseOutAnimation);
// View resume hover animation
const view_resume_button = document.querySelector('.view-resume');

function mouseHoverAnimationVeiwResume(){
    anime({
        targets:  view_resume_button,
        width: '25%',
        scale: {
            delay: 800,
            value: 1
        },
        duration: 1
    });
}
function mouseOutAnimationVeiwResume(){
    anime({
        targets: view_resume_button,
        width: '20%',
        scale: {
        delay: 800,
        value: 1
        },
        duration: 800
    });
}
view_resume_button.addEventListener('mouseover', mouseHoverAnimationVeiwResume);
view_resume_button.addEventListener('mouseout', mouseOutAnimationVeiwResume);