$('btnReset').addEventListener('click', reset);
$('btnWitch').addEventListener('click', questWitch_Complete);
$('btnRainbow').addEventListener('click', questRainbow_Complete);
$('btnPotion').addEventListener('click', questPotion_Complete);

function questWitch_Complete() {
    doQuest('Witch', 'Vége van. A boszorkány soha nem fog megbántani már. Innentől a béke a jelszó.', 'béke', 'https://youtu.be/-Z4jx5VMw8M');
}

function questRainbow_Complete() {
    if ($('btnWitch').innerText != 'KÉSZ')
    {
        alert('Még meg kell csinálnod az "Utolsó főellenség" küldetést!');
        return;
    }
    doQuest('Rainbow', 'Milyen a természet, ha színes? (1 szó)', 'Wonderful', 'https://youtu.be/knGhzlGsGtk');
}

function questPotion_Complete() {
    if ($('btnWitch').innerText != 'KÉSZ')
    {
        alert('Még meg kell csinálnod az "Utolsó főellenség" küldetést!');
        return;
    }
    doQuest('Potion', 'Mi volt a palack eredeti tartalma?', 'Potion of Regeneration');
}

function doQuest(questName, question, answer, reward) {
    if ($('btn' + questName).innerText == 'KÉSZ') window.location = reward;
    let ans = prompt(question);
    if (ans != answer)
    {
        alert('Nem sikerült teljesíteni a küldetést.');
    }
    else
    {
        $('btn' + questName).innerText = 'KÉSZ';
        localStorage.setItem('quest' + questName, 'KÉSZ');
        window.location = reward;
    }
}