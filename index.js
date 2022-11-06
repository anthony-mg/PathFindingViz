const s = (sketch) => {
  sketch.setup = () => {
    sketch.nodeSize = 20;
    sketch.spacing = 3;
    w = sketch.windowWidth - sketch.windowWidth * 0.2;
    w = w - (w % 20);
    h = sketch.windowHeight - sketch.windowHeight * 0.2;
    h = h - (h % 20);
    w += (w / sketch.nodeSize) * sketch.spacing + sketch.spacing;
    h += (h / sketch.nodeSize) * sketch.spacing + sketch.spacing;
    sketch.canvas = sketch.createCanvas(w, h);
  };
  sketch.draw = () => {
    sketch.background(200, 200, 200);
    sketch.fill(255, 0, 0);
    sketch.noStroke();
    for (var i = sketch.spacing; i < sketch.width; i += sketch.nodeSize + sketch.spacing) {
      for (var j = sketch.spacing; j < sketch.height; j += sketch.nodeSize + sketch.spacing) {
        sketch.rect(i, j, sketch.nodeSize, sketch.nodeSize, 5);
      }
    }
  };

  sketch.windowResized = () => {
    w = sketch.windowWidth - sketch.windowWidth * 0.2;
    w = w - (w % 5);
    h = sketch.windowHeight - sketch.windowHeight * 0.2;
    h = h - (h % 5);
    sketch.resizeCanvas(w, h);
  };
};

let p = new p5(s, "canvas-container");
