import { Character } from './../src/game.js';

describe ('Character', function () {
  let testCharacter;
  let testCharacter2;
  beforeEach(function() {
    testCharacter = new Character ("C#Student", "c")
    testCharacter2 = new Character ("RubyStudent", "r")
  });

  it ('should test attack() method and subtract health from a target', function() {
    testCharacter.attack(testCharacter2);
    expect(testCharacter2.currentHtml).toEqual(5);
  });

  it ('should test the idDead() method', function() {
    expect(testCharacter.isDead()).toEqual(false);
  });

  it ('should test takeRedull() method that increases health 30 points', function() {
    testCharacter.currentHtml -= 50;
    testCharacter.takeRedBull();
    expect(testCharacter.currentHtml).toEqual(60);
  });

  it ('should test browseW3Schools() method that increases every stat and decreases 1 browseW3Schools item from inventory', function() {
    testCharacter.browseW3Schools();
    expect(testCharacter.currentHtml, testCharacter.maxHtml, testCharacter.css, testCharacter.jquery,  testCharacter.javascript,  testCharacter.experience,  testCharacter.inventory).toEqual(120,120,5,80,80,20,{redBull: 0, w3Schools: -1});
  });

  it ('should test gainExperience(target) method that increases a chacters level to the targets level', function() {
    testCharacter2.level = 3
    testCharacter.gainExperience(testCharacter2)
    expect(testCharacter.level).toEqual(4);
  });

  it ('should test checkIfLevelUp() method to see if it is time to level up', function() {
    expect(testCharacter.checkIfLevelUp()).toEqual(false);
    testCharacter.experience += 11;
    expect(testCharacter.checkIfLevelUp()).toEqual(true);
  });

  it ('should test levelUp() method to see if it increases every stat', function() {
    testCharacter.levelUp();
    expect(testCharacter.level, testCharacter.currentHtml, testCharacter.maxHtml, testCharacter.css, testCharacter.jquery,  testCharacter.javascript,  testCharacter.experience).toEqual(2,95,95,5,70,65,-10);

  });

  it ('should test randomNumber() method to see if it returns a number between 0-9', function() {
    let randomNumberTest = testCharacter.randomNumber();
    let possibleNumberArray = [0,1,2,3,4,5,6,7,8,9];
    expect(possibleNumberArray.includes(randomNumberTest)).toEqual(true);
  });

  it ('should test itemDrop() method to see if adds an item', function() {
    testCharacter.itemDrop(9);
    expect(testCharacter.inventory).toEqual({redBull: 0, w3Schools: 1});
  });

  it ('should test haveRedBull() method to see if RedBull is in the inventory', function() {
    testCharacter.inventory["redBull"] = testCharacter.inventory["redBull"]+1;
    expect(testCharacter.haveRedBull()).toEqual(true);
  });

  it ('should test haveW3Schools() method to see if w3Schools is in the inventory', function() {
    testCharacter.inventory["w3Schools"] = testCharacter.inventory["w3Schools"]+1;
    expect(testCharacter.haveW3Schools()).toEqual(true);
  });

  it ('should test showRedBull() method to return the number of RedBull in the inventory', function() {
    testCharacter.itemDrop(7);
    expect(testCharacter.showRedBull()).toEqual(1);
  });

  it ('should test showW3Schools() method to return the number of w3Schools in the inventory', function() {
    testCharacter.itemDrop(9);
    expect(testCharacter.showW3Schools()).toEqual(1);
  });
















});
