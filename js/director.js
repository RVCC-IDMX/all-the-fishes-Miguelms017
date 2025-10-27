//Jota Mario Valencia
import { animate } from "./animation.js";

class director {

    //TODO PODEROSO constructor
    constructor(stage){
        this.stage = stage;
        this.scene = {}; //scene list
        this.currentScene = null; //currently here
    }

    //add scenes on list
    addScene( name, scene ){

        //exists?
        if (this.scene[name]){
            throw "That scene already exists";
        }

        //doesn't exist
        this.scene[name] = scene;

        //if 1st scene, make it active
        if(this.currentScene ==  null){
            this.currentScene = name;
            this.stage.addChild(scene);
        } 
    }

    // swap scenes
    showScene (nextScName, params) {

        if(params == undefined){
            params = {
                transition:this.cut
            }
        }

        params.transition = params.transition.bind(this);

        params.transition(this.currentScene, nextScName, params);

    }

    //simple cut
    cut(currentScene, nextScName, params){

        this.stage.removeChild(this.scene[currentScene]);
        this.stage.addChild(this.scene[nextScName]);
        this.currentScene = nextScName;


    }

    //simple fade
    async fade(currentScene, nextScName, params){

        //step 1: fade out
        await animate.to(this.scene[currentScene], {
            alpha: 0,
            duration: 1000,
        })

        //Step 2: remove
        this.stage.removeChild(this.scene[currentScene]);

        //step 3: offstage, restore opacity
        this.scene[currentScene].alpha = 1;

        //step 4: offstage set next scene to transparent
        this.scene[nextScName].alpha = 0;

        //step 5: add  new scene
        this.stage.addChild(this.scene[nextScName])

        //step 6: fade
        await animate.to(this.scene[nextScName], {
            alpha: 1,
            duration: 1000,
        })

        this.stage.removeChild(this.scene[currentScene]);
        this.stage.addChild(this.scene[nextScName]);
        this.currentScene = nextScName;


    }

};

export { director };