    import { Container, Graphics, Text } from "./pixi.js";
    
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

    export {Button};