img = "";
status = "";
objects = [];
function preload(){
    
}
function setup(){
    img = loadImage('https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFzdGVyJTIwYmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
    canvas = createCanvas(640,420);
    canvas.center();
    objDctr = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting";
}
function modelLoaded(){
    console.log("model loaded!");
    console.log(ml5.version);
    status = true;
    objDctr.detect(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects = results;

    }
}
function draw(){
    image(img,0,0,640,420);
    if(status != ''){
        for(i = 0; i< objects.length; i++){
            document.getElementById('status').innerHTML = "Status: Object Detected";
            fill('#033');
            percent = floor(objects[i].confidence * 100);
            textSize(23);
            text(objects[i].label + " " + percent + "%" , objects[i].x +15, objects[i].y + 20);
            noFill();
            stroke('#033');
            rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height);
        }
    }

}
function lRoom(){
    img4 = img1;
    window.location.href("index1.html")
}