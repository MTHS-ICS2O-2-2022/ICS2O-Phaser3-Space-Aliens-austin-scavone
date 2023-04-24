/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by:austin scavone
// Created on: april 2023
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene'})
}

init (data) {
  this.camera.main.setBackgroundColor('#ffffff')
  }

preload () {
  console.log('Title Scene')
}

create (data) {
}

update (time, delta){
 }
}

export default TitleScene