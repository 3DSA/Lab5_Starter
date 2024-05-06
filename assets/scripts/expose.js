// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  const img = document.querySelector('img');
  const audio = document.querySelector('audio');
  const select = document.getElementById('horn-select');
  const volume = document.getElementById('volume');
  const button = document.querySelector('button');
  const volumeIcon = document.querySelector('div > img');

  select.addEventListener('change', function() {
    const selectedHorn = select.value;
    img.src = `./assets/images/${selectedHorn}.svg`;
    audio.src = `./assets/audio/${selectedHorn}.mp3`;
  });

  volume.addEventListener('input', function() {
    const vol = volume.value;
    audio.volume = vol / 100;

    if (vol == 0) {
      volumeIcon.src = './assets/icons/volume-level-0.svg';
    } else if (vol < 33) {
      volumeIcon.src = './assets/icons/volume-level-1.svg';
    } else if (vol < 67) {
      volumeIcon.src = './assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = './assets/icons/volume-level-3.svg';
    }
  });

  button.addEventListener('click', function() {
    audio.play();
    if (select.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}