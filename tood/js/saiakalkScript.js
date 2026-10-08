function saiaKalk() {
    let vastus=document.getElementById("vastus");
    let saiatyype=document.getElementById("saiatyyp");
    const juustu=2.00;
    const mooni=1.30;
    const pontsik=3.00;
    const kaneeli=1.30;
    let kogus=document.getElementById("kogus");
    let pilt=document.getElementById("pilt");

    //if valikud selectedIndex
    //1.rida selectedIndex=0
    if(saiatyype.selectedIndex===0){
        vastus.innerHTML="palun vali saia tüüp!";
        vastus.style.color="red";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJ5yZ5TSfv4ZnNpx4XZYgADEIbohxG8I-GeNkvLOYwA&s=10";
    }
    if(saiatyype.selectedIndex===1){
        //ToFixed(2) - ümardab 2 kohta peale komat
        vastus.innerHTML=
            "Sa valisid "+saiatyype.value + '<br>'+
            "Valitud kogus on " + kogus.value +"tk"+'<br>'+
            "Kokku hind on "+(mooni*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-oA4lUJ8oBU5oNoL-lhJZiODU62v4T0zG3dupeKbzw&s=10";
    }
    if(saiatyype.selectedIndex===2){
        vastus.innerHTML=
            "Sa valisid "+saiatyype.value + '<br>'+
            "Valitud kogus on " + kogus.value +"tk"+'<br>'+
            "Kokku hind on "+(juustu*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapUl_44SJek86wy8yIjw6sJlj5EcMq1W55cVZleH9xw&s=10";
    }
    if(saiatyype.selectedIndex===3){
        vastus.innerHTML=
            "Sa valisid "+saiatyype.value + '<br>'+
            "Valitud kogus on " + kogus.value +"tk"+'<br>'+
            "Kokku hind on "+(pontsik*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp6ic6_w0IRwrz77B79wphT1w8uY2FlRIj18G6uNu_g&s=10";
    }
    if(saiatyype.selectedIndex===4){
        vastus.innerHTML=
            "Sa valisid "+saiatyype.value + '<br>'+
            "Valitud kogus on " + kogus.value +"tk"+'<br>'+
            "Kokku hind on "+(kaneeli*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-uhFvMF_2RhMMG52ARQ1ux89TWZzpfMs8QsrCHAPtA&s=10";
    }
}