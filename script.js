var Woodcutter = document.getElementById("Woodcutter");

var WoodcutterBackgroundPositionX = 0;
var WoodcutterAnimationId = 0;

function WoodcutterAnimation() {
    WoodcutterBackgroundPositionX = WoodcutterBackgroundPositionX - 48;
    Woodcutter.style.backgroundPositionX = WoodcutterBackgroundPositionX + "px";
}

function WoodcutterAnimationStart() {

    WoodcutterAnimationId = setInterval(WoodcutterAnimation, 200);
}

var attack1Oness = 0;
var attack2Oness = 0;
var attack3Oness = 0;
var idleOness = 0;
var walkOness = 0;
var walkBackOness = 0;
var climbOness = 0;

var attackWithWalkStatus = 1;

var clickMove = 0;
var clickMoveBack = 0;

var objectMoveAnimationId;
var objectMoveBackAnimationId;


function KeyLisiner(event) {
    var KeyCode = event.which;

    // alert(KeyCode);

    if (KeyCode == 69) {
        //E
        E();

    } else if (KeyCode == 81) {
        //Q
        Q();

    } else if (KeyCode == 83) {
        //S
        S();

    } else if (KeyCode == 88) {
        //X
        X();

    } else if (KeyCode == 65) {
        //A
        A();
        //x attack ekedi awlak thiyenwa backward ekata

    } else if (KeyCode == 68) {
        //D
        D();

    } else if (KeyCode == 87) {
        //W
        W();

    }
}

function E() {
    moveAnimationController();
    if (attack1Oness == 0) {
        attack2Oness = 0;
        attack3Oness = 0;
        idleOness = 0;
        walkOness = 0;
        climbOness = 0;
        walkBackOness = 0;
        attack1Oness = 1;
        WoodcutterAttck1Animation();
    }
}

function Q() {
    moveAnimationController();
    if (attack2Oness == 0) {
        attack1Oness = 0;
        walkBackOness = 0;
        attack3Oness = 0;
        idleOness = 0;
        walkOness = 0;
        climbOness = 0;
        attack2Oness = 1;

        WoodcutterAttack2Animation();
    }
}

function S() {
    moveAnimationController();
    if (idleOness == 0) {
        attack1Oness = 0;
        attack2Oness = 0;
        attack3Oness = 0;
        walkBackOness = 0;
        walkOness = 0;
        climbOness = 0;
        idleOness = 1;
        WoodcutterIdleAnimation();

    }
}

function X() {
    moveAnimationController();
    if (attack3Oness == 0) {
        if (attackWithWalkStatus == 1) {
            if (clickMove == 0) {
                // attackWithWalkStatus = 1;
                clickMove = 1;
                objectMove();
                clearInterval(objectMoveBackAnimationId);
            }
        } else if (attackWithWalkStatus == 2) {
            if (clickMoveBack == 0) {
                // attackWithWalkStatus = 2;
                clickMoveBack = 1;
                objectMoveBack();
                clearInterval(objectMoveAnimationId);
            }
        }
        attack1Oness = 0;
        attack2Oness = 0;
        walkBackOness = 0;
        idleOness = 0;
        walkOness = 0;
        climbOness = 0;
        attack3Oness = 1;
        WoodcutterAttck3Animation();
        setTimeout(stepForwardController, 2500);
    }
}

function A() {
    moveAnimationController();
    if (clickMoveBack == 0) {
        attackWithWalkStatus = 2;
        clickMoveBack = 1;
        objectMoveBack();
    }

    if (walkBackOness == 0) {
        attack1Oness = 0;
        attack2Oness = 0;
        idleOness = 0;
        walkOness = 0;
        climbOness = 0;
        attack3Oness = 0;
        walkBackOness = 1;
        WoodcutterAttck1BackAnimation();
        setTimeout(stepBackController, 1500);
    }
}

function W() {
    moveAnimationController();
    if (climbOness == 0) {
        attack1Oness = 0;
        attack2Oness = 0;
        attack3Oness = 0;
        idleOness = 0;
        walkOness = 0;
        walkBackOness = 0;
        climbOness = 1;
        WoodcutterClimbAnimation();
    }
}

function D() {
    moveAnimationController();
    if (clickMove == 0) {
        attackWithWalkStatus = 1;
        clickMove = 1;
        objectMove();
    }

    if (walkOness == 0) {
        attack1Oness = 0;
        attack2Oness = 0;
        attack3Oness = 0;
        idleOness = 0;
        walkBackOness = 0;
        climbOness = 0;
        walkOness = 1;
        WoodcutterWalkAnimation();
        setTimeout(stepForwardController, 1500);
    }
}


function moveAnimationController() {
    clearInterval(objectMoveAnimationId);
    clearInterval(objectMoveBackAnimationId);
    clickMove = 0;
    clickMoveBack = 0;
}


var WoodcutterMarginLeft = 100;

function stepForwardController() {
    attack1Oness = 0;
    attack2Oness = 0;
    attack3Oness = 0;
    idleOness = 0;
    walkOness = 0;
    walkBackOness = 0;
    climbOness = 0;
    clearInterval(objectMoveAnimationId);
    WoodcutterIdleAnimation();

}

function stepBackController() {
    attack1Oness = 0;
    attack2Oness = 0;
    attack3Oness = 0;
    idleOness = 0;
    walkOness = 0;
    walkBackOness = 0;
    climbOness = 0;
    clearInterval(objectMoveBackAnimationId);
    WoodcutterIdleAnimation();

}

function WoodcutterClimbAnimation() {
    Woodcutter.style.backgroundImage = "url(resources/Character/Woodcutter/Woodcutter_climb.png)";
}

function WoodcutterAttck1Animation() {

    Woodcutter.style.backgroundImage = "url(resources/Character/Woodcutter/Woodcutter_attack1.png)";

}

function WoodcutterAttck3Animation() {

    Woodcutter.style.backgroundImage = "url(resources/Character/Woodcutter/Woodcutter_attack3.png)";

}

function WoodcutterAttck1BackAnimation() {
    Woodcutter.style.backgroundImage = "url(resources/Character/Woodcutter/Woodcutter_walk.png)";
    Woodcutter.className = "WoodcutterBack";
}

function WoodcutterAttack2Animation() {
    Woodcutter.style.backgroundImage = "url(resources/Character/Woodcutter/Woodcutter_attack2.png)";
}

function WoodcutterIdleAnimation() {
    Woodcutter.style.backgroundImage = "url(resources/Character/Woodcutter/Woodcutter_idle.png)";
}

function WoodcutterWalkAnimation() {
    Woodcutter.style.backgroundImage = "url(resources/Character/Woodcutter/Woodcutter_walk.png)";
    Woodcutter.className = "Woodcutter";


}

function objectMove() {
    objectMoveAnimationId = setInterval(() => {
        WoodcutterMarginLeft = WoodcutterMarginLeft + 5;
        Woodcutter.style.marginLeft = WoodcutterMarginLeft + "px";
    }, 250);
}

function objectMoveBack() {
    objectMoveBackAnimationId = setInterval(() => {
        WoodcutterMarginLeft = WoodcutterMarginLeft - 5;
        Woodcutter.style.marginLeft = WoodcutterMarginLeft + "px";
    }, 250);
}