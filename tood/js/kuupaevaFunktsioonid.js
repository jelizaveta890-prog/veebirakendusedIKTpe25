const now = new Date();

const paev = now.getDate(); // tagastab kuupäeva päeva
const kuu = now.getMonth(); // tagastab kuu numbri (0-11)
const aasta = now.getFullYear(); // tagastab aasta
const np = now.getDay(); // tagastab nädalapäeva numbri (0-6)

const tunnid = now.getHours(); // tagastab tunnid (0-23)
const minutid = now.getMinutes(); // tagastab minutid (0-59)


console.log("Täna on " + paev + ". päev");
console.log("Kuu number on " + kuu);
console.log("Aasta on " + aasta);
console.log("Täna on " + np);
console.log("Kell on " + tunnid + ":" + minutid);



const kp = now.toLocaleDateString();
const kellaaeg = now.toLocaleTimeString();
const kp_kell = now.toLocaleString();

console.log("--- NÄIDE 2 TULEMUSED ---");
console.log(kp);
console.log(kellaaeg);
console.log(kp_kell);



const before = new Date(2025, 5, 26);

const ms = now.getTime() - before.getTime();
const paevad = ms / (1000 * 60 * 60 * 24);


console.log("Ajavahemik päevades: ", paevad);



function tanaOn() {
    const now = new Date();

    const paev = now.getDate();
    const kuu = now.getMonth();
    const aasta = now.getFullYear();
    const tunnid = now.getHours();
    const minutid = now.getMinutes();

    let vastus = document.getElementById("vastus");

    vastus.innerHTML =
        'Täna on ' + paev + "." + kuu + "." + aasta + '<br>' +
        'Kellaaeg on ' + tunnid + ':' + minutid;
}

function arvutaSynnipaevani() {
    const before = new Date(2027, 8, 2); // aasta, kuu, päev
    const now = new Date();

    const ms = before.getTime() - now.getTime();
    const paevad = ms / (1000 * 60 * 60 * 24); //päevades

    const paevadTaisarvuna = Math.ceil(paevad);

    let vastus = document.getElementById("vastus");

    vastus.innerHTML = 'Sünnipäevani on jäänud ' + paevadTaisarvuna + ' päeva.';
}
