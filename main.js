picture="";
objects = [];
status="";
function preload()
{
picture = loadImage("baby-boy-posing-2607278.jpg")
}

function setup()
{
canvas = createCanvas(500,300);
canvas.center();
}

function modelLoaded()
{
console.log("Model is loaded");
status = true;
objectDetector.detect(picture, gotResult);
}
function gotResult(error, results)
{
if(error)
{
console.error(error);
}
console.log(results);
objects=results;
}
function draw()
{
image(picture, 0,0,500,300)
if(status != "")
{
r=random(255);
g=random(255);
b=random(255);
for (i=0; i<objects.length;i++)
{
    document.getElementById("status").innerHTML ="Status: Objects Detected";
     document.getElementById("object_length").innerHTML ="Baby is found";
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    fill(r,g,b);
    percent = floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent +"%",objects[i].x+15,objects[i].y+15);
}
}
else(status>0)
{
    document.getElementById("status").innerHTML ="Status: Objects Detected";
    document.getElementById("object_length").innerHTML ="Baby is not found";
     alarm.play();

}
}
function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML ="Status: Detecting Objects";
   
}


