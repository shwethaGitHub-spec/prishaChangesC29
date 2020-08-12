

   const Engine = Matter.Engine;
   const World = Matter.World;
   const Bodies = Matter.Bodies;
   const Body = Matter.Body;
   const  Constraint= Matter.Constraint;
   
   var groundObject,paperObject,dustbinObj;	
   var world;
   var launcher1;

   
   
   function setup() {
	   createCanvas(1600,700);
	   rectMode(CENTER);
   
   
	   engine = Engine.create();
	   world = engine.world;
	   dustbinObj=new Dustbin(1200,650);
	   paperObject=new Paper(250,150,70);
	   groundObject=new Ground(width/2,690,width,10);
	   launcher1=new Launcher(paperObject.body,{x:300,y:250});
	  
	  
	   
	   
	   //Create a Ground
	   
   
	   
   
	   Engine.run(engine);
   
	 
   }
   
   
   function draw() {
	 rectMode(CENTER);
	 background(180);
	 Engine.update(engine)
	 paperObject.display();
	 dustbinObj.display();
	 
	 groundObject.display();
     launcher1.display();
	 

	
	
	
	 
	
	 
	 
	
   }
   
  /* function keyPressed() {
		 if (keyCode === UP_ARROW) {
   
		   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:255,y:-250});
	   
		 }
   }*/
   function mouseDragged(){

    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});


}
function mouseReleased(){
launcher1.fly();


}


 