document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('film');
    video.addEventListener('click', function() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      video.muted = false; // Включаем звук
    });
  });