class Launcher{
    constructor(bodyA,pointB){
    var options={
        length:10,
        stiffness:0.04,
        bodyA:bodyA,
        pointB:pointB
    
    }
    this.launcher=Constraint.create(options);
    this.pointB=pointB;
    World.add(world,this.launcher);
    }

    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        push();
        if(this.launcher.bodyA){
    
        
             var pointA= this.launcher.bodyA.position;
            var pointB= this.pointB;
             strokeWeight(4);
             //stroke("black")
            line(pointA.x,pointA.y,pointB.x,pointB.y);
         
       }
    pop();

    
    
    }
}