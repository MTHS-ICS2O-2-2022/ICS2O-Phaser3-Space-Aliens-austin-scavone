/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by:austin scavone
// Created on: april 2023
// This is the Phaser3 Configuration file

import SplashScene from './splashScene.js'
import TitleScene from './titleScenee.js'

//Our game scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()

//* Game scene */
const SplashScene = new SplashScene ()
const config = {
  type:Phaser.Auto,
  width: 1920,
  height:1080,
  physics: { 
    default: 'arcade',
    arcade: {
      debug: true
  }
},
  // set background color
  backgroundColor:0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    //we place it in the middle of the page
    autocenter: Phaser.Scale.Center_BOTH
  }
}

const game = new Phaser.Game(config)

// load scenes
//NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add ('splashScene' , splashScene)
game.scene.add ('titleScene' , titleScene)

//start title
game.scene.start('splashScene')
