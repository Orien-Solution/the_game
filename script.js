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
var climbOness = 0;

function KeyLisiner(event) {
    var KeyCode = event.which;

    // alert(KeyCode);

    if (KeyCode == 69) {
        //E
        if (attack1Oness == 0) {

            attack2Oness = 0;
            attack3Oness = 0;
            idleOness = 0;
            walkOness = 0;
            climbOness = 0;
            attack1Oness = 1;
            WoodcutterAttck1Animation();
        }


    } else if (KeyCode == 81) {
        if (attack2Oness == 0) {
            attack1Oness = 0;

            attack3Oness = 0;
            idleOness = 0;
            walkOness = 0;
            climbOness = 0;
            attack2Oness = 1;
            WoodcutterAttack2Animation();
        }
    } else if (KeyCode == 83) {
        //S
        if (idleOness == 0) {
            attack1Oness = 0;
            attack2Oness = 0;
            attack3Oness = 0;

            walkOness = 0;
            climbOness = 0;
            idleOness = 1;
            WoodcutterIdleAnimation();
        }
    } else if (KeyCode == 88) {
        //X
        if (attack3Oness == 0) {
            attack1Oness = 0;
            attack2Oness = 0;

            idleOness = 0;
            walkOness = 0;
            climbOness = 0;
            attack3Oness = 1;
            WoodcutterAttck3Animation();
        }
    } else if (KeyCode == 65) {
        //A
        WoodcutterAttck1BackAnimation();
    } else if (KeyCode == 68) {
        //D
        if (walkOness == 0) {
            attack1Oness = 0;
            attack2Oness = 0;
            attack3Oness = 0;
            idleOness = 0;

            climbOness = 0;
            walkOness = 1;
            WoodcutterWalkAnimation();
        }
    } else if (KeyCode == 87) {
        //W
        if (climbOness == 0) {
            attack1Oness = 0;
            attack2Oness = 0;
            attack3Oness = 0;
            idleOness = 0;
            walkOness = 0;

            climbOness = 1;
            WoodcutterClimbAnimation();
        }

    }
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
    alert("ok");
    ///back scale(-)
    alert("ok1");
}

function WoodcutterAttack2Animation() {
    Woodcutter.style.backgroundImage = "url(resources/Character/Woodcutter/Woodcutter_attack2.png)";

}

function WoodcutterIdleAnimation() {

    Woodcutter.style.backgroundImage = "url(resources/Character/Woodcutter/Woodcutter_idle.png)";
}

function WoodcutterWalkAnimation() {

    Woodcutter.style.backgroundImage = "url(resources/Character/Woodcutter/Woodcutter_walk.png)";
}