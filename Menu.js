class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }

    create(){
        //Fondo
        this.add.image(640, 360, "Fondo").setScale(0.4);

        //Jugar
        Logo = this.add.image(640, 245, "Logo").setScale(2.5);
        Logo.setInteractive().on("pointerdown", () => {
            this.scene.start("Juego");
            this.scene.stop('Menu');
            sonidoBoton.play();
        });

        //Creditos
        botonCreditos = this.add.text(540, 470, 'CREDITOS', { fontSize: '40px', fill: '#000' });
        botonCreditos.setInteractive().on("pointerdown", () => {
            this.scene.start("Creditos");
            this.scene.stop('Menu');
            sonidoBoton.play();
        });

        //Ayuda
        botonAyuda = this.add.text(575, 550, 'AYUDA', { fontSize: '40px', fill: '#000' });
        botonAyuda.setInteractive().on("pointerdown", () => {
            this.scene.start("Ayuda");
            this.scene.stop('Menu');
            sonidoBoton.play();
        });

        //Información sobre la enfermedad
        botonInformacion = this.add.text(505, 630, 'INFORMACIÓN', { fontSize: '40px', fill: '#000' });
        botonInformacion.setInteractive().on("pointerdown", () => {
            this.scene.start("Informacion");
            this.scene.stop('Menu');
            sonidoBoton.play();
        });
    }
}