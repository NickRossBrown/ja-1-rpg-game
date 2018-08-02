import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Character } from './game.js';

$(document).ready(function() {
  let newChar;
  $(".gameForm").submit(function(event) {
    event.preventDefault();
    newChar = new Character($("#charName").val(), $("#charTrack option:selected").val());
    $(".start").hide();
    $(".menu").show();
  });

  $(".startBattle").click(function() {
    $("#home").show();
    $(".menu").hide();
    $(".battle").show();
    let enemy = newChar.randomEnemy(newChar.randomNumber());
    let charName = newChar.name;
    let charHealth = newChar.currentHtml;
    let charMaxHealth = newChar.maxHtml;
    let charDefense = newChar.css;
    let charSpeed = newChar.jquery;
    let charAttack = newChar.javascript;
    let charLevel = newChar.level;
    let charExperience = newChar.experience;

    let enemyName = enemy.name;
    let enemyHealth = enemy.currentHtml;
    let enemyMaxHealth = enemy.maxHtml;
    let enemyDefense = newChar.css;
    let enemySpeed = newChar.jquery;
    let enemyAttack = newChar.javascript;
    let enemyLevel = enemy.level;
    let enemyExperience = newChar.experience;

    $(".charBattleName").text(`Name: ${charName}`);
    $(".charBattleHealth").text(`HTML: ${charHealth} / ${charMaxHealth}`);
    $(".charBattleLevel").text(`Level: ${charLevel}`);

    $(".enemyBattleName").text(`Name: ${enemyName}`);
    $(".enemyBattleHealth").text(`HTML: ${enemyHealth} / ${enemyMaxHealth}`);
    $(".enemyBattleLevel").text(`Level: ${enemyLevel}`);

    if (charSpeed > enemySpeed) {
      $(".attackEnemy").show();
      $(".yourTurn").show();
    } else {

      $(".enemyTurn").show();
      setTimeout(function() {
        enemy.attack(newChar),
        $(".enemyTurn").hide(),
        $(".attackEnemy").show(),
        $(".yourTurn").show(),
        charHealth = newChar.currentHtml,
        $(".charBattleHealth").text(`HTML: ${charHealth} / ${charMaxHealth}`);
      }, 2000);
    }

    $(".attackEnemy").click(function() {
      newChar.attack(enemy);
      setTimeout(function() {
        $(".enemyTurn").show(),
        enemyHealth = enemy.currentHtml,
        $(".enemyBattleHealth").text(`HTML: ${enemyHealth} / ${enemyMaxHealth}`);
      }, 2000);
    });

  });





  $(".bossBattle").click(function() {
    $("#home").show();
    $(".menu").hide();
    $(".battle").show();
  });

  $("#home").click(function() {
    $("#home").hide();
    $(".menu").show();
    $(".battle").hide();
    $(".stats").hide();
    $(".inventory").hide();
  });

  $(".showStats").click(function() {
    $("#home").show();
    $(".menu").hide();
    $(".stats").show();

    let name = newChar.name;
    let health = newChar.currentHtml;
    let maxHealth = newChar.maxHtml;
    let defense = newChar.css;
    let speed = newChar.jquery;
    let attack = newChar.javascript;
    let level = newChar.level;
    let experience = newChar.experience;

    $(".showName").text(`Name: ${name}`);
    $(".showHealth").text(`HTML: ${health} / ${maxHealth}`);
    $(".showDefense").text(`CSS: ${defense}`);
    $(".showSpeed").text(`jQuery: ${speed}`);
    $(".showAttack").text(`Javascript: ${attack}`);
    $(".showLevel").text(`Level: ${level}`);
    $(".showExperience").text(`Experience: ${experience}`);

  });

  $(".showInventory").click(function() {
    $("#home").show();
    $(".menu").hide();
    $(".inventory").show();
    let redBullCount = newChar.inventory["redBull"];
    let w3schoolCount = newChar.inventory["w3Schools"];
    $(".redBullInventory").text(`RedBulls: ${redBullCount}`);
    $(".w3SchoolsInventory").text(`W3School Tome Pages: ${w3schoolCount}`);
    if (newChar.inventory["redBull"] > 0) $(".useRedBullButton").html("<button class='useRedBull'>Use RedBull</button>");
    else $(".useRedBullButton").html("");

    if (newChar.inventory["w3Schools"] > 0) $(".useW3Schools").html("<button class='useW3Schools'>Read a page of W3Schools</button>");
    else $(".useW3Schools").html("");
  });

  $(".useRedBullButton").click(function() {
    newChar.takeRedBull();
    $(".showInventory").click();
  });

  $(".useW3Schools").click(function() {
    newChar.browseW3Schools();
    $(".showInventory").click();
  });




});
