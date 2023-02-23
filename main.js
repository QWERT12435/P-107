function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true, vidoe:false});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json)";

}
function modelReady()
{
    classifier.classify(gotResults);
}