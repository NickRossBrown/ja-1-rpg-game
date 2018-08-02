import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Character } from './game.js';

$(document).ready(function() {
  let newChar;
  let enemy = new Character("Code Bug", 0, 50, 5, 20, 20, 2);
  let enemyPlaceholder;
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
    enemyPlaceholder = newChar.randomEnemy(newChar.randomNumber());

    enemy.name = enemyPlaceholder.name;
    enemy.currentHtml = enemyPlaceholder.currentHtml;
    enemy.maxHtml = enemyPlaceholder.maxHtml;
    enemy.css = enemyPlaceholder.css;
    enemy.jquery = enemyPlaceholder.jquery;
    enemy.javascript = enemyPlaceholder.javascript;

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
    let enemyDefense = enemy.css;
    let enemySpeed = enemy.jquery;
    let enemyAttack = enemy.javascript;
    let enemyLevel = enemy.level;
    let enemyExperience = enemy.experience;

    $(".charBattleName").text(`Name: ${charName}`);
    $(".charBattleHealth").text(`HTML: ${charHealth} / ${charMaxHealth}`);
    $(".charBattleLevel").text(`Level: ${charLevel}`);

    $(".enemyBattleName").text(`Name: ${enemyName}`);
    $(".enemyBattleHealth").text(`HTML: ${enemyHealth} / ${enemyMaxHealth}`);
    $(".enemyBattleLevel").text(`Level: ${enemyLevel}`);

    if (charSpeed >= enemySpeed) {
      $(".attackEnemy").show();
      $(".yourTurn").show();
    } else if (enemySpeed > charSpeed){
      $(".yourTurn").hide();
      $(".enemyTurn").show();
      $(".attackEnemy").hide();
      setTimeout(function() {
        enemy.attack(newChar),
        $(".enemyTurn").hide(),
        $(".attackEnemy").show(),
        $(".yourTurn").show(),
        charHealth = newChar.currentHtml,
        $(".charBattleHealth").text(`HTML: ${charHealth} / ${charMaxHealth}`);
      }, 2000);
      setTimeout(function() {
        if (newChar.currentHtml <= 0) {
          $(".enemyTurn").hide();
          $(".attackEnemy").hide();
          $(".yourTurn").hide();
          $(".gameOver").show();
          $(".battle").hide();
        }
      }, 2001);
    }


  });

  $(".attackEnemy").click(function() {
    enemy.name = enemyPlaceholder.name;
    enemy.currentHtml = enemyPlaceholder.currentHtml;
    enemy.maxHtml = enemyPlaceholder.maxHtml;
    enemy.css = enemyPlaceholder.css;
    enemy.jquery = enemyPlaceholder.jquery;
    enemy.javascript = enemyPlaceholder.javascript;

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
    let enemyDefense = enemy.css;
    let enemySpeed = enemy.jquery;
    let enemyAttack = enemy.javascript;
    let enemyLevel = enemy.level;
    let enemyExperience = enemy.experience;
    //you attack enemy and hide the enemy turn sign and your attack button
    console.log("my attack " + newChar.javascript);
    console.log("enemy life" + enemy.currentHtml);
    newChar.attack(enemy);
    $(".attackEnemy").hide();
    $(".enemyTurn").hide();

    //sets timeout to show the enemy turn sign and update health with current enemy health
    setTimeout(function() {
      $(".enemyTurn").show(),
      enemyHealth = enemy.currentHtml,
      $(".yourTurn").hide();
      $(".enemyBattleHealth").text(`HTML: ${enemyHealth} / ${enemyMaxHealth}`);
    }, 2000);

    //sets timeout for checking if enemy is dead
    if (enemy.currentHtml <= 0) {
      setTimeout(function() {
        $(".enemyTurn").hide();
        $(".attackEnemy").hide();
        $(".yourTurn").hide();
        $(".battle").hide();
        alert(newChar.itemDrop(newChar.randomNumber()));
        $(".menu").show();
        newChar.gainExperience(enemy);

        delete Character.enemy;  //this is not deleting the enemy

        if (newChar.checkIfLevelUp()) {
          newChar.levelUp();
          alert("You leveled up!");
        }
      }, 2001);
    } else {
      //if they are not dead then show your turn sign and hide enemy turn sign
      $(".yourTurn").show();
      $(".enemyTurn").hide();

      //sets timeout for the enemy attacking you
      setTimeout(function() {
        enemy.attack(newChar),
        $(".enemyTurn").hide(),
        $(".yourTurn").show(),
        $(".attackEnemy").show(),
        charHealth = newChar.currentHtml,
        $(".charBattleHealth").text(`HTML: ${charHealth} / ${charMaxHealth}`);
      }, 4000);

      //checks to see if you are dead
      setTimeout(function() {
        if (newChar.currentHtml <= 0) {
          $(".enemyTurn").hide();
          $(".attackEnemy").hide();
          $(".yourTurn").hide();
          $(".gameOver").show();
          $(".battle").hide();
        }
      }, 4001);
    }
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
