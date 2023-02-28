import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"
  }
  handleClick() {
    this.element.textContent = "Clicked!"
  }
  toggleFullscreen() {
    const fScreen = document.querySelector('#toggle-fullscreen');
    console.log(fScreen);
    fScreen.addEventListener('click', function () {
      // if already full screen; exit
      // else go fullscreen
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        element = document.querySelector('#container');
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }
      element.style = 'display: flex;justify-items:center;align-items:cener;';
      fScreen.style = 'margin: auto;';
    });

  }
}
