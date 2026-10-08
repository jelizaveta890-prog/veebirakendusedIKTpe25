function muusikaMuutus(viimaneValik) {
    let vastus = document.getElementById("muusikaVastus");
    let pilt = document.getElementById("pilt1");
    let tekst = "";

    for (let i = 1; i <= 5; i++) {
        let bänd = document.getElementById("m" + i);

        if (bänd.checked) {
            tekst += bänd.value + ", ";
        }
    }

    if (tekst == "") {
        vastus.innerHTML = "Sinu valitud muusikud: ";
        pilt.style.display = "none";
    } else {
        tekst = tekst.slice(0, -2);
        vastus.innerHTML = "Sinu valitud muusikud: " + tekst;

        if (viimaneValik) {
            pilt.src = "muusikapilt" + viimaneValik + ".jpg";
            pilt.style.display = "block";
        }
    }

    return tekst;
}


function koolMuutus() {
    let sisend = document.getElementById("kool");
    let vastus = document.getElementById("koolVastus");
    let pilt = document.getElementById("pilt2");

    vastus.innerHTML = "Sinu arvamus: " + sisend.value;

    if (sisend.value != "") {
        pilt.src = "muusikapilt6.jpg";
        pilt.style.display = "block";
    } else {
        pilt.style.display = "none";
    }

    return sisend.value;
}


function tunnidMuutus() {
    let sisend = document.getElementById("tunnid");
    let vastus = document.getElementById("tunnidVastus");
    let pilt = document.getElementById("pilt3");

    vastus.innerHTML =
        "Sa kuulad muusikat " + sisend.value + " tundi päevas";

    if (sisend.value > 0) {
        pilt.src = "muusikapilt7.jpg";
        pilt.style.display = "block";
    } else {
        pilt.style.display = "none";
    }

    return sisend.value;
}


function raadioMuutus() {
    let vastus = document.getElementById("raadioVastus");
    let pilt = document.getElementById("pilt4");

    let jah = document.getElementById("rJah");
    let ei = document.getElementById("rEi");

    let olek = "";

    if (jah.checked) {
        olek = jah.value;
        pilt.src = "muusikapilt4.jpg";
        pilt.style.display = "block";
    } else if (ei.checked) {
        olek = ei.value;
        pilt.src = "muusikapilt5.jpg";
        pilt.style.display = "block";
    }

    if (olek == "") {
        olek = "valimata";
    }

    vastus.innerHTML = "Raadio kuulamine: " + olek;

    return olek;
}


function jaamadMuutus() {
    let sisend = document.getElementById("jaamad");
    let vastus = document.getElementById("jaamadVastus");
    let pilt = document.getElementById("pilt5");

    vastus.innerHTML =
        "Sinu nimetatud jaamad: " + sisend.value;

    if (sisend.value != "") {
        pilt.src = "muusikapilt8.jpg";
        pilt.style.display = "block";
    } else {
        pilt.style.display = "none";
    }

    return sisend.value;
}


function stiilMuutus() {
    let sisend = document.getElementById("stiil");
    let vastus = document.getElementById("stiilVastus");
    let pilt = document.getElementById("pilt6");

    if (sisend.value == "Vali") {
        vastus.innerHTML = "Palun vali muusikastiil";
        pilt.style.display = "none";
    } else {
        vastus.innerHTML = "Sinu vastus: " + sisend.value;
        pilt.src = "muusikapilt9.jpg";
        pilt.style.display = "block";
    }

    return sisend.value;
}


function vormSaada() {
    let m = muusikaMuutus();
    let k = koolMuutus();
    let t = tunnidMuutus();
    let r = raadioMuutus();
    let j = jaamadMuutus();
    let s = stiilMuutus();

    let kokkuvote = document.getElementById("kokkuvote");

    kokkuvote.innerHTML =
        "Valitud muusikud: " + m + "<br>" +
        "Arvamus koolis: " + k + "<br>" +
        "Kuulamise tunnid: " + t + "<br>" +
        "Raadio kuulamine: " + r + "<br>" +
        "Nimetatud jaamad: " + j + "<br>" +
        "Eelistatud stiil: " + s;
}


function vormPuhasta() {
    document.getElementById("ankeet").reset();

    document.getElementById("muusikaVastus").innerHTML = "";
    document.getElementById("koolVastus").innerHTML = "";
    document.getElementById("tunnidVastus").innerHTML = "";
    document.getElementById("raadioVastus").innerHTML = "";
    document.getElementById("jaamadVastus").innerHTML = "";
    document.getElementById("stiilVastus").innerHTML = "";
    document.getElementById("kokkuvote").innerHTML = "";

    for (let i = 1; i <= 6; i++) {
        let pilt = document.getElementById("pilt" + i);
        pilt.style.display = "none";
    }
}