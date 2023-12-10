function setup(){
    canvas=createCanvas(650,480);
    canvas.position(350,200);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video,230,150,220,200);
    fill("red");
    stroke("red");
    circle(50,50,70);
    circle(50,420,70);
    circle(580,420,70);
    circle(580,50,70);
    fill("green");
    stroke("green");
    rect(85,410,460,20);
    rect(85,600,460,20);
    rect(40,85,20,300);
    rect(85,40,460,20);
    rect(570,85,20,300);
    
}



function take_snapshot(){
    save('cat.jpg');
}