function $(id) { return document.getElementById(id); }

function reset() {
    localStorage.removeItem('questWitch');
    localStorage.removeItem('questRainbow');
    localStorage.removeItem('questPotion');
    window.location.reload();
}

if (localStorage.getItem('questWitch') == 'KÉSZ') $('btnWitch').innerText = 'KÉSZ';
if (localStorage.getItem('questRainbow') == 'KÉSZ') $('btnRainbow').innerText = 'KÉSZ';
if (localStorage.getItem('questPotion') == 'KÉSZ') $('btnPotion').innerText = 'KÉSZ';