class Particle {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    Up() {
        this.y++;
    }
    Down() {
        this.y--;
    }
    Left() {
        this.x--;
    }
    Right() {
        this.x++;
    }

    EnLive() {
        world[this.x, this.y] = 'alive';
    }

    Kill() {
        world[this.x, this.y] = 'die'
    }

    Alter() {
        if (IsAlive(this.x, this.y)) world[this.x][this.y] = 'die';
        else world[this.x][this.y] = 'alive';
    }

    BoundFly() {
        if (this.x > xNum - 1) this.x = 0;
        if (this.x < 0) this.x = xNum - 1;
        if (this.y > yNum - 1) this.y = 0;
        if (this.y < 0) this.y = yNum - 1;
    }


}


class MovingParticle extends Particle {
    constructor(x, y) {
        super(x, y, 'alive');
        this.possibleDirection = ['up', 'right', 'down', 'left'];
        this.directionIndex = 0;
        this.direction = this.possibleDirection[this.directionIndex];

    }

    MoveForwards() {
        switch (this.direction) {
            case 'up':
                this.Up();
                break;
            case 'right':
                this.Right();
                break;
            case 'down':
                this.Down();
                break;
            case 'left':
                this.Left();
        }
        this.BoundFly();
        if (IsAlive(this.x, this.y)) this.TrunLeft();
        else this.TrunRight();
        this.Alter();
    }

    TrunRight() {
        this.directionIndex++;
        if (this.directionIndex > 3) this.directionIndex = 0;
        this.direction = this.possibleDirection[this.directionIndex];
    }

    TrunLeft() {
        this.directionIndex--;
        if (this.directionIndex < 0) this.directionIndex = 3;
        this.direction = this.possibleDirection[this.directionIndex];
    }

}
