export class Character {
  constructor(name, html, css, jquery, javascript, level = 1) {
    this.name = name;
    this.currentHtml = html; // current health
    this.maxHtml = html; // max health
    this.css = css; // defense
    this.jquery = jquery; // speed
    this.javascript = javascript; // attack
    this.inventory = {};
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
    this.currenthtml += 30;
    if (this.currentHtml > this.maxHtml) this.currentHtml = this.maxHtml;
  }

  browseW3Schools() {
    this.currentHtml += 40;
    this.maxHtml += 40;
    this.css += 5;
    this.jquery += 20;
    this.javascript += 20;
    this.experience += 20;
  }

  gainExperience(target) {
    this.level += target.level;
  }

  checkIfLevelUp() {
    if (10 - this.level < 0) return true;
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
}
