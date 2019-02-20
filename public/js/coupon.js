'use strict';


 var guac_track = 'un';
 var gran_track = 'un';
 var pizza_track = 'un';
 var spam_track = 'un';

 function guacChange(){
	var image = document.getElementById('guac');
	
	if(guac_track=='un'){
		image.src='images/guac_pressed.jpg';
		guac_track='pr';
	}else{
		image.src='images/guac_unpressed.jpg';
		guac_track='un';
	}
 }
 
  function granChange(){
	var image = document.getElementById('gran');
	
	if(gran_track=='un'){
		image.src='images/gran_pressed.jpg';
		gran_track='pr';
	}else{
		image.src='images/gran_unpressed.jpg';
		gran_track='un';
	}
 }
 
  function pizzaChange(){
	var image = document.getElementById('pizza');
	
	if(pizza_track=='un'){
		image.src='images/pizza_pressed.jpg';
		pizza_track='pr';
	}else{
		image.src='images/pizza_unpressed.jpg';
		pizza_track='un';
	}
 }
 
  function spamChange(){
	var image = document.getElementById('spam');
	
	if(spam_track=='un'){
		image.src='images/spam_pressed.jpg';
		spam_track='pr';
	}else{
		image.src='images/spam_unpressed.jpg';
		spam_track='un';
	}
 }