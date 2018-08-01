import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {character} from "./game.js";

$(document).ready(function() {
  $("gameForm").submit(function(event) {
    event.preventDefault();
    var name = $("#charName").val();
    var track = $("#charTrack").val();
  });
});
