(function (window) {
    var speakWord = "Good Bye";
    var byeSpeaker = {};
    
    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    // Робимо byeSpeaker доступним глобально
    window.byeSpeaker = byeSpeaker;
})(window); file - goodbye.js

