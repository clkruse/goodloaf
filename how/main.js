var isFading = false;

  function handleVideoEnd() {
    var videoEl = document.getElementById('loopVideo');
    videoEl.currentTime = 0;
  }

  function handleVideoTimeUpdate() {
    var videoEl = document.getElementById('loopVideo');
    var fadeDuration = 1; // Duration of the fade effect in seconds

    if (videoEl.currentTime >= videoEl.duration - fadeDuration && !isFading) {
      isFading = true;
      fadeOut(videoEl, function () {
        videoEl.currentTime = 0;
        isFading = false;
        fadeIn(videoEl);
      });
    }
  }

  function fadeOut(element, callback) {
    element.style.transition = 'opacity 0.75s';
    element.style.opacity = 0;
    setTimeout(function () {
      if (callback) callback();
    }, 750);
  }

  function fadeIn(element) {
    element.style.transition = 'opacity 0.75s';
    element.style.opacity = 1;
  }