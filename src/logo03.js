import { Stage, CanvasLayer, CanvasSprite } from 'tigerface-display';
import { Ellipse } from 'tigerface-shape';
import { ColorPalette } from 'tigerface-graphic';
import { Utilities as T } from 'tigerface-common';

const stage = new Stage({
    width: 300,
    height: 200,
}, document.getElementById('logo') || document.documentElement);

const layer = new CanvasLayer();

const sprite = new CanvasSprite({
    x: 100,
    y: 60,
});

const shape = new Ellipse(30, 0, 30, 10);

const { colors } = new ColorPalette(30);

class Petal extends CanvasSprite {
    constructor(idx) {
        super();
        this.color = idx;
    }

    paint(g) {
        g.save();
        g.drawPolygon(shape, {
            fillStyle: `rgb(${colors[this.color][0]},${colors[this.color][1]},${colors[this.color][2]})`,
        });
        g.restore();
    }
}

for (let i = 0; i < 30; i += 1) {
    const petal = new Petal(i);
    petal.x = 100;
    petal.y = 60;
    petal.rotation = i * 12;
    layer.addChild(petal);
}

stage.addLayer(layer);
