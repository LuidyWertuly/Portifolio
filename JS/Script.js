//botão rolar pra cima

function backToTop(){
    //definindo a altura que ele vai subir//
    document.documentElement.scrollTop = 0
};

window.onscroll = function(){
    //chamando a função//
    scroll();
};

function scroll(){

    //definindo variaveis//

    var btn = document.getElementById('bnt-top')

    //fazendo o botão sumir e aparecer//

    if(document.documentElement.scrollTop > 120){
        btn.style.display = 'block';
    }
    else{
        btn.style.display = 'none';
    }
};

//botão rolar pra cima

//darkmode

function darkmode() {
    // Adicionando a classe 'dark' no body
    document.body.classList.toggle('darkmode');

    //definindo local storage
    
    if (document.body.classList.contains('darkmode')) {;
        localStorage.setItem('mode', 'dark');
    } 

    else {
        localStorage.setItem('mode', 'light');
    }
};

// Verificar o estado do tema no LocalStorage ao carregar a página

window.addEventListener('DOMContentLoaded', function() {
    var savedMode = localStorage.getItem('mode');

    if (savedMode === 'dark') {
        document.body.classList.add('darkmode');
    }
});

//darkmode

//menu-mobile

