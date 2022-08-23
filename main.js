leftWristX = 0;
rightWristX = 0;
difference = 0;
noseX = 0;
noseY = 0;





function setup(){
canvas = createCanvas(550, 500)
canvas.position(800, 200);
video = createCapture(VIDEO);
video.size(550, 500)
video.position(150, 150)
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes);
}

function preload(){

}

function draw(){
background('#EEE1BA');
fill("#C92BF8");
stroke("#C92BF8");
square(noseX, noseY, difference);
document.getElementById("square_sides").innerHTML="width and height of the square is: " + difference + "px";
}

function modelLoaded(){
    console.log("model loaded")
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = " +noseX + "nose y =" +noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log(" left wrist x = " +leftWristX + "right wrist x = " + rightWristX);
        difference = floor(leftWristX - rightWristX);
        console.log("difference = " + difference);

        
    }
}