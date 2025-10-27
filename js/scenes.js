import {
    Application,
    Assets,
    Sprite,
    Container,
    Graphics,
    Text,
    TextStyle
} from './pixi.js';

//import assets

import { animate, sleep } from './animation.js';
import { Button } from './button.js';
import { director } from './director.js';

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
    
//add fish
    //app.stage.addChild(fishsprite1);

//Todo director
    let Director = new director(app.stage)


//TODO scenes
    
//? scene 1
    let scene1 = new Container();
        scene1.addChild(fishsprite1);

    let button1 = new Button("button", 200, 50);
        button1.x = app.canvas.width - button1.w;
        button1.y = app.canvas.height - button1.h;
        scene1.addChild(button1);

    Director.addScene("scene1", scene1);

//? scene 2
    let scene2 = new Container();

    let button2 = new Button("button", 200, 50);
        button2.y = app.canvas.height - button1.h;
        scene2.addChild(button2);

    Director.addScene("scene2", scene2);

//? button event listener
button1.on("click", () => {
    Director.showScene("scene2");
});

button2.on("click", () => {
   Director.showScene("scene1");
});