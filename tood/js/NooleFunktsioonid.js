// // // Noolefunktsiooni näide
// // const tervita = () => {
// //     console.log("Tere maailm!");
// // };
// //
// // // Kutsumine jääb samaks
// // tervita();
//
//
// // var summa = function(a, b) {
// //     return a + b;
// // };
// //
// // var tulemus = summa(3, 5);
// // console.log(tulemus); // Väljund: 8
//
// // // Anonüümne funktsioon koos argumendiga
// // setTimeout(function() {
// //     console.log("Tere pärastlõunast!");
// // }, 1000);
//
// // var array = [1, 2, 3, 4, 5];
// //
// // array.forEach(function(element) {
// //     console.log(element);
// // });
// // const array = [1, 2, 3, 4, 5];
// //
// // array.forEach(function(element, index, array) {
// //     console.log("Element:", element);
// //     console.log("Index:", index);
// //     console.log("Array:", array);
// // });
// // (function() {
// //     var x = 10;
// //     console.log(x); // Väljund: 10
// // })();
// // const noolFunktsioon = () => {
// //     console.log("Tere noolfunktsioon!");
// // };
// // noolFunktsioon();
//
// // const noolFunktsioon = () => console.log("Tere noolfunktsioon!");
// // noolFunktsioon();
//
// //noolefunktsioon argumentidega
// // let tervita = (nimi) => {console.log(`Tere ${nimi}`)};
// // tervita("Juhan");
//
// let tervita2 = nimi => console.log(`Tere ${nimi}`);
// tervita2("Mari");

//kui kehas on rohkem ridu, siis sulud jäävad
// let liitmine = (a, b) => {
//     let result = a + b;
//     return result;
// };
// console.log(liitmine(3,5));

// //noolefunktsioon lihtsustatud argumentidega
// let liitmine = (a, b) => a + b;
// console.log(liitmine(3,5));

//noolefunktsioon ja massiviist elementide kuvamine
// const array = [1, 2, 3, 4, 5];
// array.forEach(element => console.log(element));

// const number = 5;
// const isEven = number => number % 2 === 0 ? "paaris" : "paaritu";
//
// console.log(isEven(number)); // Väljund: paaritu


// const arvud = [1, 2, 3, 4, 5];
//
// arvud.forEach(nr => {
//     const paaris = nr % 2 === 0 ? "paaris" : "paaritu";
//     console.log(`${nr} is ${paaris}`);
// });

// let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];
//
// nimed.forEach(function(nimi) {
//     console.log(`<li>${nimi}</li>`);
// });


// let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];
//
// const kasutaja = function(nimi) {
//     console.log(`<li>${nimi}</li>`);
// };
//
// nimed.forEach(kasutaja);

// let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];
//
// //pikalt
// const kasutaja = nimi => console.log(`<li>${nimi}</li>`);
// nimed.forEach(kasutaja);
//
// //lühidalt
// nimed.forEach(nimi => console.log(`<li>${nimi}</li>`));


// const teostaAJAXPäring = (url, callback) => {
//     setTimeout(() => {
//         const vastus = "Vastus andmebaasist";
//         callback(vastus);
//     }, 2000);
// };
//
// const callbackFunktsioon = (vastus) => {
//     console.log("Vastus saadud:", vastus);
// };
//
// teostaAJAXPäring("https://api.example.com/data", callbackFunktsioon);


let tulemusTekst = "";

function klassikalineNimi() {
    console.log("Jelizaveta Sukhomlynova");
    tulemusTekst += "<p>Jelizaveta Sukhomlynova</p>";
}

const nooleNimi = () => {
    console.log("Jelizaveta Sukhomlynova");
    tulemusTekst += "<p>Jelizaveta Sukhomlynova</p>";
};

klassikalineNimi();
nooleNimi();


const kuupaevEesti = (kuupaev) => {
    const kuud = [
        "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"
    ];

    const paev = kuupaev[0] + kuupaev[1];
    const kuuTekst = kuupaev[3] + kuupaev[4];
    const aasta = kuupaev[6] + kuupaev[7];

    const kuuNum = parseInt(kuuTekst);
    const kuuNimi = kuud[kuuNum - 1];

    const kuup = paev + "." + kuuTekst + "." + aasta;
    console.log(kuup);
    tulemusTekst += "<p>" + kuup + "</p>";
};

kuupaevEesti("29.10.26");


const arvutaMituJaKeskmine = (...arvud) => {
    const koguarv = arvud.length;
    let summa = 0;

    for (let i = 0; i < arvud.length; i++) {
        summa = summa + arvud[i];
    }

    const keskmine = summa / koguarv;

    console.log("Arve kokku: " + koguarv);
    console.log("Keskmine: " + keskmine);
    tulemusTekst += "<p>Arve kokku: " + koguarv + "</p>";
    tulemusTekst += "<p>Keskmine: " + keskmine + "</p>";
};

arvutaMituJaKeskmine(6, 12, 4, 8, 30, 48);


const salajaneSonum = (sonum) => {
    let täishäälikud = "aeiouõäöüAEIOUÕÄÖÜ";
    let vastus = "";

    for (let i = 0; i < sonum.length; i++) {
        let taht = sonum[i];
        let onTäishäälik = false;

        for (let j = 0; j < täishäälikud.length; j++) {
            if (taht === täishäälikud[j]) {
                onTäishäälik = true;
            }
        }

        if (onTäishäälik === true) {
            vastus = vastus + "*";
        } else {
            vastus = vastus + taht;
        }
    }

    console.log(vastus);
    tulemusTekst += "<p>" + vastus + "</p>";
};

salajaneSonum("Tere maailm");


const leiaUnikaalsedNimed = (massiiv) => {
    let tulemus = [];

    for (let i = 0; i < massiiv.length; i++) {
        let nimi = massiiv[i];
        let olemas = false;

        for (let j = 0; j < tulemus.length; j++) {
            if (tulemus[j] === nimi) {
                olemas = true;
            }
        }

        if (olemas === false) {
            tulemus.push(nimi);
        }
    }

    console.log(tulemus);
    tulemusTekst += "<p>" + tulemus.join(",") + "</p>";
};

const prooviNimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
leiaUnikaalsedNimed(prooviNimed);

document.getElementById("vastus2").innerHTML = tulemusTekst;