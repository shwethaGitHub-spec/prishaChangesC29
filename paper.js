class Paper {
    constructor(x, y, r) {
      var options = {
          restitution:0.3,
          friction:0,
          density:1.2,
          isStatic:false
          

      }
      this.x=x;
     this.y=y;
      this.r=r;
      this.paperimage=loadImage("Sprites/paper.png")
     
      
      this.body = Bodies.circle(this.x, this.y,(this.r-20)/2, options);
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
      const angle = this.body.angle;
      push();
      
      translate(paperpos.x, paperpos.y);
      rotate(angle);
      imageMode(CENTER);
       
      
      fill("blue")
      image(this.paperimage,0,0,this.r,this.r)
      pop();
   
    }
  };