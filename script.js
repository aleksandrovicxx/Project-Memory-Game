let divZaSlike = document.getElementById('kartice');
let inputIme = document.getElementById('ime');
let radioLako = document.getElementById('lako');
let radioSrednje  = document.getElementById('srednje');
let radioTesko = document.getElementById('tesko');
let radioExpert = document.getElementById('expert');
let nivoi = document.getElementById('radioDugmad');
let vreme = document.getElementById('vreme');
let tabela = document.getElementById('tabela');
let drugaKolona = document.getElementById('drugaKolona');
let trecaKolona = document.getElementById('trecaKolona');
let cetvrtaKolona = document.getElementById('cetvrtaKolona');
let petaKolona = document.getElementById('petaKolona');
let sestaKolona = document.getElementById('sestaKolona');
let divZaTabelu = document.getElementById('divZaTabelu');
let rezultatiLako = document.getElementById('buttonLako');
let rezultatiSrednje = document.getElementById('buttonSrednje');
let rezultatiTesko = document.getElementById('buttonTesko');
let rezultatiExpert = document.getElementById('buttonExpert');

let sveSlike = [
    {
        "id": 1,
        "src" : "Slike/1.png",
        "class" : "zatvorena"
    },
    {
        "id": 2,
        "src" : "Slike/2.png",
        "class" : "zatvorena"
    },
    {
        "id": 3,
        "src" : "Slike/3.png",
        "class" : "zatvorena"
    },
    {
        "id": 4,
        "src" : "Slike/4.png",
        "class" : "zatvorena"
    },
    {
        "id": 5,
        "src" : "Slike/5.png",
        "class" : "zatvorena"
    },
    {
        "id": 6,
        "src" : "Slike/6.png",
        "class" : "zatvorena"
    },
    {
        "id": 7,
        "src" : "Slike/7.png",
        "class" : "zatvorena"
    },
    {
        "id": 8,
        "src" : "Slike/8.png",
        "class" : "zatvorena"
    },
    {
        "id": 9,
        "src" : "Slike/9.png",
        "class" : "zatvorena"
    },
    {
        "id": 10,
        "src" : "Slike/10.png",
        "class" : "zatvorena"
    },
    {
        "id": 11,
        "src" : "Slike/11.png",
        "class" : "zatvorena"
    },
    {
        "id": 12,
        "src" : "Slike/12.png",
        "class" : "zatvorena"
    },
    {
        "id": 13,
        "src" : "Slike/13.png",
        "class" : "zatvorena"
    },
    {
        "id": 14,
        "src" : "Slike/14.png",
        "class" : "zatvorena"
    },
    {
        "id": 15,
        "src" : "Slike/15.png",
        "class" : "zatvorena"
    },
    {
        "id": 16,
        "src" : "Slike/16.png",
        "class" : "zatvorena"
    },
    {
        "id": 17,
        "src" : "Slike/17.png",
        "class" : "zatvorena"
    },
    {
        "id": 18,
        "src" : "Slike/18.png",
        "class" : "zatvorena"
    },
    {
        "id": 19,
        "src" : "Slike/19.png",
        "class" : "zatvorena"
    },
    {
        "id":20,
        "src" : "Slike/20.png",
        "class" : "zatvorena"
    },
    {
        "id": 21,
        "src" : "Slike/21.png",
        "class" : "zatvorena"
    },
    {
        "id": 22,
        "src" : "Slike/22.png",
        "class" : "zatvorena"
    },
    {
        "id": 23,
        "src" : "Slike/23.png",
        "class" : "zatvorena"
    },
    {
        "id": 24,
        "src" : "Slike/24.png",
        "class" : "zatvorena"
    },
    {
        "id": 25,
        "src" : "Slike/25.png",
        "class" : "zatvorena"
    },
    {
        "id": 26,
        "src" : "Slike/26.png",
        "class" : "zatvorena"
    },
    {
        "id": 27,
        "src" : "Slike/27.png",
        "class" : "zatvorena"
    },
    {
        "id": 28,
        "src" : "Slike/28.png",
        "class" : "zatvorena"
    },
    {
        "id": 29,
        "src" : "Slike/29.png",
        "class" : "zatvorena"
    },
    {
        "id": 30,
        "src" : "Slike/30.png",
        "class" : "zatvorena"
    },
    {
        "id": 31,
        "src" : "Slike/31.png",
        "class" : "zatvorena"
    },
    {
        "id": 32,
        "src" : "Slike/32.png",
        "class" : "zatvorena"
    },
    {
        "id": 33,
        "src" : "Slike/33.png",
        "class" : "zatvorena"
    },
    {
        "id": 34,
        "src" : "Slike/34.png",
        "class" : "zatvorena"
    },
    {
        "id": 35,
        "src" : "Slike/35.png",
        "class" : "zatvorena"
    },
    {
        "id": 36,
        "src" : "Slike/36.png",
        "class" : "zatvorena"
    },
    {
        "id": 37,
        "src" : "Slike/37.png",
        "class" : "zatvorena"
    },
    {
        "id": 38,
        "src" : "Slike/38.png",
        "class" : "zatvorena"
    },
    {
        "id": 39,
        "src" : "Slike/39.png",
        "class" : "zatvorena"
    },
    {
        "id": 40,
        "src" : "Slike/40.png",
        "class" : "zatvorena"
    },
    {
        "id": 41,
        "src" : "Slike/41.png",
        "class" : "zatvorena"
    },
    {
        "id": 42,
        "src" : "Slike/42.png",
        "class" : "zatvorena"
    },
    {
        "id": 43,
        "src" : "Slike/43.png",
        "class" : "zatvorena"
    },
    {
        "id": 44,
        "src" : "Slike/44.png",
        "class" : "zatvorena"
    },
    {
        "id": 45,
        "src" : "Slike/45.png",
        "class" : "zatvorena"
    },
    {
        "id": 46,
        "src" : "Slike/46.png",
        "class" : "zatvorena"
    },
    {
        "id": 47,
        "src" : "Slike/47.png",
        "class" : "zatvorena"
    },
    {
        "id": 48,
        "src" : "Slike/48.png",
        "class" : "zatvorena"
    },
    {
        "id": 49,
        "src" : "Slike/49.png",
        "class" : "zatvorena"
    },
    {
        "id": 50,
        "src" : "Slike/50.png",
        "class" : "zatvorena"
    },
    {
        "id": 51,
        "src" : "Slike/51.png",
        "class" : "zatvorena"
    },
    {
        "id": "cover",
        "src": "Slike/cover.png",
        "class": "zatvorena"
    }
        
];

let cover = sveSlike[51];

let slike16 = [sveSlike[1], sveSlike[2], sveSlike[3], sveSlike[4], sveSlike[5], sveSlike[6], sveSlike[7], sveSlike[8], sveSlike[1], sveSlike[2], sveSlike[3], sveSlike[4], sveSlike[5], sveSlike[6], sveSlike[7], sveSlike[8]]
let slike36 = [sveSlike[1], sveSlike[2], sveSlike[3], sveSlike[4], sveSlike[5], sveSlike[6], sveSlike[7], sveSlike[8],sveSlike[9], sveSlike[10], sveSlike[11], sveSlike[12], sveSlike[13], sveSlike[14], sveSlike[15], sveSlike[16], sveSlike[17], sveSlike[18], sveSlike[1], sveSlike[2], sveSlike[3], sveSlike[4], sveSlike[5], sveSlike[6], sveSlike[7], sveSlike[8],sveSlike[9], sveSlike[10], sveSlike[11], sveSlike[12], sveSlike[13], sveSlike[14], sveSlike[15], sveSlike[16], sveSlike[17], sveSlike[18]];
let slike64 = [sveSlike[1], sveSlike[2], sveSlike[3], sveSlike[4], sveSlike[5], sveSlike[6], sveSlike[7], sveSlike[8],sveSlike[9], sveSlike[10], sveSlike[11], sveSlike[12], sveSlike[13], sveSlike[14], sveSlike[15], sveSlike[16], sveSlike[17], sveSlike[18], sveSlike[19], sveSlike[20], sveSlike[21], sveSlike[22], sveSlike[23], sveSlike[24], sveSlike[25], sveSlike[26],sveSlike[27], sveSlike[28], sveSlike[29], sveSlike[30], sveSlike[31], sveSlike[32], sveSlike[1], sveSlike[2], sveSlike[3], sveSlike[4], sveSlike[5], sveSlike[6], sveSlike[7], sveSlike[8],sveSlike[9], sveSlike[10], sveSlike[11], sveSlike[12], sveSlike[13], sveSlike[14], sveSlike[15], sveSlike[16], sveSlike[17], sveSlike[18], sveSlike[19], sveSlike[20], sveSlike[21], sveSlike[22], sveSlike[23], sveSlike[24], sveSlike[25], sveSlike[26],sveSlike[27], sveSlike[28], sveSlike[29], sveSlike[30], sveSlike[31], sveSlike[32]];
let slike100 = [sveSlike[1], sveSlike[2], sveSlike[3], sveSlike[4], sveSlike[5], sveSlike[6], sveSlike[7], sveSlike[8],sveSlike[9], sveSlike[10], sveSlike[11], sveSlike[12], sveSlike[13], sveSlike[14], sveSlike[15], sveSlike[16], sveSlike[17], sveSlike[18], sveSlike[19], sveSlike[20], sveSlike[21], sveSlike[22], sveSlike[23], sveSlike[24], sveSlike[25], sveSlike[26],sveSlike[27], sveSlike[28], sveSlike[29], sveSlike[30], sveSlike[31], sveSlike[32], sveSlike[33], sveSlike[34], sveSlike[35], sveSlike[36], sveSlike[37], sveSlike[38], sveSlike[39], sveSlike[40], sveSlike[41], sveSlike[42], sveSlike[43], sveSlike[44], sveSlike[45], sveSlike[46], sveSlike[47], sveSlike[48], sveSlike[49], sveSlike[50], sveSlike[1], sveSlike[2], sveSlike[3], sveSlike[4], sveSlike[5], sveSlike[6], sveSlike[7], sveSlike[8],sveSlike[9], sveSlike[10], sveSlike[11], sveSlike[12], sveSlike[13], sveSlike[14], sveSlike[15], sveSlike[16], sveSlike[17], sveSlike[18], sveSlike[19], sveSlike[20], sveSlike[21], sveSlike[22], sveSlike[23], sveSlike[24], sveSlike[25], sveSlike[26],sveSlike[27], sveSlike[28], sveSlike[29], sveSlike[30], sveSlike[31], sveSlike[32], sveSlike[33], sveSlike[34], sveSlike[35], sveSlike[36], sveSlike[37], sveSlike[38], sveSlike[39], sveSlike[40], sveSlike[41], sveSlike[42], sveSlike[43], sveSlike[44], sveSlike[45], sveSlike[46], sveSlike[47], sveSlike[48], sveSlike[49], sveSlike[50]];

let tabelaLako = document.createElement('table');
tabelaLako.classList.add('poravnanje');
let trSelekcijaLako = document.createElement('tr');
let tdimeLako = document.createElement('td');
tdimeLako.innerHTML = 'Ime';
trSelekcijaLako.appendChild(tdimeLako);
let tdvremeLako = document.createElement('td');
tdvremeLako.innerHTML = 'Vreme';
trSelekcijaLako.appendChild(tdvremeLako);
let tdnivoLako = document.createElement('td');
tdnivoLako.innerHTML = 'Nivo';
trSelekcijaLako.appendChild(tdnivoLako);
tabelaLako.appendChild(trSelekcijaLako);


let tabelaSrednje = document.createElement('table');
tabelaSrednje.classList.add('poravnanje');
let trSelekcijaSrednje = document.createElement('tr');
let tdimeSrednje = document.createElement('td');
tdimeSrednje.innerHTML = 'Ime';
trSelekcijaSrednje.appendChild(tdimeSrednje);
let tdvremeSrednje = document.createElement('td');
tdvremeSrednje.innerHTML = 'Vreme';
trSelekcijaSrednje.appendChild(tdvremeSrednje);
let tdnivoSrednje = document.createElement('td');
tdnivoSrednje.innerHTML = 'Nivo';
trSelekcijaSrednje.appendChild(tdnivoSrednje);
tabelaSrednje.appendChild(trSelekcijaSrednje);

let tabelaTesko = document.createElement('table');
tabelaTesko.classList.add('poravnanje');
let trSelekcijaTesko = document.createElement('tr');
let tdimeTesko = document.createElement('td');
tdimeTesko.innerHTML = 'Ime';
trSelekcijaTesko.appendChild(tdimeTesko);
let tdvremeTesko = document.createElement('td');
tdvremeTesko.innerHTML = 'Vreme';
trSelekcijaTesko.appendChild(tdvremeTesko);
let tdnivoTesko = document.createElement('td');
tdnivoTesko.innerHTML = 'Nivo';
trSelekcijaTesko.appendChild(tdnivoTesko);
tabelaTesko.appendChild(trSelekcijaTesko);

let tabelaExpert = document.createElement('table');
tabelaExpert.classList.add('poravnanje');
let trSelekcijaExpert = document.createElement('tr');
let tdimeExpert = document.createElement('td');
tdimeExpert.innerHTML = 'Ime';
trSelekcijaExpert.appendChild(tdimeExpert);
let tdvremeExpert = document.createElement('td');
tdvremeExpert.innerHTML = 'Vreme';
trSelekcijaExpert.appendChild(tdvremeExpert);
let tdnivoExpert = document.createElement('td');
tdnivoExpert.innerHTML = 'Nivo';
trSelekcijaExpert.appendChild(tdnivoExpert);
tabelaExpert.appendChild(trSelekcijaExpert);
divZaTabelu.appendChild(tabelaLako);

rezultatiLako.addEventListener('click', () => {
    divZaTabelu.innerHTML = `Tabela za lak nivo igre:`;
    divZaTabelu.appendChild(tabelaLako);
})
rezultatiSrednje.addEventListener('click', () => {
    divZaTabelu.innerHTML = `Tabela za srednji nivo igre:`;
    divZaTabelu.appendChild(tabelaSrednje);
})
rezultatiTesko.addEventListener('click', () => {
    divZaTabelu.innerHTML = `Tabela za teski nivo igre:`;
    divZaTabelu.appendChild(tabelaTesko);
});
rezultatiExpert.addEventListener('click', () => {
    divZaTabelu.innerHTML = `Tabela za najtezi nivo igre:`;
    divZaTabelu.appendChild(tabelaExpert);
});


function randomiziranje (niz) {
    for (let i = niz.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [niz[i], niz[j]] = [niz[j], niz[i]];
    }
    return niz;
}


inputIme.addEventListener('keyup', (e)=>{
    if(e.key === "Enter" && radioLako.checked){
        divZaSlike.innerHTML = '';
        igraLako();
    } else if (e.key === "Enter" && radioSrednje.checked){
        divZaSlike.innerHTML = '';
        igraSrednje();
    } else if (e.key === "Enter" && radioTesko.checked){
        divZaSlike.innerHTML = '';
        igraTesko();
    } else if (e.key === "Enter" && radioExpert.checked){
        divZaSlike.innerHTML = '';
        igraExpert();
    }
});

function igraLako() {
    let sekunde = 0;
    let stoperica = setInterval(() => {
        sekunde++;
        vreme.innerHTML = sekunde;
    }, 1000);


    let slike = randomiziranje(slike16);
    for (let i = 0; i < 16; i++){
        let img = document.createElement('img');
        img.src = cover.src;
        img.id = i;
        img.className = cover.class;
        divZaSlike.appendChild(img);
        if ((i + 1) % 4 === 0) {
            divZaSlike.appendChild(document.createElement('br'));
        }
    }
    let otvoreneSlike = [];
    let pogodjeneSlike = [];
    divZaSlike.addEventListener("click", event => {
        if(event.target.tagName == "IMG"){
            let kliknutaSlika = event.target;
            kliknutaSlika.src = slike[kliknutaSlika.id].src;
            otvoreneSlike.push(kliknutaSlika);
            console.log(otvoreneSlike);
            let prvaOtvorena = otvoreneSlike[0];
            let drugaOtvorena = otvoreneSlike[1];
            let ukupnoOtvorenih = otvoreneSlike.length;
            if(ukupnoOtvorenih == 2){
                if(prvaOtvorena.src == drugaOtvorena.src){
                pogodjeneSlike.push(prvaOtvorena);
                pogodjeneSlike.push(drugaOtvorena);
                otvoreneSlike=[];
                    if(pogodjeneSlike.length == slike.length){
                        stoperica = clearInterval(stoperica);
                        let tr = document.createElement('tr');
                        let tdIme = document.createElement('td');
                        let tdVreme = document.createElement('td');
                        let tdNivo = document.createElement('td');
                        tdIme.innerHTML = inputIme.value;
                        inputIme.value = '';
                        tdVreme.innerHTML = sekunde;
                        tdNivo.innerHTML = 'Lako';
                        tr.appendChild(tdIme);
                        tr.appendChild(tdVreme);
                        tr.appendChild(tdNivo);
                        tabelaLako.appendChild(tr);
                        setTimeout(() => {
                            alert('Kraj');
                        }, 200);
                    }
                } else {
                    otvoreneSlike=[];
                    setTimeout(function(){
                        prvaOtvorena.src = cover.src;
                        drugaOtvorena.src = cover.src;
                    }, 1000);
                } 
            } 
        }
    });
}

function igraSrednje() {
    let sekunde = 0;
    let stoperica = setInterval(() => {
        sekunde++;
        vreme.innerHTML = sekunde;
    }, 1000);


    let slike = randomiziranje(slike36);
    for (let i = 0; i < 36; i++){
        let img = document.createElement('img');
        img.src = cover.src;
        img.id = i;
        img.className = cover.class;
        divZaSlike.appendChild(img);
        if ((i + 1) % 6 === 0) {
            divZaSlike.appendChild(document.createElement('br'));
        }
    }
    let otvoreneSlike = [];
    let pogodjeneSlike = [];
    divZaSlike.addEventListener("click", event => {
        if(event.target.tagName == "IMG"){
            let kliknutaSlika = event.target;
            kliknutaSlika.src = slike[kliknutaSlika.id].src;
            otvoreneSlike.push(kliknutaSlika);
            console.log(otvoreneSlike);
            let prvaOtvorena = otvoreneSlike[0];
            let drugaOtvorena = otvoreneSlike[1];
            let ukupnoOtvorenih = otvoreneSlike.length;
            if(ukupnoOtvorenih == 2){
                if(prvaOtvorena.src == drugaOtvorena.src){
                pogodjeneSlike.push(prvaOtvorena);
                pogodjeneSlike.push(drugaOtvorena);
                otvoreneSlike=[];
                    if(pogodjeneSlike.length == slike.length){
                        stoperica = clearInterval(stoperica);
                        let tr = document.createElement('tr');
                        let tdIme = document.createElement('td');
                        let tdVreme = document.createElement('td');
                        let tdNivo = document.createElement('td');
                        tdIme.innerHTML = inputIme.value;
                        inputIme.value = '';
                        tdVreme.innerHTML = sekunde;
                        tdNivo.innerHTML = 'Srednje';
                        tr.appendChild(tdIme);
                        tr.appendChild(tdVreme);
                        tr.appendChild(tdNivo);
                        tabelaSrednje.appendChild(tr);
                        setTimeout(() => {
                            alert('Kraj');
                        }, 200);
                    }
                } else {
                    otvoreneSlike=[];
                    setTimeout(function(){
                        prvaOtvorena.src = cover.src;
                        drugaOtvorena.src = cover.src;
                    }, 1000);
                } 
            } 
        }
    });
}

function igraTesko() {
    let sekunde = 0;
    let stoperica = setInterval(() => {
        sekunde++;
        vreme.innerHTML = sekunde;
    }, 1000);


    let slike = randomiziranje(slike64);
    for (let i = 0; i < 64; i++){
        let img = document.createElement('img');
        img.src = cover.src;
        img.id = i;
        img.className = cover.class;
        divZaSlike.appendChild(img);
        if ((i + 1) % 8 === 0) {
            divZaSlike.appendChild(document.createElement('br'));
        }
    }
    let otvoreneSlike = [];
    let pogodjeneSlike = [];
    divZaSlike.addEventListener("click", event => {
        if(event.target.tagName == "IMG"){
            let kliknutaSlika = event.target;
            kliknutaSlika.src = slike[kliknutaSlika.id].src;
            otvoreneSlike.push(kliknutaSlika);
            console.log(otvoreneSlike);
            let prvaOtvorena = otvoreneSlike[0];
            let drugaOtvorena = otvoreneSlike[1];
            let ukupnoOtvorenih = otvoreneSlike.length;
            if(ukupnoOtvorenih == 2){
                if(prvaOtvorena.src == drugaOtvorena.src){
                pogodjeneSlike.push(prvaOtvorena);
                pogodjeneSlike.push(drugaOtvorena);
                otvoreneSlike=[];
                    if(pogodjeneSlike.length == slike.length){
                        stoperica = clearInterval(stoperica);
                        let tr = document.createElement('tr');
                        let tdIme = document.createElement('td');
                        let tdVreme = document.createElement('td');
                        let tdNivo = document.createElement('td');
                        tdIme.innerHTML = inputIme.value;
                        inputIme.value = '';
                        tdVreme.innerHTML = sekunde;
                        tdNivo.innerHTML = 'Tesko';
                        tr.appendChild(tdIme);
                        tr.appendChild(tdVreme);
                        tr.appendChild(tdNivo);
                        tabelaTesko.appendChild(tr);
                        setTimeout(() => {
                            alert('Kraj');
                        }, 200);
                    }
                } else {
                    otvoreneSlike=[];
                    setTimeout(function(){
                        prvaOtvorena.src = cover.src;
                        drugaOtvorena.src = cover.src;
                    }, 1000);
                } 
            } 
        }
    });
}

function igraExpert() {
    let sekunde = 0;
    let stoperica = setInterval(() => {
        sekunde++;
        vreme.innerHTML = sekunde;
    }, 1000);


    let slike = randomiziranje(slike100);
    for (let i = 0; i < 100; i++){
        let img = document.createElement('img');
        img.src = cover.src;
        img.id = i;
        img.className = cover.class;
        divZaSlike.appendChild(img);
        if ((i + 1) % 10 === 0) {
            divZaSlike.appendChild(document.createElement('br'));
        }
    }
    let otvoreneSlike = [];
    let pogodjeneSlike = [];
    divZaSlike.addEventListener("click", event => {
        if(event.target.tagName == "IMG"){
            let kliknutaSlika = event.target;
            kliknutaSlika.src = slike[kliknutaSlika.id].src;
            otvoreneSlike.push(kliknutaSlika);
            console.log(otvoreneSlike);
            let prvaOtvorena = otvoreneSlike[0];
            let drugaOtvorena = otvoreneSlike[1];
            let ukupnoOtvorenih = otvoreneSlike.length;
            if(ukupnoOtvorenih == 2){
                if(prvaOtvorena.src == drugaOtvorena.src){
                    console.log('pogodjeno');
                    pogodjeneSlike.push(prvaOtvorena);
                    pogodjeneSlike.push(drugaOtvorena);
                    otvoreneSlike=[];
                        if(pogodjeneSlike.length == slike.length){
                            stoperica = clearInterval(stoperica);
                            let tr = document.createElement('tr');
                            let tdIme = document.createElement('td');
                            let tdVreme = document.createElement('td');
                            let tdNivo = document.createElement('td');
                            tdIme.innerHTML = inputIme.value;
                            inputIme.value = '';
                            tdVreme.innerHTML = sekunde;
                            tdNivo.innerHTML = 'Expert';
                            tr.appendChild(tdIme);
                            tr.appendChild(tdVreme);
                            tr.appendChild(tdNivo);
                            tabelaExpert.appendChild(tr);
                            setTimeout(() => {
                                alert('Kraj');
                            }, 200);
                        }
                } else {
                    otvoreneSlike=[];
                    setTimeout(function(){
                        prvaOtvorena.src = cover.src;
                        drugaOtvorena.src = cover.src;
                    }, 1000);
                } 
            } 
        }
    });
}
