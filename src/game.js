export class Character {
  constructor(name, html, css, jquery, javascript, level = 1) {
    this.name = name;
    this.currentHtml = html; // current health
    this.maxHtml = html; // max health
    this.css = css; // defense
    this.jquery = jquery; // speed
    this.javascript = javascript; // attack
    this.inventory = {
      redBull : 0,
      w3Schools : 0
    };
    this.level = level;
    this.experience = 0;
  }
  attack(target) {
    target.currentHtml += target.css - this.javascript;
  }

  isDead() {
    if (this.html <= 0) return true;
    else return false;
  }

  takeRedbull() {
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
    this.experience += 20;
    this.inventory["w3Schools"] = this.inventory["w3Schools"] - 1;
  }

  gainExperience(target) {
    this.level += target.level;
  }

  checkIfLevelUp() {
    if (10 - this.experience < 0) return true;
    else return false;
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

  randomNumberForItemDrop() {
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

  showRedbull() {
    if (this.inventory["redBull"]) return true;
    else return false;
  }

  showw3Schools() {
    if (this.inventory["w3Schools"]) return true;
    else return false;
  }



}
