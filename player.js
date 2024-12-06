class player{
    constructor(game) {
        this.game = game;
        this.x = 20;
        this.y = 0;
        this.spritewidth = 200;
        this.sprinteheight = 200;
        this.width;
        this.height;
        this.speedy;
    }

    draw() {
        this.game.ctx.fillrect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.y += this.speedy;

        if(this.istouchingbottom())    {
            this.y = this.game.height - this.height;
        }
        else   {
            this.speedy += this.game.gravity;
        }
    }

    resize() {
        this.width = this.sprintewidth * this.game.ratio;
        this.height = this.sprinteheight * this.game.ratio;
        this.y = this.game.height * 0.5 - this.height * 0.5;
        this.speedy = -8 * this.game.ratio;
    }

    istouchingbottom()  {
        return this.y  >= this.game.height - this.height;
    }
}
