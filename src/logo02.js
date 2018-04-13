import { Stage, CanvasLayer, CanvasSprite } from 'tigerface-display';
import { Ellipse } from 'tigerface-shape';

const stage = new Stage({
    width: 300,
    height: 200,
}, document.getElementById('logo') || document.documentElement);

const layer = new CanvasLayer();

const sprite = new CanvasSprite({
    x: 100,
    y: 60,
});

const shape = new Ellipse(0, 30, 10, 30);

class Petal extends CanvasSprite {
    paint(g) {
        g.drawPolygon(shape, {
            fillStyle: 'rgb(255,0,0)',
        });
    }
}

for (let i = 0; i < 30; i += 1) {
    const petal = new Petal();
    petal.x = 100;
    petal.y = 60;
    petal.rotation = i * 12;
    layer.addChild(petal);
}

stage.addLayer(layer);
