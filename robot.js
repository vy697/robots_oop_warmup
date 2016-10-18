'use strict';

var Robot = function (startCharge) {
  this.startCharge = startCharge;
  this.currentPosition = [0, 0];

};

Robot.prototype.position = function(position) {
  position = this.currentPosition;
  return position;
};

Robot.prototype.battery= function() {
  var battery = this.startCharge;
  return battery;
};

Robot.prototype.moveUp= function() {
   this.currentPosition[1] += 1;
   console.log(this.currentPosition);
   return this.currentPosition;

};

Robot.prototype.moveLeft= function() {
   this.currentPosition[0] -= 1;
   return this.currentPosition;
};



Robot.prototype.history= function() {
   this.currentPosition[0] -= 1;
   return this.currentPosition;
};

// it("can record their history", function () {
//   robot = new Robot(8);
//   expect(robot.history()).toEqual([]);
//
//   robot.moveLeft();
//   expect(robot.history()).toEqual(["left"]);
//
//   robot.moveUp();
//   expect(robot.history()).toEqual(["left", "up"]);
// });


var robot = new Robot(8);
console.log(robot.moveUp());
console.log(robot.moveUp());

module.exports = Robot;
