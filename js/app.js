//Pixi code

//imports
    import {
        Application,
        Assets,
        Sprite,
        Container,
        Graphics,
        Text
    } from "./pixi.js"

// * Classes
    // TODO: Class button
    // ? let any = new Button("tag",height,weight)

    class Button extends Container{

        // constructor
        constructor(l, w, h){
            super();

            /* Building
            ? l = length
            ? w = width
            ? h = height
            ? c = color */

            this.l = l;
            this.w = w;
            this.h = h;
            this.c = "#ffffff";

            // event listener
            this.eventMode = "static";

            // drawing
            this.draw();

            // hover
            this.on("mouseover", () => {
                this.alpha = 0.75;
                this.cursor = "pointer";
            });
            this.on("mouseout", () => {
                this.alpha = 1;
                this.cursor = "auto";
            });
        }

        // setup
        draw(){
            //empty button
            while(this.children.length > 0){
                this.removeChildAt(0);
            }

            //Building objects 

                //body
                this.body = new Graphics()
                    .rect(0, 0, this.w, this.h)
                    .fill(this.c);
                this.addChild(this.body);

                //label
                this.label = new Text({
                    text: this.l,
                    anchor: 0.5,
                });
                this.label.x = this.w/2;
                this.label.y = this.h/2;
                this.addChild(this.label);
        }

        //set label
        setLabel(name){
            this.l = name;
            this.label.text = name;
            this.draw();
        }

        //set color
        setColor(color){
            this.c = color;
            this.draw();
        }

        //set size
        setSize(w,h){
            this.w = w;
            this.h = h;
            this.draw;
        }
    }

// * content

//create app
    const app = new Application();

//Starting up
    await app.init({
        background: "#46ddff",
        width: 800,
        height: 640
    });
    document.body.appendChild(app.canvas);

//textures
    const texture = await Assets.load("../img/fish.png");
    const background = await Assets.load("../img/sea.jpg");

//sprite
    const bg = new Sprite(background);
    const fishsprite1 = new Sprite(texture);
    const fishsprite2 = new Sprite(texture);
    const fishsprite3 = new Sprite(texture);
    const fishsprite4 = new Sprite(texture);
    const fishsprite5 = new Sprite(texture);
    const fishsprite6 = new Sprite(texture);

//params background
    //scale
    bg.scale.set(1.25)

    //pos in x and y
    bg.x = app.screen.width/2;
    bg.y = app.screen.height/2;

    //anchor
    bg.anchor.set(0.5);

//fish params fish 1
    //scale angle and tint
    fishsprite1.scale.set(0.55);
    fishsprite1.angle = 0;
    fishsprite1.tint = "#dffaff";
    //Pos in X and Y
    fishsprite1.x = 0;
    fishsprite1.y = 0;
    //anchor
    fishsprite1.anchor.set(0.75, 0.9);

//fish params fish 2
    //scale angle and tint
    fishsprite2.scale.set(0.25);
    fishsprite2.angle = 30;
    fishsprite2.tint = "#dffaff";
    //Pos in X and Y
    fishsprite2.y = 25;
    //anchor
    fishsprite2.anchor.set(0.75, 0.9);

//fish params fish 3
    //scale angle and tint
    fishsprite3.scale.set(0.25);
    fishsprite3.angle = 30;
    fishsprite3.tint = "#dffaff";
    //Pos in X and Y
    fishsprite3.x = -90;
    //anchor
    fishsprite3.anchor.set(0.75, 0.9);

//fish params fish 4
    //scale angle and tint
    fishsprite4.scale.set(0.25);
    fishsprite4.angle = 30;
    fishsprite4.tint = "#dffaff";
    //Pos in X and Y
    fishsprite4.x = 90;
    //anchor
    fishsprite4.anchor.set(0.75, 0.9);

//fish params fish 5
    //scale angle and tint
    fishsprite5.scale.set(0.55);
    fishsprite5.angle = -30;
    fishsprite5.tint = "#dffaff";
    //Pos in X and Y
    fishsprite5.x = 0;
    fishsprite5.y = 0;
    //anchor
    fishsprite5.anchor.set(0.75, 0.9);

//fish params fish 6
    //scale angle and tint
    fishsprite6.scale.set(0.55);
    fishsprite6.angle = 0;
    fishsprite6.tint = "#dffaff";
    //Pos in X and Y
    fishsprite6.x = 0;
    fishsprite6.y = 0;
    //anchor
    fishsprite6.anchor.set(0.75, 0.9);

//function

    //flap function
        function flap(scale, tick){
            const func = scale + (Math.sin(tick/30)*.005);
            return func;
        }

//Animation ticker
    app.ticker.add((time) => {

        let tick = time.lastTime;
        let bobbing = Math.sin(tick/500) * 25;
        fishsprite1.y = bobbing
        fishsprite2.y = bobbing
        fishsprite3.y = bobbing
        fishsprite4.y = bobbing
        fishsprite5.y = bobbing
        fishsprite6.y = bobbing

        //movement presets
        let x = app.screen.width/2 + Math.sin(tick/2000) * app.screen.width/2
        let y = app.screen.height/2 + Math.sin(tick/2000) * app.screen.height/2
        let lessX = app.screen.width/2 + Math.sin(tick/2000) * app.screen.height/2
        let lessY = app.screen.height/2 - Math.sin(tick/2000) * app.screen.width/5

        //fish movement
        fish1.x = x;

        fish2.x = x;
        fish2.y = y;

        fish3.x = lessX;
        fish3.y = lessY;

        fish4.x = x;


        //fish flapping
        fishsprite1.scale.set(flap(0.55, tick),.55);
        fishsprite2.scale.set(flap(0.25, tick),.25);
        fishsprite3.scale.set(flap(0.25, tick),.25);
        fishsprite4.scale.set(flap(0.25, tick),.25);
        fishsprite5.scale.set(flap(0.55, tick),.55);
        fishsprite6.scale.set(flap(0.55, tick),.55);

    })

//animation container
    const fish1 = new Container();
        fish1.x = 165;
        fish1.y = 325;

    const fish2 = new Container;
        fish2.x = 285;
        fish2.y = 445;

    const fish3 = new Container;
        fish3.x = 15;
        fish3.y = 445;

    const fish4 = new Container();
        fish4.x = 320;
        fish4.y = 480;

//aquarium container
    const aquarium = new Container();
        aquarium.y = -80

//fish inside container
    fish1.addChild(fishsprite1);
    fish2.addChild(fishsprite2);
    fish2.addChild(fishsprite3);
    fish2.addChild(fishsprite4);
    fish3.addChild(fishsprite5);
    fish4.addChild(fishsprite6);

//containers inside aquarium
    aquarium.addChild(bg);
    aquarium.addChild(fish1);
    aquarium.addChild(fish2);
    aquarium.addChild(fish3);
    aquarium.addChild(fish4);

// buttons

    // Button place
    let placeholder = new Button("",800,150);
        placeholder.y = 490;
        placeholder.setColor("aquamarine");
        placeholder.on("mouseover", () => {
            placeholder.alpha = 1;
            placeholder.cursor = "";
        });
        placeholder.on("mouseout", () => {
            placeholder.alpha = 1;
        });

    //fish selector
    let selector = 0;

    let param1 = new Button("1", 30, 30);
        param1.x = 20;
        param1.y = 20;
        param1.on('click',() => {
            selector = 1;
            console.log(selector);
            colorChange.setColor("white");
            if (selector == 1){
                param1.setColor("peru");
                param2.setColor("white");
                param3.setColor("white");
                param4.setColor("white");
                param5.setColor("white");
                param6.setColor("white");
                param7.setColor("white");
            }
        })

    let param2 = new Button("2", 30, 30);
        param2.x = 60;
        param2.y = 20;
        param2.on('click',() => {
            selector = 2;
            console.log(selector);
            colorChange.setColor("white");
            if (selector == 2){
                param1.setColor("white");
                param2.setColor("peru");
                param3.setColor("white");
                param4.setColor("white");
                param5.setColor("white");
                param6.setColor("white");
                param7.setColor("white");
            }
        })
    
    let param3 = new Button("3", 30, 30);
        param3.x = 100;
        param3.y = 20;
        param3.on('click',() => {
            selector = 3;
            console.log(selector);
            colorChange.setColor("white");
            if (selector == 3){
                param1.setColor("white");
                param2.setColor("white");
                param3.setColor("peru");
                param4.setColor("white");
                param5.setColor("white");
                param6.setColor("white");
                param7.setColor("white");
            }
        })
    
    let param4 = new Button("4", 30, 30);
        param4.x = 140;
        param4.y = 20;
        param4.on('click',() => {
            selector = 4;
            console.log(selector);
            colorChange.setColor("white");
            if (selector == 4){
                param1.setColor("white");
                param2.setColor("white");
                param3.setColor("white");
                param4.setColor("peru");
                param5.setColor("white");
                param6.setColor("white");
                param7.setColor("white");
            }
        })

    let param5 = new Button("5", 30, 30);
        param5.x = 180;
        param5.y = 20;
        param5.on('click',() => {
            selector = 5;
            console.log(selector);
            colorChange.setColor("white");
            if (selector == 5){
                param1.setColor("white");
                param2.setColor("white");
                param3.setColor("white");
                param4.setColor("white");
                param5.setColor("peru");
                param6.setColor("white");
                param7.setColor("white");
            }
        })
    
    let param6 = new Button("6", 30, 30);
        param6.x = 220;
        param6.y = 20;
        param6.on('click',() => {
            selector = 6;
            console.log(selector);
            colorChange.setColor("white");
            if (selector == 6){
                param1.setColor("white");
                param2.setColor("white");
                param3.setColor("white");
                param4.setColor("white");
                param5.setColor("white");
                param6.setColor("peru");
                param7.setColor("white");
            }
        })
    
    let param7 = new Button("All", 230, 30);
        param7.x = 20;
        param7.y = 60;
        param7.on('click',() => {
            selector = 7;
            console.log(selector);
            colorChange.setColor("white");
            if (selector == 7){
                param1.setColor("white");
                param2.setColor("white");
                param3.setColor("white");
                param4.setColor("white");
                param5.setColor("white");
                param6.setColor("white");
                param7.setColor("peru");
            }
        })


    //color change
    let colorChange = new Button("random color", 180, 30);
        colorChange.x = 300;
        colorChange.y = 20;
        colorChange.setColor("gray");
        colorChange.on('click', () => {
            // changes color depending on selected fish
            switch (selector) {
                case 1:
                    fishsprite1.tint = 0xffffff * Math.random();
                    break;

                case 2:
                    fishsprite2.tint = 0xffffff * Math.random();
                    break;

                case 3:
                    fishsprite3.tint = 0xffffff * Math.random();
                    break;

                case 4:
                    fishsprite4.tint = 0xffffff * Math.random();
                    break;

                case 5:
                    fishsprite5.tint = 0xffffff * Math.random();
                    break;

                case 6:
                    fishsprite6.tint = 0xffffff * Math.random();
                    break;
                
                case 7:
                    fishsprite1.tint = 0xffffff * Math.random();
                    fishsprite2.tint = 0xffffff * Math.random();
                    fishsprite3.tint = 0xffffff * Math.random();
                    fishsprite4.tint = 0xffffff * Math.random();
                    fishsprite5.tint = 0xffffff * Math.random();
                    fishsprite6.tint = 0xffffff * Math.random();
                    break;
            
                default:
                    break;
            }
        })

    let reset = new Button("reset", 180, 30);
        reset.x = 300;
        reset.y = 60;
        reset.on('click', () => {
            fishsprite1.tint = "#dffaff";
            fishsprite2.tint = "#dffaff";
            fishsprite3.tint = "#dffaff";
            fishsprite4.tint = "#dffaff";
            fishsprite5.tint = "#dffaff";
            fishsprite6.tint = "#dffaff";
            param1.setColor("white");
            param2.setColor("white");
            param3.setColor("white");
            param4.setColor("white");
            param5.setColor("white");
            param6.setColor("white");
            param7.setColor("white");
            colorChange.setColor("gray");
            selector = 0;
        })

    //Drag button

        //Movable button

            //set up
            let movement = new Button("1", 40, 40);
                movement.anchor = 0.5;
                movement.x = 40;
                movement.y = 40;

            //flag
            let dragging = false;

            //initialize
            movement.on('pointerdown', () => {
                dragging = true;
            })

            //actions
            movement.on('globalpointermove', (event) => {
                if (dragging){
                    movement.x = event.global.x - (690);
                    movement.y = event.global.y - (520);
                    fishsprite1.x = (event.global.x - 300);
                    fish1.y = (event.global.y - 175);

                    if (
                        event.global.x < 670 ||
                        event.global.x > 790 ||
                        event.global.y < 500 ||
                        event.global.y > 620
                    ){
                        dragging = false
                        movement.x = 40
                        movement.y = 40
                    }
                }
            })

            //ending
            movement.on('pointerup', () => {
                dragging = false;
                movement.x = 40;
                movement.y = 40; 
            })

            movement.on('pointerupoutside', () => {
                dragging = false;
                movement.x = 40;
                movement.y = 40; 
            })

        //placeholder
        let joystick = new Button("", 120, 120);
            joystick.x = 670;
            joystick.y = 10;
            joystick.setColor("#000000");

        joystick.addChild(movement);

       

// button on father placeholder
    placeholder.addChild(param1);
    placeholder.addChild(param2);
    placeholder.addChild(param3);
    placeholder.addChild(param4);
    placeholder.addChild(param5);
    placeholder.addChild(param6);
    placeholder.addChild(param7);
    placeholder.addChild(reset)
    placeholder.addChild(colorChange);
    placeholder.addChild(joystick)

//container on stage
    app.stage.addChild(aquarium);
    app.stage.addChild(placeholder);
    