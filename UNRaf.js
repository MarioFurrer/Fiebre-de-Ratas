class UNRaf extends Phaser.Scene{
    constructor(){
        super("UNRaf");
    }

    preload(){
        //preloader
        this.load.image("logoUNRaf", "assets/logoUnraf.png");

        //Menu
        this.load.image("Logo", "assets/logoJuego.png");
        this.load.image("Fondo", "assets/fondoMenu.png");

        this.load.audio("musicaMenu", "./assets/audio/MusicaMenuPrincipal.wav");
        this.load.audio("sonidoBoton", "./assets/audio/boton.wav");

        //Informacion

        //Ayuda

        //Creditos

        //Juego
        this.load.image("botonPausa", "assets/botonPausa.png");
        this.load.image("FondoJuego", "assets/fondoJuego.png");
        this.load.image("Cosecha", "assets/TrigoCreciendo.png");
        this.load.image("Molino", "assets/molino.png");
        this.load.image("Economia", "assets/cajaPuntos.png");
        this.load.image("Ubicacion", "assets/Ubicacion.png");
        this.load.image("CosechaLista", "assets/TrigoCrecido.png");
        this.load.image("Rata", "assets/RataEdited.png");
        this.load.image("Casa", "assets/casa.png");
        this.load.image("Gato", "assets/gato.png");
        this.load.image("Serpiente", "assets/Serpiente.png");
        this.load.image("Zorro", "assets/Zorro.png");
        this.load.image("abrirSelector", "assets/abrirSelector.png");
        this.load.image("cerrarSelector", "assets/cerrarSelector.png");
        this.load.image("selectorGato", "assets/selectorGato.png");
        this.load.image("selectorSerpiente", "assets/selectorSerpiente.png");
        this.load.image("selectorZorro", "assets/selectorZorro.png");
    
        this.load.image("HogarVida1", "assets/0vidas.png");
        this.load.image("HogarVida2", "assets/1vidas.png");
        this.load.image("HogarVida3", "assets/2vidas.png");
        this.load.image("HogarVida4", "assets/3vidas.png");
        this.load.image("HogarVida5", "assets/4vidas.png");
        this.load.image("HogarVida6", "assets/5vidas.png");
        this.load.image("HogarVida7", "assets/6vidas.png");
        this.load.image("HogarVida8", "assets/7vidas.png");
        this.load.image("HogarVida9", "assets/8vidas.png");
        this.load.image("HogarVida10", "assets/9vidas.png");

        this.load.audio("musicaIngame", "./assets/audio/MusicaIngame.wav");
        this.load.audio("sonidoTrigo", "./assets/audio/Cosechar.wav");
        this.load.audio("ubicarGato", "./assets/audio/GatoUbicar.wav");
        this.load.audio("ataqueGato", "./assets/audio/GatoAtaque.wav");

        //Pausa
        this.load.image('fondoOscurecido', 'assets/fondoOscurecido.png');

        //Victoria
        this.load.audio("musicaVictoria", "./assets/audio/MusicaVictoria.wav");

        //Derrota
    }

    create(){

        //Música Menu Principal
        musicaMenu = this.sound.add("musicaMenu" , {loop: true});

        //Música InGame
        musicaIngame = this.sound.add("musicaIngame" , {loop: true});

        //Música Victoria
        musicaVictoria = this.sound.add("musicaVictoria" , {loop: true});

        //Sonido de Interactuables
        sonidoBoton = this.sound.add("sonidoBoton" , {loop: false});

        //Sonido de Interactuable "trigo"
        sonidoTrigo = this.sound.add("sonidoTrigo" , {loop: false});

        //Audios Gato
        ubicarGato = this.sound.add("ubicarGato" , {loop: false});
        ataqueGato = this.sound.add("ataqueGato" , {loop: false});

        //Logo UNRaf
        this.add.image(640, 360, "logoUNRaf").setInteractive().on("pointerdown", () => {
            this.scene.start("Menu");
            musicaMenu.play();
        });
        
    }
}