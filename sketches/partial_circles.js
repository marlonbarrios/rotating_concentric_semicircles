const canvasSketch = require('canvas-sketch');
const p5 = require('p5');



let hue;

const rings = [];


new p5()


const settings = {


   p5: true,
   // Turn on a render loop (it's off by default in canvas-sketch)

    animate: true,

    // We can specify dimensions if we want a fixed size on the first render
    dimensions:[512, 512],
    // orientation: 'landscape',
    bleed: 1 / 8,
    // attributes: {
    // antialias: true
    // }
};




canvasSketch(() => {

  hue = random(0, 360);
  const count = floor(random(70, 80));
  for (let i = 0; i < count; i++) {
    const diameter = ((i + 1) / count);
    const arcLength = random(PI * 0.03, PI * 2);
    const arcAngle = random(-PI * 2, PI * 2);
    const spinSpeed = random(-1, 1);
    rings.push({
      spinSpeed,
      diameter,
      arcLength,
      arcAngle
    });
  }

  

  return ({ width, height }) => {
  
    clear();


 

  const minDim = Math.min(width, height);
  
  noFill();
  strokeWeight(minDim * 0.01);
  strokeCap(ROUND);
  stroke(0);

  let d = minDim;
  d -= d * 0.02;
  
  for (let i = 0; i < rings.length; i++) {
    const {
      diameter,
      arcLength,
      arcAngle,
      spinSpeed
    } = rings[i];
    const spin = millis() / 2000 * spinSpeed;
    arc(
      width / 2,
      height / 2,
      diameter * d,
      diameter * d,
      spin + arcAngle,
      spin + arcAngle + Math.PI * arcLength
    );
  }
  }}, settings);




