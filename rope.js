class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}

	//create rope constraint here
		this.rope=Constraint.create(options)
	}


    //create display() here 
	display() {
		var point1=this.rope.bodyA.position
		var point2=this.rope.bodyB.position
		push()
		strokeWeight(3)
		stroke("black")
		line(point1.x,point1.y,point2.x+this.pointA,point2.y)
		pop()
	}
}
