class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //&& birdState === "launched"
   super.display();
  if(this.body.position.x > 200 && this.body.velocity.x > 10 ){
    var position = [this.body.position.x, this.body.position.y] 
    this.trajectory.push(position);
  }
  for(var p = 0; p<this.trajectory.length; p++){
    image(this.smokeImage, this.trajectory[p][0],this.trajectory[p][1]);
  }

  }
}
