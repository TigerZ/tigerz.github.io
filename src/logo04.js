import { Stage, CanvasLayer, CanvasSprite } from 'tigerface-display';
import { Ellipse, Rectangle } from 'tigerface-shape';
import { ColorPalette } from 'tigerface-graphic';

const stage = new Stage({
    width: 300,
    height: 200,
}, document.getElementById('logo') || document.documentElement);

const layer = new CanvasLayer();

const sprite = new CanvasSprite({
    x: 100,
    y: 60,
});

const shape = new Ellipse(30, 0, 20, 10);

const num = 18;

const { colors } = new ColorPalette(num);

class Petal extends CanvasSprite {
    constructor(idx) {
        super();
        this.color = idx;
        this.x = 100;
        this.y = 60;
        this.rotation = idx * (360 / num);
    }

    paint(g) {
        g.drawPolygon(shape, {
            fillStyle: `rgb(${colors[this.color][0]},${colors[this.color][1]},${colors[this.color][2]})`,
        });
    }
}

const bottom = new CanvasSprite();
for (let i = num * 0.5; i < num * 1.5; i += 1) {
    const idx = i % num;
    const petal = new Petal(idx);
    bottom.addChild(petal);
}
layer.addChild(bottom);

const top = new CanvasSprite();
top.onBeforeDraw = (e) => {
    const g = e.graphics;
    g.drawRectangle(new Rectangle(0, 0, 100, 200));
    g.clip();
};
for (let i = 0; i < num; i += 1) {
    const petal = new Petal(i);
    top.addChild(petal);
}
layer.addChild(top);

stage.addLayer(layer);
