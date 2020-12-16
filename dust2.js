class Dust
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2			
			}
		this.x=x;
        this.y=y;
        this.width=width
		this.height=height
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options)
		this.image = loadImage("pic/dustbingreen.png");
		World.add(world, this.body);

	}
	display()
	{
			var dustpos=this.body.position;		

			push()
			translate(dustpos.x, dustpos.y);
			imageMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			image(this.image,0,0,this.width, this.height);
			pop()
			
	}

}