
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by:austin scavone
// Created on: april 2023
// This is the Splash Scene

class Splash Scene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene'})
}

init (data) {
  this.camera.main.setBackgroundColor('#ffffff')
}

preload () {
  console.log('Splash Scene')
}

create (data) {
}

update (time, delta){
}

export default SplashScene