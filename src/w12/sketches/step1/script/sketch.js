'use strict';

var sketch = function (p) {
  var agents = [];
  var agentCount = 4000;
  var noiseScale = 100;
  var noiseStrength = 10;
  var noiseZRange = 0.4;
  var noiseZVelocity = 0.01;
  var overlayAlpha = 10;
  var agentAlpha = 90;
  var strokeWidth = 0.3;
  var drawMode = 1;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);

    for (var i = 0; i < agentCount; i++) {
      agents[i] = new Agent(noiseZRange);
    }
  };

  p.draw = function () {
    p.fill(255, overlayAlpha);
    p.noStroke();
    p.rect(0, 0, p.width, p.height);

    // Draw agents
    p.stroke(0, agentAlpha);
    for (var i = 0; i < agentCount; i++) {
      if (drawMode == 1) {
        agents[i].update1(
          strokeWidth,
          noiseScale,
          noiseStrength,
          noiseZVelocity
        );
      } else {
        agents[i].update2(
          strokeWidth,
          noiseScale,
          noiseStrength,
          noiseZVelocity
        );
      }
    }
  };

  p.keyReleased = function () {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
    if (p.key == '1') drawMode = 1;
    if (p.key == '2') drawMode = 2;
    if (p.key == ' ') {
      var newNoiseSeed = p.floor(p.random(10000));
      console.log('newNoiseSeed', newNoiseSeed);
      p.noiseSeed(newNoiseSeed);
    }
    if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255);
  };
};

var myp5 = new p5(sketch);
