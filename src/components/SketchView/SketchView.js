import p5 from 'p5';
import React, { useState, useRef, useEffect } from 'react';
import './SketchView.css'
import * as sketches from '../../sketchbook/sketchbook';
// import rightArrow from '../../Assets/Images/002-next.svg'
// import leftArrow from '../../Assets/Images/001-back.svg'

const SketchView = () => {
  const sketchNames = Object.keys(sketches)
  const [count, setCount] = useState(0)
  const sketchRef = useRef()



  useEffect = () => {
    this.myp5 = new p5(sketches[count], this.sketchRef.current)
  }

  return (
    <div className='sketch-view'>
      <div className='sketch-and-nav' ref={sketchRef}>
        
      </div>
      <div className='meta-data'>
        <p>{sketchNames[count]}</p>
        <p>s. ertmer</p>
      </div>
    </div>

  )
}

export default SketchView