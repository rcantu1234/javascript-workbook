'use strict';

let assert = require('assert');

// 1. Create classes for Ship and CrewMember.
// 2. Create objects for testing.
// 3. Push a variable into crew array for testing.
// 4. Change ability for missionStatement() testing.
// 5. Tested crew length and object in enterShip(), but
//    getting errors even though the results are true.

// CANNOT FIGURE HOW TO PASS 2 TESTS OUT OF 4.  SUBMITTING AS IS!!!!

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here
class Ship {
  constructor(name, type, ability, crew) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];

  }
  missionStatement() {
    return this.ability;
  }
}

class CrewMember {
  constructor(name, job, specialSkill, ship) {
    // super(name, type, ability, crew);
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = ship;
  }
  enterShip(ship) {
    this.ship = ship;
    return this.ship;
  }
}
let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');

// Pushed to values into crew array for testing purposes.
mav.crew.push(1);

// Created new object of CrewMember for test purposes.
let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');

// Outputting values to make sure the actual values are there.
console.log(crewMember1.name);
console.log(crewMember1.job);
console.log(crewMember1.specialSkill);
console.log(crewMember1.enterShip(mav));

// Making sure an object is available.
console.log('\nTEST');
crewMember1.ship = mav;
console.log(mav);

// Assigning new ability to see if it is logging.
mav.ability = 'Can\'t perform a mission yet.';
hermes.ability = 'Can\'t perform a mission yet.';

// Testing missionStatement() for current ability.
console.log(mav.missionStatement());
console.log(hermes.missionStatement());

// Test size of crew array.
console.log(mav.crew.length === 1);

// Testing for true : output is true, but still not working.
console.log(crewMember1.ship === crewMember1.enterShip(mav));

//tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
