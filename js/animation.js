// animate object
let animate = {};

//interpolation functions
animate.linear = (x) => x;
animate.easeIn = (x) => x * x;
animate.easeOut = (x) => 1 - ( 1 - x )*(1 - x);
animate.easeInOut = (x) => {
    if(x< 0.5){
        return 2 * x * x;
    } else {
        return 1 - Math.pow(-2 * x + 2, 2) / 2;
    }
};

// basic animation
animate.to = function(obj, end) {

    //promise
    return new Promise ( (resolve,reject) => {

        // duration
        let duration = end.duration;

        // Beginning state
        let start = {
            x : obj.x,
            y : obj.y,
            tint : obj.tint
        }

        //set default
        if (end.easing == undefined) end.easing = animate.linear;
        if (end.tint == undefined) end.tint = obj.tint;

        //start time
        let startTime = Date.now();

        // loop
        function loop() {

            // calculate times
            let ticker =  Date.now() - startTime;
            let delta = ticker/duration; // 0.0 - 1.0
            let ease = end.easing(delta);

            //check status
            if (delta >= 1) {
                obj.x = end.x;
                obj.y = end.y;
                obj.tint = end.tint;
                resolve();
                return;
            }

            //interpolation (LERP)
            function lerp(a, b, n){
                return a + ( (b-a) * n);
            }

            //lerp coordinates
            obj.x = lerp(start.x,end.x,ease);
            obj.y = lerp(start.y,end.y,ease);
            obj.tint = lerp(start.tint,end.tint,ease);

            //? request loop
            requestAnimationFrame(loop);
        }
        loop()

    } ); //promise end

};

const sleep = function(ms) {
    // make a promise
    return new Promise ( (resolve,reject) => {
        setTimeout(resolve, ms);
    })
};

// export
export { animate, sleep };

