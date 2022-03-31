var btn = document.createElement('button');
btn.style.margin = '250px';
btn.innerHTML = 'Light switch';
document.body.appendChild(btn);

// schijf hier tussen je code
var x = 0;
btn.onclick = lightaan
function lightaan(){
if (x == 0) {
    console.log("Light switch is on");
    document.body.style.backgroundColor = "red";
    btn.innerHTML = 'Light switch is on';
    x = 1
} else {
    console.log("Light is off");
    document.body.style.backgroundColor = "black";
    btn.innerHTML = 'Light switch is off';
    x = 0
}

}

// schijf hier tussen je code