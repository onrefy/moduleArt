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
         world[this.x,this.y] = 'alive';
     }

     Kill() {
         world[this.x,this.y] = 'die'
     }

     Alter() {
         if (IsAlive(this.x,this.y)) world[this.x][this.y] = 'die';
         else world[this.x][this.y] = 'alive';
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
                 super.Up();
                 break;
             case 'right':
                 super.Right();
                 break;
             case 'down':
                 super.Down();
                 break;
             case 'left':
                 super.Left();
         }
         if (1) this.TrunLeft();
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


