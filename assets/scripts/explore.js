// explore.js

window.addEventListener('DOMContentLoaded', init);

function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

function init() {
  // TODO
  const image = document.querySelector('img');
  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  // console.log(document.getElementsByTagName(button));
  let voice_nMW = "";
  document.querySelector('select').addEventListener('change', function(){
    voice_nMW = document.querySelector('select').value;
  })
  document.getElementsByTagName('button')[0].addEventListener('click', function() {
    let utterance = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
    utterance.voice = voice_nMW;
    speechSynthesis.speak(utterance);
    image.src = "assets/images/smiling-open.png";
    console.log(speechSynthesis.speaking);
    utterance.onend = function(event){
      image.src = "assets/images/smiling.png";
    } 
  });

}