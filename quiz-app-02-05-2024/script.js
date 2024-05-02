// OOP: Nesne Tabanlı Programlama
//Object

// let soru = {
//     soruMetni : "Hangisi javascript paket yönetim uygulamasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function(cevap){
//        return cevap === this.dogruCevap
//     }
// }
// Sınıf ,Constructor => nesne*30
//ES5,ES6,ES7,ES8



function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;    

       console.log(this);   
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}       

let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm"},"c");
let soru2 = new Soru("Hangisi .Net paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b");

let sorular = [
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm"},"c"),
    new Soru("Hangisi .Net paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("Hangisi xamarin paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("Hangisi django paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("Hangisi flutter paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("Hangisi fsdf paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("Hangisi gsfgsf paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("Hangisi sgsd paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b")
];






console.log(soru1.cevabiKontrolEt("c"));

// console.log(soru1.soruMetni);
// console.log(soru1.dogruCevap);


// console.log(soru2.soruMetni);
// console.log(soru2.dogruCevap);


// console.log(sorular[0].soruMetni);

// for(let soru of sorular)
// {
//     console.log(soru.soruMetni);
// }

//console.log(soru1.cevabiKontrolEt("c"));
//console.log(soru2.cevabiKontrolEt("c"));

