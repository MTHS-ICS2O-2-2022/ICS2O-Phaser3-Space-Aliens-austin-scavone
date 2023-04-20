/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by:austin scavone
// Created on: april 2023
// This is the Phaser3 Configuration file

//scene import statements
import SplashScene from './splashScene.js'

//create the new scenes
const splashScene = new SplashScene ()

//**
 * Start Phaser Game.
 */
const config = {
  type:Phaser.Auto,
  width: 1920,
  height:1080,
  physics: { 
    default: 'arcade',
    arcade: {
      debug: true,
  },
},
  // set background color
  backgroundColor:0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //we place it in the middle of the page
    autocenter: Phaser.Scale.Center_BOTH
  },
}

const game = new Phaser.Game(config)
//console.log(game)

// load scenes
//NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add ('splashScene' , splashScene)


//the start title
game.scene.start('splashScene')