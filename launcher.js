class Launcher{
    constructor(bodyA, B){
        var options = {
            bodyA: bodyA,
            pointB: B,
            stiffness: 0.04,
            length: 300
        }
        this.pointB = B
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}