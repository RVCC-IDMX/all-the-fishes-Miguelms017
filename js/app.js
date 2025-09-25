//Pixi code

//imports
    import {
        Application,
        Assets,
        Sprite,
        Container
    } from "./pixi.js"

//create app
    const app = new Application();

//Starting up
    await app.init({
        background: "#46ddff",
        width: 640,
        height: 480
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

        //flap function
        function flap(scale, tick){
            const func = scale + (Math.sin(tick/30)*.005);
            return func;
        }

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
        fish1.y = 165;

    const fish2 = new Container;
        fish2.x = 285;
        fish2.y = 285;

    const fish3 = new Container;
        fish3.x = 15;
        fish3.y = 285;

    const fish4 = new Container();
        fish4.x = 320;
        fish4.y = 320;

    
//fish inside container
    fish1.addChild(fishsprite1);
    fish2.addChild(fishsprite2);
    fish2.addChild(fishsprite3);
    fish2.addChild(fishsprite4);
    fish3.addChild(fishsprite5);
    fish4.addChild(fishsprite6);

//container on stage
    app.stage.addChild(bg);
    app.stage.addChild(fish1);
    app.stage.addChild(fish2);
    app.stage.addChild(fish3);
    app.stage.addChild(fish4);