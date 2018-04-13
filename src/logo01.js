import { Stage, CanvasLayer, CanvasSprite } from 'tigerface-display';
import { Ellipse } from 'tigerface-shape';

const stage = new Stage({
    width: 300,
    height: 200,
}, document.getElementById('logo') || document.documentElement);

const layer = new CanvasLayer();

const sprite = new CanvasSprite();
const petal = new Ellipse(100, 35, 10, 30);

sprite.onRedraw = (e) => {
    const g = e.graphics;
    g.drawPolygon(petal, {
        fillStyle: 'rgb(255,0,0)',
    });
};

stage.addLayer(layer);
layer.addChild(sprite);