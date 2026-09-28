// 1. Bändide valik
function baendiValik(){
    let vastus1 = document.getElementById("vastus1");
    let smilers = document.getElementById("smilers");
    let terminaator = document.getElementById("terminaator");
    let b200 = document.getElementById("b200");

    let baendid = "";
    if (smilers.checked) {
        baendid = baendid + smilers.value + ", ";
    }
    if (terminaator.checked) {
        baendid = baendid + terminaator.value + ", ";
    }
    if (b200.checked) {
        baendid = baendid + b200.value + ", ";
    }

    if (baendid == "") {
        baendid = "sa ei valinud midagi";
    }

    vastus1.innerHTML = "Sinu valitud muusikud: " + baendid;
    return baendid;
}

// 2. Arvamus
function arvamusValik(){
    let vastus2 = document.getElementById("vastus2");
    let arvamus = document.getElementById("arvamus");

    vastus2.innerHTML = "Sinu arvamus: " + arvamus.value;
    return arvamus.value;
}

// 3. Tunnid
function tundiValik(){
    let vastus3 = document.getElementById("vastus3");
    let tunnid = document.getElementById("tunnid");

    vastus3.innerHTML = "Sa kuulad muusikat " + tunnid.value + " tundi päevas.";
    return tunnid.value;
}

// 4. Raadio
function raadioValik(){
    let vastus4 = document.getElementById("vastus4");
    let raadioJah = document.getElementById("raadioJah");
    let raadioEi = document.getElementById("raadioEi");

    let raadio = "";
    if (raadioJah.checked) {
        raadio = raadioJah.value;
    } else if (raadioEi.checked) {
        raadio = raadioEi.value;
    } else {
        raadio = "palun vali vastus";
    }

    vastus4.innerHTML = "Raadio kuulamine: " + raadio;
    return raadio;
}

// 5. Raadiojaamad
function jaamaValik(){
    let vastus5 = document.getElementById("vastus5");
    let jaamad = document.getElementById("jaamad");

    vastus5.innerHTML = "Sinu nimetatud jaamad: " + jaamad.value;
    return jaamad.value;
}

// 6. Muusikastiil
function stiiliValik(){
    let vastus6 = document.getElementById("vastus6");
    let stiil = document.getElementById("stiil");

    vastus6.innerHTML = "Sinu vastus: " + stiil.value;
    return stiil.value;
}

function saada(){
    let baendid = baendiValik();
    let arvamus = arvamusValik();
    let tunnid = tundiValik();
    let raadio = raadioValik();
    let jaamad = jaamaValik();
    let stiil = stiiliValik();

    let vastus7 = document.getElementById("vastus7");

    vastus7.innerHTML = 'Sisestatud bändid: ' + baendid + '<br>'
        + 'Arvamus koolis: ' + arvamus + '<br>'
        + 'Kuulamise tunnid: ' + tunnid + '<br>'
        + 'Kuulab raadiot: ' + raadio + '<br>'
        + 'Nimetatud jaamad: ' + jaamad + '<br>'
        + 'Lemmikstiil: ' + stiil;
}

// 8. Puhasta nupp
function puhasta(){
    document.getElementById("ankeetForm").reset();

    vastus1.innerHTML = "";
    vastus2.innerHTML = "";
    vastus3.innerHTML = "";
    vastus4.innerHTML = "";
    vastus5.innerHTML = "";
    vastus6.innerHTML = "";
    vastus7.innerHTML = "";
}
