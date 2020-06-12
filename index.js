function $(id) { return document.getElementById(id); }

$('btn1').addEventListener('click', quest1_Complete);
$('btn2').addEventListener('click', quest2_Complete);
$('btnReset').addEventListener('click', reset);

function quest1_Complete() {
    if ($('btn1').innerText == 'KÉSZ')
    {
        window.location = 'https://youtu.be/-Z4jx5VMw8M';
        return;
    }

    let ans = prompt('Vége van. A boszorkány soha nem fog megbántani már. Innentől a béke a jelszó.');

    if (ans != 'béke') return;

    $('btn1').innerText = 'KÉSZ';

    localStorage.setItem('quest1', 'KÉSZ');

    window.location = 'https://youtu.be/-Z4jx5VMw8M';
}

function quest2_Complete() {
    if ($('btn1').innerText != 'KÉSZ')
    {
        alert('Még meg kell csinálnod az "Utolsó főellenség" küldetést!');
        return;
    }
    if ($('btn2').innerText == 'KÉSZ')
    {
        alert('Ez a küldetés már kész van!');
        return;
    }

    let ans = prompt('Mi volt a palack eredeti tartalma?');

    if (ans != 'Potion of Regeneration') return;

    $('btn2').innerText = 'KÉSZ';
    
    localStorage.setItem('quest2', 'KÉSZ');
}

function reset() {
    localStorage.removeItem('quest1');
    localStorage.removeItem('quest2');
    window.location.reload();
}

if (localStorage.getItem('quest1') == 'KÉSZ') $('btn1').innerText = 'KÉSZ';
if (localStorage.getItem('quest2') == 'KÉSZ') $('btn2').innerText = 'KÉSZ';