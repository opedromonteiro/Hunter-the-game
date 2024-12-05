class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 720;
        this.ratio = this.height / this.baseHeight;
        this.player = new Player(this);
        
        this.resize(window.innerWidth, window.innerHeight)

        window.addEventListener('resize', e=> {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
        });
    }

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx.fillStyle = '#5995f2';
        this.ratio = this.height / this.baseHeight;

        this.player.resize();
        console.log(this.height, this.baseHeight, this.ratio);
    }

    render() {
        this.player.update();
        this.player.draw();
    }
}

window.addEventListener('load', function() {
    const canvas = document.getElementById('game-layout');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;

    const game = new Game(canvas, ctx);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render();
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
    
})