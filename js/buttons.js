// Pixi code

import {
    Application,
    Assets,
    Sprite,
    Container,
    Graphics,
    Text,
    TextStyle
} from './pixi.js';

// App creation
const app = new Application();

//initializing app
await app.init({
    background: 0x66cc66,
    width: 640,
    height: 480,
})
document.body.appendChild(app.canvas);

// this will be a button
// let any = new Button("Name",200,60)
class Button extends Container{

    // constructor
    constructor(l, w, h){
        super();

        // Build button
        this.l = l;
        this.w = w;
        this.h = h;
        this.c = 0xFFFFFF;

        // EventListener
        this.eventMode = "static"

        //drawing
        this.draw();

        //set Hover
        this.on("mouseover", () => {
            this.alpha = 0.6;
            this.cursor = "pointer";
        })
        this.on("mouseout", () => {
            this.alpha = 1;
            this.cursor = "auto";
        })
    }
    
    // the setup
    draw(){
        //Empty
        while(this.children.length > 0){
            this.removeChildAt(0);
        }

        //Build object

            //body
            this.body = new Graphics()
                .rect(0, 0, this.w, this.h)
                .fill(this.c);
            this.addChild(this.body)

            //The label
            this.label = new Text({
                text: this.l,
                anchor: 0.5,
            });
            this.label.x = this.w/2;
            this.label.y = this.h/2;
            this.addChild(this.label);

    }

    // the label
    setLabel(name){
        this.l = name;
        this.label.text = name;
        this.draw();
    }
    
    // the color
    setColor(color){
        this.c = color;
        this.draw();
    }
    // the size
    setSize(w,h){
        this.w = w;
        this.h = h;
        this.draw();
    }

}

// button creation
let button =  new Button("Test", 200 ,60);
    button.x = 100
    button.y = 200
    button.setLabel("Hola")
    button.setColor("aquamarine")
    button.setSize(200,100)
console.log(button.label, button.w, button.h)
app.stage.addChild(button);

button.on('click',() =>{
    alert("clicked");
})

// the drag button
let button2 =  new Button("Hi there!", 200 ,60);
    button2.x = 400
    button2.y = 200
app.stage.addChild(button2);

// flagging
let dragging = false;
//beginning
button2.on('pointerdown',() => {
    dragging = true;
    console.log("down");
})
// during
button2.on('globalpointermove', (event) => {
    //console.log(event.global);
    if (dragging){
        button2.x = event.global.x - button2.w/2;
        button2.y = event.global.y - button2.h/2;
    }
})
// ending
button2.on('pointerup',() => {
    dragging = false;
    console.log("up");
})
button2.on('pointerupoutside',() => {
    dragging = false;
    console.log("up");
})

class Slider extends Container {

    constructor(w){
        super();

        //vars
        this.w = w;

        //track
        this.track = new Graphics()
                .rect(0, 0, w, 5)
                .fill("gray");
        this.addChild(this.track)

        //button
        this.button = new Button("", 40, 40);
        this.addChild(this.button);

        // flagging
        let dragging = false;
        //drag
        this.button.on('pointerdown',() => {
            dragging = true;
            console.log("down");
        })
        // during
        this.button.on('globalpointermove', (event) => {
            //console.log(event.global);
            if (dragging){
                this.button.x = event.global.x - this.button.w/2;
            }
        })
        // ending
        this.button.on('pointerup',() => {
            dragging = false;
            console.log("up");
        })
        this.button.on('pointerupoutside',() => {
            dragging = false;
            console.log("up");
        })

    }
}

let s = new Slider(150);
app.stage.addChild(s);