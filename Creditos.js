class Creditos extends Phaser.Scene{
    constructor(){
        super("Creditos");
    }

    create(){
        this.add.image(640, 360, "Fondo").setScale(0.4);

        var Logo = this.add.image(375, 150, "Logo").setScale(1.5);

        this.add.text(300, 300, 'Facundo Abzug', { fontSize: '20px', fill: '#000' });
        this.add.text(300, 350, 'Tomás Avaro', { fontSize: '20px', fill: '#000' });
        this.add.text(300, 400, 'Mario Furrer', { fontSize: '20px', fill: '#000' });
        this.add.text(300, 450, 'Román Ortega', { fontSize: '20px', fill: '#000' });

        var Volver = this.add.text(16, 16, 'VOLVER', { fontSize: '25px', fill: '#000' });
        Volver.setInteractive().on("pointerdown", () => {
            sonidoBoton.play();
            this.scene.start("Menu");
            this.scene.stop("Creditos")
        });
    }
}