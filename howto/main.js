import CanvasScrollClip from "canvas-scroll-clip";
console.log("running main.js")

new CanvasScrollClip(document.querySelector('.scroll-video'), {
  framePath: "{url_of_first_frame_in_a_sequence}",
  frameCount: 101,
  scrollArea: 2000
})