function $(id) { return document.getElementById(id); }

$('btn1').addEventListener('click', quest1_Complete);
$('btn2').addEventListener('click', quest2_Complete);

function quest1_Complete() {
    if ($('btn1').innerText == 'KÉSZ')
    {
        alert('Ez a küldetés már kész van!');
        return;
    }

    alert('Még nem tudod teljesíteni ezt a küldetést. Próbáld meg később!');
    return;

    let ans = prompt();

    $('btn1').innerText('KÉSZ');
}

function quest2_Complete() {
    if ($('btn1').innerText != 'KÉSZ')
    {
        alert('Még meg kell csinálnod az előző küldetést!');
        return;
    }
    if ($('btn2').innerText == 'KÉSZ')
    {
        alert('Ez a küldetés már kész van!');
        return;
    }

    alert('Még nem tudod teljesíteni ezt a küldetést. Próbáld meg később!');
    return;

    let ans = prompt('Mi volt a palack eredeti tartalma?');

    $('btn2').innerText('KÉSZ');
}