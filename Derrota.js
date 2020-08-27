class Derrota extends Phaser.Scene {
    constructor() {
      super('Derrota');
    }
  
    create(){
        
        musicaIngame.stop();

        this.add.image(640, 350, "fondoOscurecido").setScale(3);

        GameOverButton = this.add.text(200, 200, 'Game Over', { fontFamily: 'Arial', fontSize: 70, color: '#CB4335' })
        GameOverButton.setInteractive().on('pointerdown', () => {
            sonidoBoton.play();
            this.scene.start('Menu');
        });
    }
}