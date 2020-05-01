jQuery(function($){
    $("#content").hide();
    $("#content").viewportChecker({
        callbackFunction:function(){
            $("#content").show();

            let minResize = false;
            let maxResize = false;
            let rellax;
    
            let toggleParallax = function (width) {
    
    
                if (width <= checkpoint && !minResize) {
                    minResize = true;   
                    maxResize = false;
                    console.log("Window width <= " + checkpoint);
                    if (rellax !== undefined) {
                        rellax.destroy();
                    }
    
                } else if (width > checkpoint && !maxResize) {
                    maxResize = true;
                    minResize = false;
                    console.log("Window width > " + checkpoint);
                    rellax = new Rellax('.rellax', {
                        wrapper: null,
                        relativeToWrapper: false,
                        center: false,
                        round: false
                    });
                }
            }

            let checkpoint = 768, width = window.innerWidth;
            toggleParallax(width);

            window.onresize = function () {
                toggleParallax(window.innerWidth);
            };
        }
    })
    
    $("#linesBlock_animated").viewportChecker({
        callbackFunction: function() {
            document.querySelector('.lineOne').style.cssText = ("transform: translateX(38%);");
            document.querySelector('.lineTwo').style.cssText = ("transform: translateX(-38%);");
    
            function animationReverse() {
                document.querySelector('.lineOne').style.cssText = ("transform: none;");
                document.querySelector('.lineTwo').style.cssText = ("transform: none;");
            }

            setTimeout(animationReverse, 2000);
        },
        repeat: true
    })
})