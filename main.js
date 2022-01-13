function setup(){
    video= createCapture(VIDEO);
    video.size(400,300);
    canvas= createCanvas(400, 400);
    canvas.position(650, 150);

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResult);
}

function draw(){
    background("lavenderblush");
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotResult(results){
    if(results.length>0){
        console.log(results);
    }
}
