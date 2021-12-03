img = "";
status = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detection object";
}

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function modelLoaded()
{
    console.log("model Loded");
    status = true;
    objectDetector.detect(img, gotresult);
}

function gotresult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}

function draw() 
{ 
    image(img, 0, 0, 640, 420); 
    fill("#FF0000"); 
    text("Dog", 45, 75); 
    noFill(); 
    stroke("#FF0000"); 
    rect(30, 60, 450, 350 ); 
    
    
    fill("#FF0000"); 
    text("cat", 320, 120); 
    noFill(); 
    stroke("#FF0000"); 
    rect(300, 90, 270, 320 ); 
}
