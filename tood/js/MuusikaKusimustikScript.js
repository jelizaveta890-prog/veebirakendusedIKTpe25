function muusikaMuutus(viimaneValik) {
    let vastus = document.getElementById("muusikaVastus");
    let pilt = document.getElementById("pilt1");
    let tekst = "";

    for (let i = 1; i <= 5; i++) {
        let bänd = document.getElementById("m" + i);
        if (bänd && bänd.checked) {
            tekst += bänd.value + ", ";
        }
    }

    if (tekst === "") {
        if (vastus) vastus.innerHTML = "Sinu valitud muusikud: ";
        if (pilt) pilt.style.display = "none";
    } else {
        tekst = tekst.slice(0, -2);
        if (vastus) vastus.innerHTML = "Sinu valitud muusikud: " + tekst;

        if (viimaneValik && pilt) {
            pilt.src = "muusikapilt" + viimaneValik + ".jpg";
            pilt.style.display = "block";

            pilt.onerror = function() {
                this.src = "muusikapilt1.jpg";
            };
        }
    }
    if (vastus) vastus.style.color = "#3d77ff";
    return tekst;
}


function koolMuutus() {
    let sisend = document.getElementById("kool");
    let vastus = document.getElementById("koolVastus");
    let pilt = document.getElementById("pilt2");

    if (!sisend) return "";
    if (vastus) {
        vastus.innerHTML = "Sinu arvamus: " + sisend.value;
        vastus.style.color = "#3d77ff";
    }

    if (pilt) {
        pilt.style.display = "none";
    }
    return sisend.value;
}

function tunnidMuutus() {
    let sisend = document.getElementById("tunnid");
    let vastus = document.getElementById("tunnidVastus");
    let pilt = document.getElementById("pilt3");

    if (!sisend) return "0";
    if (vastus) {
        vastus.innerHTML = "Sa kuulad muusikat " + sisend.value + " tundi päevas";
        vastus.style.color = "#3d77ff";
    }

    if (pilt) {
        pilt.style.display = "none";
    }
    return sisend.value;
}

function raadioMuutus(valik) {
    let vastus = document.getElementById("raadioVastus");
    let pilt = document.getElementById("pilt4");
    let j = document.getElementById("rJah");
    let e = document.getElementById("rEi");
    let olek = "";

    if (j && j.checked) olek = j.value;
    else if (e && e.checked) olek = e.value;

    if (vastus) {
        vastus.innerHTML = "Raadio kuulamine: " + (olek || "valimata");
        vastus.style.color = "#3d77ff";
    }

    if (pilt) {
        pilt.style.display = "none";
    }
    return olek;
}

function jaamadMuutus() {
    let sisend = document.getElementById("jaamad");
    let vastus = document.getElementById("jaamadVastus");
    let pilt = document.getElementById("pilt5");

    if (!sisend) return "";
    if (vastus) {
        vastus.innerHTML = "Sinu nimetatud jaamad: " + sisend.value;
        vastus.style.color = "#3d77ff";
    }

    if (pilt) {
        pilt.style.display = "none";
    }
    return sisend.value;
}

function stiilMuutus() {
    let sisend = document.getElementById("stiil");
    let vastus = document.getElementById("stiilVastus");
    let pilt = document.getElementById("pilt6");

    if (!sisend) return "";
    let väärtus = sisend.value === "Vali" ? "" : sisend.value;

    if (vastus) {
        vastus.innerHTML = "Sinu vastus: " + väärtus;
        vastus.style.color = "#3d77ff";
    }

    if (pilt) {
        pilt.style.display = "none";
    }
    return väärtus;
}

function vormSaada() {
    let m = muusikaMuutus();
    let k = koolMuutus();
    let t = tunnidMuutus();
    let r = raadioMuutus();
    let j = jaamadMuutus();
    let s = stiilMuutus();
    let ala = document.getElementById("kokkuvote");

    if (ala) {
        ala.innerHTML = "Valitud muusikud: " + (m || "-") + "<br>"
            + "Arvamus koolis: " + (k || "-") + "<br>"
            + "Kuulamise tunnid: " + t + "<br>"
            + "Raadio kuulamine: " + (r || "-") + "<br>"
            + "Nimetatud jaamad: " + (j || "-") + "<br>"
            + "Eelistatud stiil: " + (s || "-");
        ala.className = "kastAktiivne";
    }
}

function vormPuhasta() {
    let v = document.getElementById("ankeet");
    if (v) v.reset();

    let nimekiri = ["muusikaVastus", "koolVastus", "tunnidVastus", "raadioVastus", "jaamadVastus", "stiilVastus", "kokkuvote"];
    nimekiri.forEach(function(id) {
        let el = document.getElementById(id);
        if (el) el.innerHTML = "";
    });

    let ala = document.getElementById("kokkuvote");
    if (ala) ala.className = "";

    for (let i = 1; i <= 6; i++) {
        let pilt = document.getElementById("pilt" + i);
        if (pilt) pilt.style.display = "none";
    }
}
