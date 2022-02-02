(function() {
    "use strict";

    var images = [
        'img/Almeida_ pic.jpg',
        'img/Almeida_text.jpg',
        'img/Bernardo_pic.jpg',
        'img/Bernardo_text.jpg',
        'img/Borges_Pic.jpg',
        'img/Borges_text.jpg',
        'img/Cao_pic.jpeg',
        'img/Cao_text.jpeg',
        'img/Carvalho_pic.jpg',
        'img/Carvalho_text.jpg',
        'img/Castro_pic.png',
        'img/Castro_text.png',
        'img/Duclos_pic.jpg',
        'img/Duclos_text.jpg',
        'img/fernandes_pic.jpg',
        'img/fernandes_text.jpg',
        'img/Ferreira_pic.jpg',
        'img/Ferreira_text.jpg',
        'img/Fonseca_pic.jpg',
        'img/Fonseca_text.jpg',
        'img/Fontes_pic.jpg',
        'img/Fontes_text.jpg',
        'img/Freitas_pic.jpg',
        'img/Freitas_text.jpg',
        'img/Gröpper_pic.jpg',
        'img/Gröpper_text.jpg',
        'img/guimaraes_pic.jpg',
        'img/guimaraes_text.jpg',
        'img/Jesus_pic.jpg',
        'img/Jesus_text.jpg',
        'img/Rodrigues_pic.JPG',
        'img/Rodrigues_text.JPG',
        'img/Macedo_pic.JPG',
        'img/Macedo_text.jpg',
        'img/Marques_pic.jpg',
        'img/Marques_text.jpg',
        'img/Martins_pic.jpg',
        'img/Martins_text.jpg',
        'img/Mesquita_pic.jpg',
        'img/Mesquita_text.jpg',
        'img/MonteiroJudgement_pic.jpg',
        'img/MonteiroJudgement_text.jpg',
        'img/MonteiroTheJudge_pic.jpg',
        'img/MonteiroTheJudge_text.jpg',
        'img/MonteiroTheSun_pic.jpg',
        'img/MonteiroTheSun_text.jpg',
        'img/Osório_pic.jpg',
        'img/Osório_text.jpg',
        'img/Pimenta_pic.JPG',
        'img/Pimenta_text.jpg',
        'img/pinho_pic.jpg',
        'img/pinho_text.jpg',
        'img/Souza_pic.jpg',
        'img/Souza_text.jpg',
        'img/Torresan_pic.jpg',
        'img/Torresan_text.jpg',
        'img/wriedt_pic.jpg',
        'img/wriedt_text.jpg',
    ];

    function getRandomImages(images) {
        var num = Math.floor(Math.random() * (images.length / 2)),
            pic = images[num * 2],
            pic2 = images[num * 2 + 1],
            imgStringArray = ['<img src="' + pic + '" height="80%" width="auto" />', '<img src="' + pic2 + '" height="80%" width="auto" />'];

        return imgStringArray;
        print(imgStringArray) 
    }

    var randomImages = getRandomImages(images)

    $("#picture").append(randomImages[0]);
    $("#picture2").append(randomImages[1]);

})();

mySounds = [    
'mp3/Almeida_poem_bg.mp3',
'mp3/Almeida_poem.mp3',
'mp3/Bernardo_combackground.mp3', 
'mp3/Bernardo_sembackground.mp3', 
'mp3/Borges_Poem_bg.mp3',
'mp3/Borges_Poem.mp3',
'mp3/Cao_poem_bg.mp3',
'mp3/Cao_poem.mp3',
'mp3/Carvalho_poem_.mp3',
'mp3/Carvalho_poem.mp3',
'mp3/Castro_poem_bg.mp3',
'mp3/Castro_poem.mp3',
'mp3/Duclos_poem_bg.mp3',
'mp3/Duclos_poem.mp3',
'mp3/fernandes_diogo_bg.mp3',
'mp3/fernandes_diogo_poem.mp3',
'mp3/Ferreira_poem_bg.mp3',
'mp3/Ferreira_poem.mp3',
'mp3/Fonseca_poem_bg.mp3',
'mp3/Fonseca_poem.mp3',
'mp3/Fontes_poem_bg.mp3',
'mp3/Fontes_poem.mp3',
'mp3/Freitas_poem_bg.mp3',
'mp3/Freitas_poem.mp3',
'mp3/Gröpper_Poem_bg.mp3',
'mp3/Gröpper_Poem.mp3',
'mp3/guimaraes_poem_bg.mp3',
'mp3/guimaraes_poem.mp3',
'mp3/Jesus_poem_bg.mp3',
'mp3/Jesus_poem.mp3', ]

function randomSound(sounds) {
    var num = Math.floor(Math.random() * 1000) % mySounds.length,
    sounds1 = sounds[num * 2],
    sounds2 = sounds[num * 2 + 1];

    $("#sounds1").playSound(mySounds[0]);
    $("#sounds2").playSound(mySounds[1]);   
}

