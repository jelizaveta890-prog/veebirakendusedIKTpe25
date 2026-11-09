//sirge joon
function sirgeJoon(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200); //lõpppunkt
        t.stroke();
    }
}

function puhasta() {
    const tahvel = document.getElementById("tahvel");

    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.clearRect(0, 0, 500, 500);
    }
}

function kolmnurk(){
    const tahvel = document.getElementById("tahvel");

    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");

        //kolmnurk
        t.beginPath();
        t.strokeStyle="red";
        t.fillStyle="green"; //taust
        t.lineWidth=2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200);
        t.lineTo(50,200);
        t.lineTo(50,50); //lõppunkt
        t.stroke();
        t.fill();
    }
}

function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");

    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle="olive";

        t.fillRect(100, 50, Number(laius.value), Number(korgus.value));
    }
}

function ring(){
    const tahvel = document.getElementById("tahvel");
    const r = document.getElementById("raadius");
    const v = document.getElementById("varv");

    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();

        t.fillStyle = v.value;

        t.arc(100, 50, Number(r.value), 0, 2 * Math.PI);
        t.fill();
    }
}
function nagu() {
    const tahvel = document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.lineWidth = 3;
        t.strokeStyle = "black";
        t.arc(150, 250, 90, 0, 2 * Math.PI); // Keskpunkt (150, 250), raadius 90
        t.stroke();
    }
}

function nina() {
    const tahvel = document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.lineWidth = 2;
        t.strokeStyle = "black";
        t.strokeRect(140, 220, 20, 40); // x=140, y=220, laius=20, kõrgus=40
    }
}

function korvad() {
    const tahvel = document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.lineWidth = 2;
        t.strokeStyle = "black";
        t.strokeRect(45, 230, 15, 40);  // Vasak kõrv
        t.strokeRect(240, 230, 15, 40); // Parem kõrv
    }
}

function suu() {
    const tahvel = document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.lineWidth = 3;
        t.strokeStyle = "black";
        t.moveTo(110, 300);
        t.lineTo(190, 300);
        t.stroke();
    }
}

function vasakSilm() {
    const tahvel = document.getElementById("tahvel");
    const r = document.getElementById("vSilmRaadius");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.lineWidth = 2;
        t.strokeStyle = "black";
        t.arc(110, 200, Number(r.value), 0, 2 * Math.PI); // x=110, y=200
        t.stroke();
    }
}

function vasakSilmSisu() {
    const tahvel = document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "black";
        t.arc(110, 200, 5, 0, 2 * Math.PI); // Väike täpp silma keskele
        t.fill();
    }
}

function paremSilm() {
    const tahvel = document.getElementById("tahvel");
    const r = document.getElementById("pSilmRaadius");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.lineWidth = 2;
        t.strokeStyle = "black";
        t.arc(190, 200, Number(r.value), 0, 2 * Math.PI); // x=190, y=200
        t.stroke();
    }
}

function paremSilmSisu() {
    const tahvel = document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle = "black";
        t.arc(190, 200, 5, 0, 2 * Math.PI); // Väike täpp silma keskele
        t.fill();
    }
}