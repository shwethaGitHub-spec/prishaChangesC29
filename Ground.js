class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          'restitution':0,
          'density':0.8,
          'friction':0.4
      }
     
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
     

      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("brown");
      rect(pos.x,pos.y, this.width, this.height);
    }
  }