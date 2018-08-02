export class Character {
  constructor(name, option, html, css, jquery, javascript, level = 1) {
    this.name = name;
    this.currentHtml = html; // current health
    this.maxHtml = html; // max health
    this.css = css; // defense
    this.jquery = jquery; // speed
    this.javascript = javascript; // attack
    this.inventory = {
      redBull : 0, // heals 30 health up to the max health
      w3Schools : 0 // increases all stats
    };
    this.level = level;
    this.experience = 0;
    if (option) {
      this.updateStats(option);
    }
  }
  updateStats(option) {
    if(option === "c") this.cSharp();
    else if (option === "i") this.interfaces();
    else this.ruby();
  }

  randomEnemy(rng) {
    let enemy;
    if (rng < 1) {
      enemy = new Character("Code Bug", 0, 50, 5, 20, 20, 2);
    } else {
      enemy = new Character("Code Review Monster", 0, 100, 10, 45, 40, 4)
    }
    return enemy;
  }

  attack(target) {
    target.currentHtml += target.css - this.javascript;
  }

  isDead() {
    return (this.html <= 0) ? true: false;
  }

  takeRedBull() {
    this.currentHtml += 30;
    if (this.currentHtml > this.maxHtml) this.currentHtml = this.maxHtml;
    this.inventory["redBull"] = this.inventory["redBull"] - 1;
  }

  browseW3Schools() {
    this.currentHtml += 40;
    this.maxHtml += 40;
    this.css += 5;
    this.jquery += 20;
    this.javascript += 20;
    this.experience += 10;
    this.levelUp();
    this.inventory["w3Schools"] = this.inventory["w3Schools"] - 1;
  }

  gainExperience(target) {
    this.experience += target.level;
  }

  checkIfLevelUp() {
    return (10 - this.experience < 0) ? true: false;
  }

  levelUp() {
    this.level++;
    this.maxHtml += 15;
    this.currentHtml = this.maxHtml;
    this.css += 5;
    this.jquery += 10;
    this.javascript += 15;
    this.experience = this.experience - 10;
  }

  randomNumber() {
    let rng = Math.floor(Math.random() * 10);
    return rng;
  }

  itemDrop(rng){
    if (rng < 6) {
      return "You did not get any item from the enemy";
    } else if (rng > 5 && rng < 9) {
      this.inventory["redBull"] = this.inventory["redBull"]+1;
      return "You got a RedBull!";
    } else {
      this.inventory["w3Schools"] = this.inventory["w3Schools"]+1;
      return "You got a W3Schools Page!";
    }
  }

  haveRedBull() {
    return (this.inventory["redBull"]) ? true: false;
  }

  haveW3Schools() {
    return (this.inventory["w3Schools"]) ? true: false;
  }

  showRedBull() {
    return this.inventory["redBull"];
  }

  showW3Schools() {
    return this.inventory["w3Schools"];
  }

  cSharp() {
    this.currentHtml = 80;
    this.maxHtml = 80;
    this.css = 10;
    this.jquery = 60;
    this.javascript = 90;
  }

  interfaces() {
    this.currentHtml = 1200;
    this.maxHtml = 1200;
    this.css = 20;
    this.jquery = 30;
    this.javascript = 80;
  }

  ruby() {
    this.currentHtml = 90;
    this.maxHtml = 90;
    this.css = 5;
    this.jquery = 70;
    this.javascript = 75;
  }


}
