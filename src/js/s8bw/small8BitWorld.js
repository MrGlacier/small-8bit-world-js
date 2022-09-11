import * as PIXI from 'pixi.js'

export class small8BitWorld
{
    constructor(config) {
        this.config = config;
        this.app = null;

        console.log("Hello from " + this.constructor.name + " ✔");
        this.pixiTest();
    }

    pixiTest = () => {
        const pixiConfig = {
                resizeTo: window,
                backgroundColor: this.config.backgroundColor,
                view: document.querySelector(this.config.gameStageId)
        };

        this.app = new PIXI.Application(pixiConfig);
        const texture = PIXI.Texture.from('assets/bunny.png');
        const bunny = new PIXI.Sprite(texture);
        bunny.anchor.set(0.5);
        bunny.x = 160
        bunny.y = 160
        this.app.stage.addChild(bunny);

        this.app.ticker.add((delta) => {
            bunny.rotation -= 0.01 * delta;
        });
    }
};