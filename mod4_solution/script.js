
(function(){

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


    for (var nome in names) {
      if(names[nome].charAt(0).toLowerCase() == "j"){
        speakWord = "Good Bye";
        byeSpeaker.speak(names[nome]);
      } else {
        speakWord = "Hello";
        helloSpeaker.speak(names[nome]);
      }

    }
})();


