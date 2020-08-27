class Juego extends Phaser.Scene{
    constructor(){
        super("Juego");
    }

    create(){

        musicaMenu.stop();

        musicaIngame.play();

        vidaCasa = 100;

        infeccion = 0;

        valInfeccion = -1;

        muerteRatas = 0;

        cantMaiz = 100;

        pos1 = 0;
        pos2 = 0;
        pos3 = 0;

        valSelector = 0;

        this.add.image(640, 300, "FondoJuego").setSize(1280, 720).setInteractive().setActive(false).on("pointerdown", () => (ubicacion1.setVisible(false).setActive(false),ubicacion2.setVisible(false).setActive(false),ubicacion3.setVisible(false).setActive(false)));

        Molino = this.physics.add.sprite(1100, 120, "Molino").setScale(0.75).setRotation(rotacionMolino);

        Cosecha1 = this.physics.add.sprite(350, 260, "Cosecha").setScale(0.75);

        CosechaLista1 = this.physics.add.sprite(350, 260, "CosechaLista").setScale(0.75);
        CosechaLista1.setInteractive().on("pointerdown", () => {
            sonidoTrigo.play();
            this.obtenerCultivos();
        });
        CosechaLista1.setVisible(false).setActive(false);

        tiempoCosecha = 100;
        cronometroCosecha = this.time.addEvent({ delay: 100, callback: this.rellenarCultivos, callbackScope: this, loop: true });

        Casa = this.physics.add.staticGroup();
        Casa.create(-60, 300, "Casa").setScale(0.75).refreshBody();

        this.barraInfeccion();

        Economia = this.physics.add.sprite(130, 661, "Economia").setScale(0.20);

        textoMaiz = this.add.text(77,650, cantMaiz,{
            fontSize: "60px", fill: "#FFFF00"
        })

        botonPausa = this.add.sprite(1250, 30, "botonPausa").setScale(0.07);
        botonPausa.setInteractive();
        botonPausa.on("pointerdown", () => {
            sonidoBoton.play();
            this.scene.pause();
            this.scene.launch('Pausa');
        });

        selector = this.add.sprite(34, 686, "abrirSelector").setScale(0.075);
        selector.setInteractive().on("pointerdown", () => {
            sonidoBoton.play();
            this.selector();
        });

        selectorGato = this.add.sprite(50, 550, "selectorGato").setScale(0.35);
        selectorGato.setInteractive().setVisible(false).setActive(false).on("pointerdown", () => {
            sonidoBoton.play();
            this.ubicarGato();
        });

        selectorZorro = this.add.sprite(140, 550, "selectorZorro").setScale(0.30);
        selectorZorro.setInteractive().setVisible(false).setActive(false).on("pointerdown", () => {
            sonidoBoton.play();
            this.ubicarZorro();
        });

        selectorSerpiente = this.add.sprite(50, 650, "selectorSerpiente").setScale(0.35);
        selectorSerpiente.setInteractive().setVisible(false).setActive(false).on("pointerdown", () => {
            sonidoBoton.play();
            this.ubicarSerpiente();
        });

        ubicacion1 = this.add.sprite(365, 400, "Ubicacion").setScale(0.1);
        ubicacion1.setInteractive().setActive(false).setVisible(false);
        ubicacion1.on("pointerdown", () => this.ubicar1());
        ubicacion1.on("clickout", () => this.resetUbications());

        ubicacion2 = this.add.sprite(365, 525, "Ubicacion").setScale(0.1);
        ubicacion2.setInteractive().setActive(false).setVisible(false);
        ubicacion2.on("pointerdown", () => this.ubicar2());

        ubicacion3 = this.add.sprite(365, 650, "Ubicacion").setScale(0.1);
        ubicacion3.setInteractive().setActive(false).setVisible(false);
        ubicacion3.on("pointerdown", () => this.ubicar3());
        
        Defensas = this.physics.add.group();

        Ratas = this.physics.add.group({
            key: 'Rata',
            repeat: 3,
        });
        
        Ratas.children.iterate(function (Rata) {
            
            Rata.setCollideWorldBounds(false);
            Rata.body.setVelocityX(-100);
            Rata.vida = 1;

            var carril = Phaser.Math.FloatBetween(0, 1);
            if (carril <= 0.33){
                RataY = 400;
            }
            else {
                if (carril <= 0.66){
                    RataY = 522;
                }
                else {
                    RataY = 644;
                }
            }

            Rata.setX(Phaser.Math.FloatBetween(1400, 2400));
            Rata.setY(RataY);
        })

        this.physics.add.collider(Casa, Ratas, this.hitCasa, null, self);

        this.physics.add.collider(Defensas, Ratas, this.hitDefensa, null, this);
    }

    update(){

        this.barraInfeccion();

        if(muerteRatas == 20){
            this.victory();
        }

        textoMaiz.setText(cantMaiz);

        if (Ratas.countActive(true) == 0){
            Ratas.children.iterate(function (Rata) {

                Rata.enableBody(true, Rata.x, 2000, true, true);
                Rata.setCollideWorldBounds(false);
                Rata.body.setVelocityX(-100);
                Rata.vida = 1;
        
                var carril = Phaser.Math.FloatBetween(0, 1);
                if (carril <= 0.33){
                    RataY = 400;
                }
                else {
                    if (carril <= 0.66){
                        RataY = 522;
                    }
                    else {
                        RataY = 644;
                    }
                }
        
                Rata.setX(Phaser.Math.FloatBetween(1400, 2400));
                Rata.setY(RataY);
            })
        }
        
        rotacionMolino = rotacionMolino + 0.03;
        Molino.setRotation(rotacionMolino);
    }

    selector(){
        if (valSelector == 0){
            selector.setPosition(34, 450);
            selectorGato.setVisible(true).setActive(true);
            selectorZorro.setVisible(true).setActive(true);
            selectorSerpiente.setVisible(true).setActive(true);
            Economia.setX(180);
            textoMaiz.setX(127);
            valSelector = 1;
        }
        else if (valSelector == 1){
            selector.setPosition(34, 686);
            selectorGato.setVisible(false).setActive(false);
            selectorZorro.setVisible(false).setActive(false);
            selectorSerpiente.setVisible(false).setActive(false);
            Economia.setX(130);
            textoMaiz.setX(77);
            valSelector = 0;  
        }
    }

    ubicarGato(){
        if (cantMaiz >= 50){
            defensa = 1;
            this.selector();
            if (pos1 == 0){
                ubicacion1.setVisible(true).setActive(true);
            }
            if (pos2 == 0){
                ubicacion2.setVisible(true).setActive(true);
            }
            if (pos3 == 0){
                ubicacion3.setVisible(true).setActive(true);
            }
        }
        else {}
    }

    ubicarSerpiente(){
        if (cantMaiz >= 120){
            defensa = 2;
            this.selector();
            if (pos1 == 0){
                ubicacion1.setVisible(true).setActive(true);
            }
            if (pos2 == 0){
                ubicacion2.setVisible(true).setActive(true);
            }
            if (pos3 == 0){
                ubicacion3.setVisible(true).setActive(true);
            }
        }
        else {}
    }

    ubicarZorro(){
        if (cantMaiz >= 80){
            defensa = 3;
            this.selector();
            if (pos1 == 0){
                ubicacion1.setVisible(true).setActive(true);
            }
            if (pos2 == 0){
                ubicacion2.setVisible(true).setActive(true);
            }
            if (pos3 == 0){
                ubicacion3.setVisible(true).setActive(true);
            }
        }
        else {}
    }

    ubicar1(){
        ubicacion1.setVisible(false).setActive(false);
        ubicacion2.setVisible(false).setActive(false);
        ubicacion3.setVisible(false).setActive(false);
        if (defensa == 1){
            cantMaiz = cantMaiz - 50;
            Gato = Defensas.create(365, 400, "Gato").setScale(0.20);
            Gato.vida = 2;
            Gato.pos = 1;
            Gato.cooldown = this.time.addEvent({ delay: 3000, callback: this.ataqueGato, callbackScope: this, loop: false });
            Gato.setImmovable(true);
            ubicarGato.play();
        }
        if (defensa == 2){
            cantMaiz = cantMaiz - 120;
            Serpiente = Defensas.create(365, 400, "Serpiente").setScale(0.5);
            Serpiente.vida = 10;
            Serpiente.pos = 1;
            Serpiente.setImmovable(true);
        }
        if (defensa == 3){
            cantMaiz = cantMaiz - 80;
            Zorro = Defensas.create(365, 400, "Zorro").setScale(0.17);
            Zorro.vida = 5;
            Zorro.pos = 1;
            Zorro.setImmovable(true);
        }
        pos1 = 1;
    }

    ubicar2(){
        ubicacion1.setVisible(false).setActive(false);
        ubicacion2.setVisible(false).setActive(false);
        ubicacion3.setVisible(false).setActive(false);
        if (defensa == 1){
            cantMaiz = cantMaiz - 50;
            Gato = Defensas.create(365, 525, "Gato").setScale(0.20);
            Gato.vida = 2;
            Gato.pos = 2;
            Gato.setImmovable(true);
            ubicarGato.play();
        }
        if (defensa == 2){
            cantMaiz = cantMaiz - 120;
            Serpiente = Defensas.create(365, 525, "Serpiente").setScale(0.5);
            Serpiente.vida = 10;
            Serpiente.pos = 2;
            Serpiente.setImmovable(true);
        }
        if (defensa == 3){
            cantMaiz = cantMaiz - 80;
            Zorro = Defensas.create(365, 525, "Zorro").setScale(0.17);
            Zorro.vida = 5;
            Zorro.pos = 2;
            Zorro.setImmovable(true);
        }
        pos2 = 1;
    }

    ubicar3(){
        ubicacion1.setVisible(false).setActive(false);
        ubicacion2.setVisible(false).setActive(false);
        ubicacion3.setVisible(false).setActive(false);
        if (defensa == 1){
            cantMaiz = cantMaiz - 50;
            Gato = Defensas.create(365, 650, "Gato").setScale(0.20);
            Gato.vida = 2;
            Gato.pos = 3;
            Gato.setImmovable(true);
            ubicarGato.play();
        }
        if (defensa == 2){
            cantMaiz = cantMaiz - 120;
            Serpiente = Defensas.create(365, 650, "Serpiente").setScale(0.5);
            Serpiente.vida = 10;
            Serpiente.pos = 3;
            Serpiente.setImmovable(true);
        }
        if (defensa == 3){
            cantMaiz = cantMaiz - 80;
            Zorro = Defensas.create(365, 650, "Zorro").setScale(0.17);
            Zorro.vida = 5;
            Zorro.pos = 3;
            Zorro.setImmovable(true);
        }
        pos3 = 1;
    }

    hitDefensa(Defensas, Rata){
        Rata.vida = Rata.vida - 1;
        if (Rata.vida <= 0){
            Rata.disableBody(true, true)
            cantMaiz = cantMaiz + 15;
            muerteRatas = muerteRatas + 1;
        }
        Defensas.vida = Defensas.vida - 1;
        if (Defensas.vida <= 0){
            if (Defensas.pos == 1){
                pos1 = 0
            }
            if (Defensas.pos == 2){
                pos2 = 0
            }
            if (Defensas.pos ==3){
                pos3 = 0
            }
            Defensas.disableBody(true, true)
        }
    }

    hitCasa (Casa, Rata){
        Rata.disableBody(true, true);
        vidaCasa = vidaCasa - 10;
        cantMaiz = cantMaiz + 15;
        infeccion = infeccion + 1;
    }

    barraInfeccion(){

        if(valInfeccion != infeccion){

            if(vidaCasa == 100){this.add.sprite(150, 40, "HogarVida1").setScale(0.6);}
        
            if(vidaCasa == 90){this.add.sprite(150, 40, "HogarVida2").setScale(0.6);}

            if(vidaCasa == 80){this.add.sprite(150, 40, "HogarVida3").setScale(0.6);}

            if(vidaCasa == 70){this.add.sprite(150, 40, "HogarVida4").setScale(0.6);}

            if(vidaCasa == 60){this.add.sprite(150, 40, "HogarVida5").setScale(0.6);}

            if(vidaCasa == 50){this.add.sprite(150, 40, "HogarVida6").setScale(0.6);}

            if(vidaCasa == 40){this.add.sprite(150, 40, "HogarVida7").setScale(0.6);}

            if(vidaCasa == 30){this.add.sprite(150, 40, "HogarVida8").setScale(0.6);}

            if(vidaCasa == 20){this.add.sprite(150, 40, "HogarVida9").setScale(0.6);}

            if(vidaCasa == 10){this.add.sprite(150, 40, "HogarVida10").setScale(0.6);}

            if(vidaCasa <= 0){
                this.gameOver()
            }

            valInfeccion = infeccion;
        }

        else{}
    }

    rellenarCultivos(){
        tiempoCosecha = tiempoCosecha - 1;
        if (tiempoCosecha == 0){
            Cosecha1.setVisible(false);
            CosechaLista1.setVisible(true).setActive(true);
        }
    }

    obtenerCultivos(){
        Cosecha1.setVisible(true);
        CosechaLista1.setVisible(false).setActive(false);
        cantMaiz = cantMaiz + 100;
        tiempoCosecha = 100;
    }

    //////////////////////RESOLVER////////////////////////////////RESOLVER///////////////////////
    ataqueGato(Gato, Ratas){
        if(Rata.x <= 700){
            if(Gato.pos == 1 && Rata.y == 400){
                this.Rata.vida = vida - 1;
            }
        }
        
    }

    victory(){
        this.scene.pause();
        this.scene.launch('Victoria');
    }

    gameOver(){
        this.scene.pause();
        this.scene.launch('Derrota');
    }
}