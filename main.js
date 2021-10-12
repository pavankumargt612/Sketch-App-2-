function setup(){
    canvas = createCanvas(280 , 280);
    canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}


function clearCanvas(){
    background("white");
}


function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
    //Set stroke weight to 13
    strokeWeight(13);
    //Set stroke color black
    stroke(0);
    // If mouse is pressed , draw line between previous and current mouse positions
if(mouseIsPressed){
line(pmouseX , pmouseY , mouseX , mouseY);8
}
}

function classifyCanvas(){
    classifier.classify(canvas , gotResults);
}

function gotResults(error , results){
if(error){
console.error(error);
}
console.log(results);
document.getElementById('label').innerHTML='label : ' + results[0].label;

document.getElementById('confidence').innerHTML='Confidence : ' + Math.round(results[0].confidence *  100 )+'%';


UtterThis=new SpeechSynthesisUtterance(results[0].label);
synth.speak(UtterThis);
}