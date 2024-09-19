function setup() {
    createCanvas(600, 400);
    background("pink");
  }
  
  function draw( ) { 
  
   stroke("blue");
  fill("blue");
    
  if(mouseIsPressed)
  rect(mouseX, mouseY, 20, 35 );
    
  }
  