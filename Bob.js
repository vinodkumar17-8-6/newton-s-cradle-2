class bob{
    constructor(x,y,r)
    {
        var options=
        {
            // 'isStatic':false,
            'restitution':1.0,
            // 'friction':1.0,
            'density':3.0
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        
    }

    display()
    {
        var bobpos=this.body.position;
        push();
        fill("blue");
        translate(bobpos.x,bobpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}