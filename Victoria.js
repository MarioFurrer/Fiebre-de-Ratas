class Victoria extends Phaser.Scene {
  constructor() {
    super('Victoria');
  }

  create(){

    musicaIngame.stop();

    musicaVictoria.play();

    this.add.image(640, 350, "fondoOscurecido").setScale(3);
  }
}