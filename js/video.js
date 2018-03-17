

var player = document.querySelector('.player');
var video = player.querySelector('.player__video');
var loader = player.querySelector('.player__loader');
var duration = player.querySelector('.player__times--duration');
var currentTime = player.querySelector('.player__times--current');
var toggleBtn = player.querySelector('.player__toggle');
var skipBtns = player.querySelectorAll('[data-skip]');
var progressBar = player.querySelector('.player__progress');
var rangeInputs = player.querySelectorAll('.player__range-input');

// Do stuff when video is ready
function init() {
  updateStates();
  player.removeChild(loader);
  duration.textContent = formatTime(video.duration);
}

function formatTime(seconds) {
  return new Date(1000 * seconds).toISOString().substr(11, 8);
}

function togglePlay() {
  if (video.paused) video.play();else video.pause();
}

function updateStates() {
  if (video.paused) {
    toggleBtn.classList.add('is-paused');
    toggleBtn.setAttribute('title', 'Play');
    player.classList.add('is-paused');
  } else {
    toggleBtn.classList.remove('is-paused');
    toggleBtn.setAttribute('title', 'Pause');
    player.classList.remove('is-paused');
  }
}

function scrub(e) {
  var scrubTime = e.offsetX / progressBar.offsetWidth * video.duration;
  video.currentTime = scrubTime;
}

function handleProgress() {
  var percent = video.currentTime / video.duration * 100;
  currentTime.textContent = formatTime(video.currentTime);
  progressBar.style.setProperty('--progressbar-value', percent + '%');
}

function handleSkiping() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeInputs() {
  video[this.name] = this.value;
}

video.addEventListener('loadeddata', init);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateStates);
video.addEventListener('pause', updateStates);
video.addEventListener('timeupdate', handleProgress);

toggleBtn.addEventListener('click', togglePlay);
skipBtns.forEach(function (skipBtn) {
  return skipBtn.addEventListener('click', handleSkiping);
});
rangeInputs.forEach(function (rangeInput) {
  return rangeInput.addEventListener('change', handleRangeInputs);
});

var mouseDown = false;
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', function (e) {
  return mouseDown && scrub(e);
});
progressBar.addEventListener('mousedown', function () {
  return mouseDown = true;
});
progressBar.addEventListener('mouseup', function () {
  return mouseDown = false;
});
