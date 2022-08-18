import React from 'react'
import Typewriter from 'typewriter-effect';
export default function Effect() {
  return (
    <div>

<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Enter your text here!')
      .pauseFor(2000)
      .deleteAll()
      .typeString("My name is Usman Akhtar")
      .pause(2000)
      .deleteAll()
      .typeString("I am Web Developer!")
      .pause(2000)
      .deleteAll()
      .typeString("Have a Good Day! Enjoy your task!")
      .stop()
      .start();
  }}
/>
    </div>
  );
}
