class Pausa extends Phaser.Scene {
    constructor() {
        super('Pausa');
    }
    
    create(){
        fondoPausa = this.add.image(640, 350, "fondoOscurecido").setScale(3);
        Continuar = this.add.text(270, 340, 'Continuar', { fontFamily: 'Arial', fontSize: 50, color: '#CB4335' });
        Continuar.setInteractive()
        Continuar.on('pointerdown', () => {
            sonidoBoton.play();
            this.scene.resume('Juego');
            this.scene.stop('Pausa');
        });

        Salir = this.add.text(800, 340, 'Salir', { fontFamily: 'Arial', fontSize: 50, color: '#CB4335' });
        Salir.setInteractive().on('pointerdown', () => {
            sonidoBoton.play();
            Continuar.setVisible(false).setActive(false);
            Salir.setVisible(false).setActive(false);
            Verificacion.setVisible(true);
            Aceptar.setActive(true).setVisible(true);
            Cancelar.setActive(true).setVisible(true);
        });

        Verificacion = this.add.text(600, 200, '¿Estás seguro?', { fontFamily: 'Arial', fontSize: 50, color: '#CB4335' });
        Verificacion.setVisible(false);

        Cancelar = this.add.text(700, 450, 'NO', { fontFamily: 'Arial', fontSize: 50, color: '#CB4335' });
        Cancelar.setInteractive().on('pointerdown', () => {
            sonidoBoton.play();
            Verificacion.setVisible(false);
            Aceptar.setActive(false).setVisible(false);
            Cancelar.setActive(false).setVisible(false);
            Continuar.setVisible(true).setActive(true);
            Salir.setVisible(true).setActive(true);
        });
        Cancelar.setActive(false).setVisible(false);

        Aceptar = this.add.text(300, 450, 'SI', { fontFamily: 'Arial', fontSize: 50, color: '#CB4335' });
        Aceptar.setInteractive().on('pointerdown', () => {
            sonidoBoton.play();
            this.scene.stop('Juego');
            this.scene.start('Menu');
            this.scene.stop('Pausa');
        });
        Aceptar.setActive(false).setVisible(false);
    }
}