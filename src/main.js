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
    console.log(newChar);
  });




  
});
