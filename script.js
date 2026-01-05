function goBack() {
    alert("Go Back Button Clicked");
  }

  function goForward() {
    alert("Go Forward Button Clicked");
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }