class Cerdito extends Base{
  constructor(x,y,width,height){
   super(x,y,width,height);
    this.image = loadImage("sprites/enemy.png");
    
    this.Visibility=255;
  }
  display(){
    if (this.body.speed<5){
      super.display();
    } else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility - 5;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }
}