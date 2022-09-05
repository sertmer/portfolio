import p5 from 'p5';
import { Component, createRef } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.sketchRef = createRef();
  }

  Sketch = (p) => {
    let x = 100;
    let y = 100;

    p.setup = () => {
      p.createCanvas(200, 200);
    };

    p.draw = () => {
      p.background(0);
      p.fill(255);
      p.rect(x, y, 50, 50);
    }
  }

 
  componentDidMount() {
    this.myp5 = new p5(this.Sketch, this.sketchRef.current)
  }

  render() {
    return (
      <div className="App">
        <div ref={this.sketchRef}>

        </div>
      </div>
    )
  }
}

export default App;