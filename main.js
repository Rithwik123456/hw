function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide()
    tint_color="";
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color)
    fill ("red")
    stroke("red")
    circle (50,50,50);
    circle (590,50,50);
    circle (50,430,50);
    circle (590,430,50);
    fill("green")
    stroke("green")
    rect (70, 38, 500, 25)
    rect (70, 417, 500, 25)
    rect (35, 72, 25, 333)
    rect (578, 72, 25, 333)
}

function take_snapshot(){
    save("Rithwik.png");
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}