(function (window) {
    var speakWord = "Hello";
    var helloSpeaker = {};
    
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    // Робимо helloSpeaker доступним глобально
    window.helloSpeaker = helloSpeaker;
})(window); 
