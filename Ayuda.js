class Ayuda extends Phaser.Scene{
    constructor(){
        super("Ayuda")
    }

    create(){
        this.add.image(640, 360, "Fondo").setScale(0.4);

        Volver = this.add.text(16, 16, 'VOLVER', { fontSize: '25px', fill: '#000' });
        Volver.setInteractive()
        Volver.on("pointerdown", () => this.scene.start("Menu"));

        this.add.text(275, 75, '¿Como Jugar?', { fontSize: '30px', fill: '#000' });
    }
}