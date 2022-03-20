class Rope {
  constructor(bodyA, bodyB) {
    var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      stiffness: 1.2,
      length: 250,
    };

    //this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  attach(body) {
    this.rope.bodyA = body;
  }

  attach1(body) {
    this.rope.bodyB = body;
  }


  /*fly() {
    this.rope.bodyA = null;
  }*/

  display() {
    //if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.bodyB.position;
      push();

      stroke(48, 22, 8);
      strokeWeight(3);

      line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
   // }
  }
}
