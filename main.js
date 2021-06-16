Webcam.set ({
    width:340,
    height:300,
    image_format: "png",
    png_quality: 90
});
   camera = document.getElementById("camera");
   Webcam.attach("#camera");
   function take_snapshot() {
       Webcam.snap(function (data_uri){
           document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";
       });
   }
   console.log("Ml5 version:",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5ncqFi2zE/model.json",ModelLoaded);
function ModelLoaded() {
console.log("Model loaded");
}