class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          
          }
      this.Visiblity = 255;// diminuir a visibilidade
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      console.log(this.body.speed);
     if(this.body.speed < 3){// velocidade meor que 3 remova o obj
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.width,this.height);
    }
    else{
      World.remove(world, this.body);// matriz de remoção 
      push();
      this.Visiblity = this.Visiblity - 5; //diminuir a visibilidade
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, 
      this.body.position.y,this.width,this.height);
      pop();
      }
    }
  }