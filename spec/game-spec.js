import { Character } from './../src/game.js';

describe ('Character', function () {
  let testCharacter;
  let testCharacter2;
  beforeEach(function() {
    testCharacter = new Character ("C#", 80, 0, 60, 50)
    testCharacter2 = new Character ("C#", 80, 0, 60, 50)
  });

  it ('should test the idDead() method', function() {
    expect(testCharacter.isDead()).toEqual(false);
  });

  it ('should test attack() method and subtract health from a target', function() {
    testCharacter.attack(testCharacter2);
    expect(testCharacter2.currentHtml).toEqual(30);
  });

  it ('should test takeRedull() method that increases health 30 points', function() {
    testCharacter.currentHtml -= 50;
    testCharacter.takeRedbull();
    expect(testCharacter.currentHtml).toEqual(60);
  });

  it ('should test tbrowseW3Schools() method that increases every stat and decreases 1 browseW3Schools item from inventory', function() {
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

  it ('should test itemDrop() method to see if adds an item', function() {
    testCharacter.itemDrop(9);
    expect(testCharacter.inventory).toEqual({redBull: 0, w3Schools: 1});
  });

  it ('should test randomNumberForItemDrop() method to see if it returns a number between 0-9', function() {
    let randomNumber = testCharacter.randomNumberForItemDrop();
    let possibleNumberArray = [0,1,2,3,4,5,6,7,8,9];
    expect(possibleNumberArray.includes(randomNumber)).toEqual(true);
  });

  it ('should test showRedbull() method to see if redbull is in the inventory', function() {
    testCharacter.inventory["redBull"] = testCharacter.inventory["redBull"]+1;
    expect(testCharacter.showRedbull()).toEqual(true);
  });

  it ('should test showw3Schools() method to see if w3Schools is in the inventory', function() {
    testCharacter.inventory["w3Schools"] = testCharacter.inventory["w3Schools"]+1;
    expect(testCharacter.showw3Schools()).toEqual(true);
  });



});
