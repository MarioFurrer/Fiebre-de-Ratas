class Informacion extends Phaser.Scene{
    constructor(){
        super("Informacion")
    }

    create(){
        this.add.image(640, 360, "Fondo").setScale(0.4);

        var Volver = this.add.text(16, 16, 'VOLVER', { fontSize: '25px', fill: '#000' });
        Volver.setInteractive()
        Volver.on("pointerdown", () => this.scene.start("Menu"));

        this.add.text(40, 75, "¿Qué es la Fiebre Hemorrágica Argentina?", { fontSize: '30px', fill: '#000' });
    }
}