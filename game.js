var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },

    scene: [UNRaf, Menu, Creditos, Juego, Ayuda, Informacion, Pausa, Victoria, Derrota]
};

var game = new Phaser.Game(config);

//INTERACTUABLES
var Aceptar;
var botonAyuda;
var botonCreditos;
var botonInformacion;
var botonPausa;
var Cancelar;
var Continuar;
var CosechaLista1;
var Logo;
var GameOverButton;
var VictoryButton;
var Volver;
var Salir;

//VALORES
var cantMaiz;
var carril;
var cronometroCosecha;
var infeccion;
var pos1;
var pos2;
var pos3;
var rotacionMolino = 0;
var selector;
var selectorGato;
var selectorSerpiente;
var selectorZorro;
var tiempoCosecha;
var ubicacion1;
var ubicacion2;
var ubicacion3;
var valInfeccion;
var valSelector;

//TEXTO
var textoMaiz;

//ESCENARIO
var Casa;
var Cosecha1;
var defensa;
var Economia;
var fondoPausa;
var Molino;
var Verificacion;
var vidaCasa;

//ALIADOS/CONSTRUCCIONES
var Defensas;
var Gato;
var Serpiente;
var Zorro;

//ENEMIGOS
var muerteRatas;
var Ratas;
var RataY;

//AUDIOS
var musicaIngame;
var musicaMenu;
var musicaVictoria;
var sonidoBoton;
var sonidoTrigo;
var ubicarGato;
var ataqueGato;