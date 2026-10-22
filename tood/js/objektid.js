// let auto = {
//    mark: "Toyota",
//    mudel: "Corolla",
//    aasta: 2022,
//    varv: "punane",
//     lisavarustus: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"]
// };
// Väljastamiseks trüki välja kogu objekt:
//
//    console.log(auto);
//
// let auto = {
//     omadused
//    mark: "Toyota",
//    mudel: "Corolla L",
//    aasta: 2022,
//    varv: "punane",
//    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],
//
//     meetodid
//    taisnimi: function() {
//        return this.mark + " " + this.mudel;
//    }
// };
//
// console.log(auto.taisnimi());
//
// meetodid
// function taisnimi() {
//    return this.mark + " " + this.mudel;
// }
// let auto = {
//     omadused
//    mark: "Toyota",
//    mudel: "Corolla L",
//     aasta: 2022,
//    varv: "punane",
//    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],
//
//     meetodid
//    taisnimi() {
//        return this.mark + " " + this.mudel;
//    },
//
//    kuvaOmadused() {
//        this.omadused.forEach(omadus => console.log(omadus));
//    }
// };
//
// auto.kuvaOmadused();
//
// Kõikide mudelite nägemiseks kasutame jällegi forEach tsüklit
//
// let autod = [
//    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
//    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
//    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
// ];
//
//
// autod.forEach((auto) => {
//    console.log(`
//    Mark: ${auto.mark},
//    Mudel: ${auto.mudel},
//    Aasta: ${auto.aasta}
//    `);
// });
//
// 1. Loome algse massiivi kolme auto objektiga
// let autod = [
//    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
//    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
//    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
// ;
//
// 2. Lisab uue objekti massiivi LÕPPU (.push)
// autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });
//
// 3. Lisab uue objekti massiivi ALGUSESSE (.unshift)
// autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });
//
// 4. Eemaldab esimese objekti (.splice)
// autod.splice(0, 1);
//
// 5. Lisab objekti alates teisest indeksist, midagi kustutamata
// autod.splice(1, 0, { mark: 'Audi', mudel: 'A4', aasta: 2018 });
//
// Trükime tulemuse konsooli, et näha lõplikku massiivi nimekirja
// console.log(autod);
//
// --- Massiivist otsimine ---
// let autod = [
//     { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
//     { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
//     { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
// ];
//
// Esimene otsing: leiab esimese auto, mille aasta on suurem kui 2018
// let otsing1 = autod.find(auto => auto.aasta > 2018);
// console.log("Esimene otsing:", otsing1);
//
// Teine otsing: leiab auto, mille aasta on suurem kui 2018 JA mark on "Tesla"
// let otsing2 = autod.find(auto => auto.aasta > 2018 && auto.mark === "Tesla");
// console.log("Teine otsing:", otsing2);
//
//
// --- Massiivi filtreerimine ---
//
// 1. Näide: Arvude filtreerimine (paarisarvud)
// let arvud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const filtreeritud = arvud.filter(arv => arv % 2 === 0);
// console.log(filtreeritud);
//
//
// 2. Näide: Autode filtreerimine (kõik autod, mis on uuemad kui 2018)
// let autod = [
//    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
//    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
//    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
// ];
//
// let filter = autod.filter(auto => auto.aasta > 2018);
// console.log(filter);
//
//
// --- Massiivi sorteerimine ---
//
// 1. Loome algse autode massiivi (suvalises järjekorras)
// let autod = [
//    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 },
//    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
//    { mark: 'Honda', mudel: 'Civic', aasta: 2012 }
// ];
//
// 2. Sorteerime autod aasta järgi (vanemast uuemani)
// autod.sort((a, b) => a.aasta - b.aasta);
//
// 3. Kuvame tulemuse konsoolis
// console.log(autod);
//

// --- RAAMATU OBJEKT ---

// 1. Teen raamatu objekti kolme omadusega
let raamat = {
    pealkiri: "Tõde ja õigus I",
    autor: "A. H. Tammsaare",
    aasta: 1926,

    // 2. Meetod kirjelduse kuvamiseks
    kuvaKirjeldus() {
        return "Raamat: " + this.pealkiri + ", autor: " + this.autor;
    },

    // 3. Meetod mis muudab aastat ja prindib konsooli
    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
        console.log("Uus aasta on nüüd: " + this.aasta);
    }
};

// Testin korra konsoolis
console.log(raamat.kuvaKirjeldus());
raamat.muudaAastat(1930);


// --- RAAMATUKOGU ---

// 1. Teen raamatukogu objekti, kus on raamatute massiiv
let raamatukogu = {
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Harry Potter", autor: "J.K. Rowling", aasta: 1997 },
        { pealkiri: "Mees, kes teadis ussisõnu", autor: "Andrus Kivirähk", aasta: 2007 },
        { pealkiri: "Nimed marmortahvlil", autor: "Albert Kivikas", aasta: 1936 }
    ],

    // 2. Kuvab kõik raamatud konsoolis
    kuvaKõik() {
        this.raamatud.forEach(raamat => {
            console.log(raamat.pealkiri + " - " + raamat.autor + " (" + raamat.aasta + ")");
        });
    },

    // 3. Lisab uue raamatu nimekirja
    lisaUusRaamat(uusPealkiri, uusAutor, uusAasta) {
        this.raamatud.push({ pealkiri: uusPealkiri, autor: uusAutor, aasta: uusAasta });
    },

    // 4. Kuvab raamatute koguarvu
    koguarv() {
        console.log("Raamatuid on kokku: " + this.raamatud.length);
    },

    // 5. Arvutab mitu raamatut on ilmunud pärast 2000. aastat
    ilmumisedPärast2000() {
        let mitu = 0;
        this.raamatud.forEach(raamat => {
            if (raamat.aasta > 2000) {
                mitu++;
            }
        });
        console.log("Pärast 2000 aastat ilmunud: " + mitu);
    },

    // 6. Minu enda tehtud meetod - otsib raamatut pealkirja järgi
    otsiPealkirja(nimi) {
        let leitud = this.raamatud.find(raamat => raamat.pealkiri === nimi);
        if (leitud) {
            console.log("Leidsin! Autori nimi on: " + leitud.autor);
        } else {
            console.log("Ei leidnud sellist raamatut.");
        }
    }
};

// --- KÄIVITAMINE JA TULEMUSED ---

// 1. Kuvame asjad konsoolis
raamatukogu.kuvaKõik();
raamatukogu.lisaUusRaamat("Uus raamat", "Keegi Autor", 2015);
raamatukogu.koguarv();
raamatukogu.ilmumisedPärast2000();
raamatukogu.otsiPealkirja("Kevade");


// 2. Kuva lehe peal (HTML-is peab olema id="vastus2")
let htmlTekst = "";
raamatukogu.raamatud.forEach(raamat => {
    htmlTekst += "<p><b>Pealkiri:</b> " + raamat.pealkiri + "<br>";
    htmlTekst += "<b>Autor:</b> " + raamat.autor + "<br>";
    htmlTekst += "<b>Aasta:</b> " + raamat.aasta + "</p><hr>";
});

let leheKoht = document.getElementById("vastus2");
if (leheKoht) {
    leheKoht.innerHTML = htmlTekst;
}


