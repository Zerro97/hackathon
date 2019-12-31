import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

class Building extends React.Component {
  constructor(props) {
    super(props);

    this.drawWindows = this.drawWindows.bind(this)

    this.state = {
      posts: [],
      color: 'white'
    };
  }
  
    componentDidMount() {
      axios.get('http://localhost:5000/posts/')
        .then(response => {
          console.log(response.data);
          this.setState({ posts: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
    
    handleClick = () => {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    };

    drawWindows() {
      console.log();
      let windows = [];

      //let rowS = 1 + this.state.posts.length/7;
      //let colS = this.state.posts.length % 7;

      for(let row=0; row<6; row++) {
        for(let col=0; col<7; col++) {
          windows.push(
            <Rect 
              x={col * 100 + 50 + window.innerWidth * 0.1}
              y={row * 100 + 50}
              width={50}
              height={50}
              fill={this.state.color}
              shadowBlur={5}
              onClick={this.handleClick}
            />
          )
        }
      }
      
      return windows;
    }

    render() {
      return (
        <React.Fragment>
          <Rect
            x={window.innerWidth * 0.1}
            y={0}
            width={window.innerWidth * 0.6}
            height={1000}
            fill={"grey"}
            shadowBlur={5}
          />
          {this.drawWindows()}
        </React.Fragment>
      );
    }
  }

export default class PostArea extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Building/>
        </Layer>
      </Stage>
    )
  }
}