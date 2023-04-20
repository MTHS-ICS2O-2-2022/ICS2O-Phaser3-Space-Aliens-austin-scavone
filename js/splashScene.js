
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by:austin scavone
// Created on: april 2023
// This is the Splash Scene

/**
 * This class is the Splash Scene
 */
class SplashScene extends Phaser.Scene {
 /**
  * Method is the construtor
  */
  constructor () {
    super({ key: 'splashScene'})
}

/**
 * Can be defined on your own Scenes.
 * This method is called by the Scene Manager when the scene starts,
 * before preload() and create()
 * @param {object} data Any data passed via ScenePlugin.add() or ScenePlugin.start()
 */
init (data) {
  this.camera.main.setBackgroundColor('#ffffff')
}

/**
 * Can be defined on your own Scenes.
 * Use it to load assets.
 */
preload () {
  console.log('Splash Scene')
}

/**  
 * Can be defined on your own Senses
 * Use it to create your game objects.
 * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start(
*/
create (data) {
  //pass
}

/**
 * This method is called once per game step while the scene is running
 * @param {*} time -the current time.
 * @param {*} delta -the delta time in ms since the last frame
 */
update (time, delta){
  //pass
  }
}

export default SplashScene