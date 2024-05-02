function UI(){
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fa-solid fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fa-solid fa-times"></i></div>'
}


UI.prototype.soruGoster = function(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let option = '';

    for(let cevap in soru.cevapSecenekleri){
        option += 
        `
         <div class="option">  
            <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]} </span> 
         </div>
        
        `;
    }

    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = option;

    const options  = this.option_list.querySelectorAll(".option");

    for(let opt of options)
    {
       opt.setAttribute("onclick","optionSelected(this)")
    }    
    
}


UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru){
    let tag = `<span class="badge bg-warning text-dark"><b>${soruSirasi} / ${toplamSoru}</b></span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}
