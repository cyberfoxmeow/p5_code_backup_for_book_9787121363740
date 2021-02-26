let capture;
function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.hide();
}
function draw() {
  image(capture, 0, 0, capture.width, capture.height);
}
