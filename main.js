function setup(){
  canvas=createCanvas(300,300);
  video=createCapture(VIDEO);
canvas.center();
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelloaded);
}
function modelloaded(){
console.log("model is loaded")
}
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotresults);
}

function gotresults(error,results){
if(error)
{
  console.log(error);
}
else{
  console.log(results);
  document.getElementById("result_object_name").innerHTML=results[0].label;
  document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}