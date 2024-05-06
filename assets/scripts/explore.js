// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const select = document.querySelector('#voice-select');
  const button = document.querySelector('button');
  const textarea = document.querySelector('textarea');
  const image = document.querySelector('img');

  let voices = [];
  function populateVoices() {
    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      select.appendChild(option);
    });
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);

  button.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textarea.value);
    const selectedVoiceName = select.selectedOptions[0].value;
    utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
    image.src = 'assets/images/smiling-open.png';
    speechSynthesis.speak(utterance);
    utterance.onend = () => {
      image.src = 'assets/images/smiling.png';
    };
  });
}