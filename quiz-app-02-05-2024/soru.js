function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni,
    this.cevapSecenekleri = cevapSecenekleri,
    this.dogruCevap = dogruCevap  

         
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}       



let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?",{a: "Node.js",b: "Typescript",c: "Npm",d:"deneme"},"c"),
    new Soru("2-Hangisi .Net paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("3-Hangisi xamarin paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("4-Hangisi django paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("5-Hangisi flutter paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("6-Hangisi fsdf paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("7-Hangisi gsfgsf paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b"),
    new Soru("8-Hangisi sgsd paket yönetim uygulamasıdır?",{a: "Node.js",b:"Nuget",c: "Npm"},"b")
];