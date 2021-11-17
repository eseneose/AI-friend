const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = ["i'm good you little piece of shit", "doing good home boy", "leave me alone"];
const weather = ["weather is fine", "pitiful you are in nigeria"];
const intro = ["i am jane, welcome to this simulated conversation. whhat can i do for you ?"];
const funQuestion = ["no you silly, i am just a simple computer program. or, have you fallen in love with me already?", "i really do not have time for things like that right now. are you ready to be serious yet?"]


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("voice is activated");
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add listener to d btn

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {

    const speech = new SpeechSynthesisUtterance();
    speech.text = "now you saying shit";

    if (message.includes("how are you")) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    };

    if (message.includes("how is the weather")) {
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    };

    if (message.includes("do you have a boyfriend", "do you have a fiance", "do you have sex", "have you had sex before")) {
        const finalText = funQuestion[Math.floor(Math.random() * funQuestion.length)];
        speech.text = finalText;
    };
    if (message.includes("introduce yourself", "who are you", "what is your name")) {
        const finalText = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalText;
    }


    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 0.7;

    window.speechSynthesis.speak(speech);
}