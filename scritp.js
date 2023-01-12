const mode = document.getElementById('dark-icon');
const app = document.getElementById('app');
const playerbox = document.getElementById('playerbox');
const Controls = document.getElementById('Controls');

mode.addEventListener('click', () => {

    if(mode.classList.contains('gg-moon')) {
        mode.classList.remove('gg-moon');
        mode.classList.add('gg-sun');
        app.classList.add('dark');
        playerbox.classList.add('dark');
        Controls.classList.add('dark');

        return;
    }

    mode.classList.add('gg-moon');
    mode.classList.remove('gg-sun');
    app.classList.remove('dark');
    playerbox.classList.remove('dark');
    Controls.classList.remove('dark');
});