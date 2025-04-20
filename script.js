let auto = document.getElementById("auto");
let mech = document.getElementById("mech");
let object1 = document.getElementById("Object1");
let arrowup = document.getElementById("arrow-up1");
let arrowdown = document.getElementById("arrow-down1");
let arrowleft = document.getElementById("arrow-left1");
let arrowright = document.getElementById("arrow-right1");


function disableButtons() {
    arrowdown.disabled = true;
    arrowup.disabled = true;
    arrowleft.disabled = true;
    arrowright.disabled = true;
}
disableButtons();
function enableButtons() {
    arrowdown.disabled = false;
    arrowup.disabled = false;
    arrowleft.disabled = false;
    arrowright.disabled = false;
}

auto.addEventListener("click", ()=> {
    auto.style.background = "linear-gradient(to right, #989fb0   0%, #1500ffac 100%)";
    object1.id = "Object2";
    mech.style.background = "white";
    arrowdown.id = "arrow-down1";
    arrowleft.id = "arrow-down1";
    arrowright.id = "arrow-down1";
    arrowup.id = "arrow-down1";
    disableButtons();
})
mech.addEventListener("click", ()=> {
    mech.style.background = "linear-gradient(to right, #989fb0   0%, #1500ffac 100%)";
    object1.id = "Object1";
    auto.style.background = "white";
    arrowdown.id = "arrow-down2";
    arrowleft.id = "arrow-down2";
    arrowright.id = "arrow-down2";
    arrowup.id = "arrow-down2";
    enableButtons()
})
 