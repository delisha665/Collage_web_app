Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 recognition=new window.webkitSpeechRecognition();

function change_layout(){
    document.getElementById("picture1").style.height="300px";
    document.getElementById("picture3").style.width="1000px";
    document.getElementById("picture3").style.marginLeft="300px";
    }
    function listen() {
        recognition.start();
    }
  function start() {
    listen();
      recognition.onresult=function(e){
        transcript=e.results[0][0].transcript;
        console.log(transcript);
        document.getElementById("textbox").innerHTML=transcript.toLowerCase();
        if (transcript=="selfie") {
            speak();
           
            Webcam.attach( '#camera' ); 
            setTimeout(function(){
                takepicture();
               },5000);
               setTimeout(save_picture,8000);
        
    }
}
}
function speak(){
    synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    console.log(speak_data);
    speak_object=new SpeechSynthesisUtterance(speak_data);
    speak_object.volume=0.6;
    synth.speak(speak_object);
}
function takepicture() {
    Webcam.snap(function(src){
        document.getElementById("picture1").innerHTML="<img src="+src+" id='picture_1'>"
    });
    Webcam.snap(function(src){
        document.getElementById("picture2").innerHTML="<img src="+src+" id='picture_2'>"
    })
    Webcam.snap(function(src){
        document.getElementById("picture3").innerHTML="<img src="+src+" id='picture_3'>"
    })


}
