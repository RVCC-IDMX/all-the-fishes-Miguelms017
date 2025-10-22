import {
    Application,
    Assets,
    Sprite,
    Container,
    Graphics,
    Text,
    TextStyle
} from './pixi.js';

//import Anim

import { animate, sleep } from './animation.js';

// App creation
const app = new Application();

//initializing app
await app.init({
    background: 0xcc6666,
    width: 640,
    height: 480,
})
document.body.appendChild(app.canvas);

//textures
    const texture = await Assets.load("../img/fish.png");

//sprite
    const fishsprite1 = new Sprite(texture);
        fishsprite1.scale.set(0.6);
        fishsprite1.anchor.set(0.5);


// fish on stage
    app.stage.addChild(fishsprite1);

//animation here

    async function swim() {
        await animate.to(fishsprite1, {
            duration: 1000,
            x: 300,
            y: 300,
            tint: 0xFF0000,
            angle: 30,
            alpha: 0.75,
            easing: animate.easeInOut
        });

        await sleep(1000);

        await animate.to(fishsprite1, {
            duration: 1000,
            x: 300,
            y: 100,
            tint: 0xFFFFFF,
            angle: -90,
            alpha: 0.25,
            easing: animate.easeInOut
        })
        swim();
    }

swim();
