var Woodcutter = document.getElementById("Woodcutter");

var WoodcutterBackgroundPositionX = 0;
var WoodcutterAttack1AnimationId = 0;


function WoodcutterAttack1Animation() {
    WoodcutterBackgroundPositionX = WoodcutterBackgroundPositionX - 48;
    Woodcutter.style.backgroundPositionX = WoodcutterBackgroundPositionX + "px";
}

function WoodcutterAttack1AnimationStart() {
    WoodcutterAttack1AnimationId = setInterval(WoodcutterAttack1Animation, 100);
}



function KeyLisiner(event) {
    var KeyCode = event.which;
    // alert(KeyCode);
    if (KeyCode == 68) {
        WoodcutterAttack1AnimationStart();

    }
}