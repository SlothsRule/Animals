function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DuWZldyPa/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    
    } else {
        console.log(results);
        red = Math.floor(Math.random()*255);
        green = Math.floor(Math.random()*255);
        blue = Math.floor(Math.random()*255);

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'I can hear - '+
       (results[0].confidence*100).toFixed(2)+" %";
        
       document.getElementById("result_label").style.color=
       "rgb("+red+","+green+","+blue+")";

       document.getElementById("result_confidence").style.color=
       "rgb("+red+","+green+","+blue+")";


       img = document.getElementById('alien1') 
       img1 = document.getElementById('alien2')
       img2 = document.getElementById('alien3')
       img3 = document.getElementById('alien4')
   
       if (results[0].label == "cow") {
         img.src = 'cow.gif';
         img1.src = 'cat.jpg';
         img2.src = 'dog.jpg';
         img3.src = 'bg.jpg';
       } else if (results[0].label == "cat") {
        img.src = 'cow.jpg';
        img1.src = 'cat.gif';
        img2.src = 'dog.jpg';
        img3.src = 'bg.jpg';
       } else if (results[0].label == "dog") {
        img.src = 'cow.jpg';
        img1.src = 'cat.jpg';
        img2.src = 'dog.gif';
        img3.src = 'bg.jpg';
       }else{
        img.src = 'cow.jpg';
        img1.src = 'cat.jpg';
        img2.src = 'dog.jpg';
        img3.src = 'bg.gif';
       }
     }
   
   
   

    }
