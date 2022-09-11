import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: 800,
  height: 640,
  backgroundAlpha: 0,
  view: document.querySelector('#stage')
});

const texture = PIXI.Texture.from('assets/bunny.png');
const bunny = new PIXI.Sprite(texture);
bunny.anchor.set(0.5);
bunny.x = 160
bunny.y = 160
app.stage.addChild(bunny);

app.ticker.add((delta) => {
  bunny.rotation -= 0.01 * delta;
});